import './App.css';
import React, {useState} from 'react'
import Info from './components/Info.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

function App() {
  const [darkMode, setdarkMode] = useState(true)
  let toggleDarkMode=()=>{
    setdarkMode(prevMode=>!prevMode)
  }
  return (
    <div className="bg-[#23252C] w-screen h-auto box-border mx-0  p-0  flex items-center justify-center">
      <div className=" md:w-[50%] lg:w-[30%] w-[80%] h-[95%] rounded-[10px] my-10">
        <div className={darkMode?"bg-[#1A1B21]":"bg-[#F5F5F5] rounded-[10px]"}> 
            <Info darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <About darkMode={darkMode}/>
            <Interests darkMode={darkMode}/>
            <Footer darkMode={darkMode}/>
        </div>
      </div>  
    </div>
  )
}

export default App;
