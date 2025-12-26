import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() =>{
      //   document.title = 'TextUtils is Amazing Mode';
      // },2000);
      // setInterval(() =>{
      //   document.title = ' Install TextUtils Now';
      // },1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode}  aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router basename="/TextUtils">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove extra Spaces "
                  mode={mode}
                />
              }
              />


          </Routes>

        </div>
      </Router>


    </>

  );
}

export default App;
