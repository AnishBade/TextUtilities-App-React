import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type 
    })
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }


  }
  return (
    <>
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter your text to analyze" mode={mode}/>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
