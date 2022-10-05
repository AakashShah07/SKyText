// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route  } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const togglePinkMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#865592";
      showAlert("Pink mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <NavBar
          title="TextISky"
          mode={mode}
          toggleMode={toggleMode}
          togglePinkMode={togglePinkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        
        {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}

          
            
              <TextForm
                heading="Enter the text for Analyze below"
                mode={mode}
              />
            git 

           
            
          </div>
        </Router>
    </>
  );
}

export default App;
