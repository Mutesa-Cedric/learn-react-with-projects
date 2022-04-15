import './App.css';
import React ,{useState,useEffect} from 'react';
import Die from "./components/Die";
import {nanoid} from "nanoid";
import WinPopup from "./components/WinPopup"
import LostPopup from "./components/LostPopup"
function App() {
  

  let generateNewDie=()=>{

    return {
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()  
    }
  }


  let allDiceNumbers=()=>{
    let diceNumbers=[];

    for(let i=0; i <10;i++){
       diceNumbers.push(generateNewDie())
    }
    return diceNumbers;
  }

  //states
  const [dice, setDice] = useState(allDiceNumbers())
  const [tenzies, setTenzies] = useState(false);
  const [lost,setLost] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [time, setTime] = useState({
    min: 0,
    seconds: 35
  })
  const [score, setScore] = useState(1240)
  const [remainingRolls, setRemainingRolls] = useState(30)
  const [outOfRolls, setOutOfRolls] = useState(false)
  const [maxScore, setMaxScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  // console.log(time)
  // console.log(lost)

  // winning
  useEffect(() =>{
      let allHeld=dice.filter(die=>die.isHeld)
      if(allHeld.length===10){
        let allEqual=0;
          let firstDie=allHeld[0].value
          for(let i=0; i < 10; i++){
            if(firstDie===allHeld[i].value){
              allEqual++;
            }
          }
          if(allEqual===10){
            setTenzies(prevValue=>{
              return true
            })
            setCurrentScore(score);
          }
      }
 },[dice])

 //setting maxScore to localstorage

 useEffect(()=>{
    let maximumScore=window.localStorage.getItem('maximumScore');
    if(maximumScore===null){
      window.localStorage.setItem('maximumScore',maxScore);
    }else if(currentScore>maximumScore){
      window.localStorage.setItem('maximumScore',currentScore)
      setMaxScore(currentScore)
    }
    else if(currentScore<=maximumScore){
      setMaxScore(maximumScore)
    }
 },[tenzies])

  // holding a clicked Die
  let holdDice=(id) => {
      setDice(dice=>dice.map(die=>{
        if(die.id===id){
          return {
            ...die,
            isHeld:!die.isHeld
          }
        }
        else{
          return die;
        }
    }))
  }

  // returning die component
  let diceElements=dice.map(die=>{
    return (
      <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={()=>holdDice(die.id)}/>
    )
  })

  // rolling a dice

  let rollDice=()=>{
    setRolls(prevRolls=>prevRolls+1)
    setRemainingRolls(prevRolls=>prevRolls-1)
    setDice(prevDice=>
      prevDice.map(die=>{
       return die.isHeld?die:generateNewDie()
      })
    )
  }

 

  //tracking score

  useEffect(() => {
    setScore(prevScore=>prevScore-40)
  },[rolls])


  //loosing a game

  //counter
  useEffect(() => {
    let timeInterval= setInterval(() => {
        setTime(prevTime=>{
          if(prevTime.seconds===0){
            return {
              min:prevTime.min-1,
              seconds:59
            }
          }
          else{
            return {
              ...prevTime,
              seconds:prevTime.seconds-1
            }
          }
        })
    },1000)

    return ()=>clearInterval(timeInterval)
  },[])

  //setting lost game

  //timeout
  useEffect(() => {
    if(time.min ===0 && time.seconds===0){ 
      setLost(prevState=>{
        return !prevState
      })
    }
  },[time])

  //outOfRolls

  useEffect(() => {
    if(remainingRolls===0){
      setOutOfRolls(prevState=>{
        return !prevState
      })
    }
  },[remainingRolls])

   //restarting game
   let restart=()=>{
    setTenzies(false)
    setDice(allDiceNumbers())
    setRolls(0)
    setScore(1200)
    setRemainingRolls(30)
    setOutOfRolls(false)
    setTime({
      min:0,
      seconds:35
    })
    setLost(false)  
  }

  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg-[#0B2434] font-['Inter',sans-serif]">
       <main className="bg-[#F5F5F5] w-3/4 h-3/4 flex flex-col items-center justify-center  rounded-xl">
          <div className="flex flex-col items-center justify-center w-2/4">
            <h1 className="text-4xl font-medium text-[#2B283A] ">Tenzies</h1>
            <p className="text-xl text-[#4A4E74] flex text-center items-center justify-end my-7">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. you have {remainingRolls} rolls remaining</p>
          </div>
          {!tenzies && <h1 className="text-lg border-2 px-4 py-3 rounded-xl bg-[#4A4E74] opacity-80 text-white capitalize">time remaining : {time.min} min {time.seconds} sec</h1>}
          <div className="grid grid-cols-5 my-8  w-4/6">
              {diceElements}
          </div>
          {!tenzies && <button onClick={rollDice} className="bg-[#5035FF] hover:bg-[#0B2434] hover:text-white text-white text-xl px-12 rounded-md py-2">Roll</button>}
          {tenzies && <WinPopup reset={restart} rolls={rolls} timeUsed={time} maxScore={maxScore} score={score}/>}
          {lost && !tenzies && !outOfRolls &&   <LostPopup reset={restart} timeOut={true}/>}
          {outOfRolls && <LostPopup reset={restart} timeOut={false}/>}
       </main>
    </div>
  );
}

export default App;
