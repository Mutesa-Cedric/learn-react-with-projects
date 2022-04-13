import './App.css';
import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {

  const [darkMode, setdarkMode] = useState(false)
  const toggleMode=()=>{
    setdarkMode(prevMode=>!prevMode);
  }
  return (
    <div className=" w-full h-screen">
        <Navbar darkMode={darkMode} toggleMode={toggleMode} />
        <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
