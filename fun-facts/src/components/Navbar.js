import React from "react";
import logo from '../images/logo192.png';

let Navbar=(props)=>{

    return (
    <div className={props.darkMode?"flex justify-between items-center h-[10%] bg-black":"flex justify-between items-center h-[10%] bg-slate-200"}>
        <div className="flex justify-between items-center">
            <img src={logo} className="w-12 h-12 mx-2" alt="logo">
            </img>
            <h2 className="text-cyan-400 font-bold text-2xl mx-2">ReactFacts</h2>
        </div>
         <div className="flex justify-between items-center text-slate-400  capitalize mx-2 text-2xl">
            light 
            <div className={props.darkMode?"bg-white flex overflow-hidden justify-between w-14 h-6 rounded-xl mx-2":"bg-slate-700 overflow-hidden w-14 h-6 rounded-xl flex justify-between mx-2"} onClick={props.toggleMode}>
                <div className={props.darkMode?"":"w-3/6 h-full bg-white rounded-xl"}></div>
                <div className={props.darkMode?"w-3/6 h-full bg-slate-700 rounded-xl":""}></div>
            </div> dark
         </div>
     </div> 
    )
}

export default Navbar;