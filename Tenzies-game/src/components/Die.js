
import Dot from "./Dot"
let Die=(props)=>{


    return (

        <div className={props.isHeld?"w-16 h-16 shadow-lg my-4 bg-[#59E391] text-2xl flex items-center mx-auto justify-center cursor-pointer rounded-lg font-medium":"w-16 h-16 shadow-lg my-4 text-2xl flex items-center mx-auto justify-center cursor-pointer rounded-lg font-medium"} onClick={props.holdDice}>
            { props.value===1 && <h1>
                <Dot isHeld={props.isHeld}/>
            </h1>
             }   
             { props.value===2 &&
              <h1 className="flex">
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
            </h1>
             } 
               { props.value===3 &&
              <h1 className="grid grid-cols-2 ">
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
            </h1>
             } 
              { props.value===4 &&
              <h1 className="grid grid-cols-2 ">
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>

            </h1>
             } 
             { props.value===5 &&
              <h1 className="grid grid-rows-2">
                  <div className="flex mx-1 items-center justify-between">
                    <Dot isHeld={props.isHeld}/>
                    <Dot isHeld={props.isHeld}/>
                  </div>
                  <div className="flex mx-[4px] items-center justify-center my-1">
                    <Dot isHeld={props.isHeld}/>
                    <section className="relative bottom-[15px]">
                        <Dot isHeld={props.isHeld}/>
                    </section>
                    <Dot isHeld={props.isHeld}/>
                  </div>
            </h1>
             } 
             { props.value===6 &&
              <h1 className="grid grid-cols-3 ">
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
                <Dot isHeld={props.isHeld}/>
            </h1>
             } 
        </div>
    )
}

export default Die;