import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [mode, setmode] = useState('light');  //weather dark mode is enabled or node

  const toggleMode = () => {
    removeBodyClasses();
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#04192f";
      showAlert("Dark mode is enabled", "success");
      document.title = ("TextUtils Dark Mode")
      // setInterval(() => {
      //   document.title = ("TextUtils is Amazing");
      // }, 2000);
      // setInterval(() => {
      //   document.title = ("Install TextUtils");
      // }, 1500);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = ("TextUtils Light Mode")
    }
  }

  // TO ADD MORE THEMES FOR COLOR

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  }


  const changeMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  return (
    <>
      <Router>
        <Navbar title="TEXTUTILS" about="About" mode={mode} toggleMode={toggleMode} changeMode={changeMode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />} />
            <Route exact path="about" element={<About />} />
          </Routes>
        </div>
      </Router>

       {/* <Navbar/> */}
       {/* <Navbar title="TEXTUTILS" about="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container my-3">
              <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />
        </div> */}


    </>
  );
}

export default App;

