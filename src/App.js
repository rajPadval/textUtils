import "./App.css";
// import About from "./components/About";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'


function App() {
      const [mode, setMode] = useState('light')
      const toggleMode = ()=> {
        if (mode==='light') {
          setMode('dark');
          document.body.style.backgroundColor='#23323d';
        } else {
          setMode('light')
          document.body.style.backgroundColor='white';
        }
      }
      
  return (
    <>
      <Navbar title="Props" about="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the Text to Analyze" mode={mode}  />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
