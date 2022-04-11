import './App.css';
import Info from './components/Info.js';
import About from './components/About.js';
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="bg-[#23252C] w-screen h-auto box-border mx-0  p-0  flex items-center justify-center">
      <div className=" md:w-[50%] lg:w-[30%] w-[80%] h-[95%] rounded-[10px] my-10 bg-[#1A1B21] "> 
          <Info/>
          <About/>
          <Interests/>
          <Footer/>
      </div>  
    </div>
  )
}

export default App;
