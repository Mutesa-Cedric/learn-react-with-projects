import './App.css';
import React from 'react';
import data from "./data"
import Navbar from "./components/Navbar"
import Location from './components/Location';

function App() {

    let locationElements=data.map(location=>{
        return (<Location
        key={location.title}
        data={location}
        />)
    })
    return (
        <div className="flex flex-col">
           <Navbar/>
           <div className=" px-56"> 
               {locationElements}
            </div> 
        </div>
    )
}

export default App;