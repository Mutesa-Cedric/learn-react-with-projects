import React from "react";
import logo from '../images/logo192.png';

let Navbar=()=>{

    return (

        <div className="flex justify-between items-center h-[10%] bg-black">
        <div className="flex justify-between items-center">
            <img src={logo} className="w-12 h-12 mx-2" alt="logo">
            </img>
            <h2 className="text-cyan-300 text-xl mx-2">ReactFacts</h2>
        </div>
         <div className="flex justify-between items-center text-white capitalize mx-2 text-xl">
            <h1>react course--project1</h1>
         </div>
     </div> 
    )
}

export default Navbar;