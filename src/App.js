import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
    }


  }
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
