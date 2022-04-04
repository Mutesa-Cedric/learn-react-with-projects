import React from "react";

let Main=()=>{

    return (
        <div id="mainDiv" className="bg-slate-900  flex items-center justify-center flex-col w-full h-[90%]">
            <h1 className="text-3xl font-bold absolute bottom-[68%] right-[45%]  text-white">
                Fun facts about React
            </h1>
            <div className="flex flex-col items-start justify-evenly text-white text-md h-3/6">
                <div className="flex items-center">
                    <span className="text-xl mx-4 bg-cyan-500 h-3 w-3 rounded-[50%]">
                        </span>
                        <div>Was first released in 2013</div>
                </div>
                <div className="flex items-center">
                    <span className="text-xl mx-4 bg-cyan-500 h-3 w-3 rounded-[50%]">
                        </span>
                        <div>Was originally created by Jordan Walkie</div>
                </div>
                <div className="flex items-center">
                    <span className="text-xl mx-4 bg-cyan-500 h-3 w-3 rounded-[50%]">
                        </span>
                        <div>Has over 100k stars on GitHub</div>
                </div>
                <div className="flex items-center">
                    <span className="text-xl mx-4 bg-cyan-500 h-3 w-3 rounded-[50%]">
                        </span>
                        <div>Is maintained by Facebook</div>
                </div>
                <div className="flex items-center">
                    <span className="text-xl mx-4 bg-cyan-500 h-3 w-3 rounded-[50%]">
                        </span>
                        <div>Powers thousands of enterprise app, including mobile apps</div>
                </div>
            </div>
        </div>
    )
}

export default Main;