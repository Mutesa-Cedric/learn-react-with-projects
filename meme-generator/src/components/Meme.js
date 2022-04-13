import memeImg from '../images/memeImg.jpg'
import React, {useState,useEffect} from "react";
let Meme=()=>{
    const [count, setcount] = useState(0)
    const [meme, setmeme] = useState({
        topText:"",
        bottomText:"",
        imageUrl:"https://i.imgflip.com/261o3j.jpg"
    })

    console.log(`count ${count}`)
    console.log(meme)

    let handleChange=(event)=>{
        setmeme((prevState)=>{
            let {name,value}=event.target;
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    let changeCount=()=>{
    let number=Math.floor(Math.random()*100)
        setcount(prevCount=>{
            return number;
        })
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(response=>response.json())
        .then((data) => {
            // console.log(data.data.memes[count].url);
            setmeme(prevState=>{
                return {
                    ...prevState,
                    imageUrl:data.data.memes[count].url
                }
            })
        }).catch((err) => {
            console.log(err)
        });
    }, [count])
    
    

    return (
        <div className="flex flex-col items-center w-full px-[20%]">
            <form className="flex flex-col items-center w-full">
                <div className="flex w-full mt-12 mb-4">

                    <input 
                    className="w-full mr-4 border-gray-500 border-2 py-2 rounded-md placeholder:text-xl placeholder:text-gray-600 placeholder:px-6"
                    placeholder="enter top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    
                    />
                    <input 
                    className="w-full border-2 border-gray-500 rounded-md placeholder:text-xl placeholder:text-gray-600 placeholder:px-6"
                    placeholder="enter the bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                    
                    />

                </div>

            </form>
            <button className="px-24 w-full bg-gradient-to-r rounded-md text-white text-xl from-[#672280] to-[#A626D3] py-2 " onClick={changeCount}>Get a new meme image</button>

            <main className="w-full object-cover relative flex flex-col items-center mt-10">
                <img src={meme.imageUrl} className="w-full max-w-full h-[450px] rounded-sm" alt="meme cover"/>
                <p className="absolute text-3xl text-white font-normal  uppercase font-['Impact'] my-12 top-0 ">{meme.topText}</p>
                <p className="absolute text-3xl text-white font-normal  uppercase font-['Impact'] my-12 bottom-0">{meme.bottomText}</p>
            </main>    
        </div>
    )
}

export default Meme;