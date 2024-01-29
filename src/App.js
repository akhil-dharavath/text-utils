import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import{
//   BrowserRouter as Router,Routes,Route
// }from 'react-router-dom';
import Alert from "./components/Alert";
import { useState } from "react";
// import Practice from "./components/Practice";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled");
    }
  };
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert();
    }, 1500);
  };
  return (
    // <Router>
    // <div>
    //   <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
    //   <Alert alert={alert}/>
    //   <Routes>
    //   <Route exact path='/' element={<Textform mode={mode} />} />
    //   <Route exact path='/about' element={<About mode={mode}/>} />
    //   <Route exact path='/practice' element={<Practice/>} />
    //   </Routes>
    //       </div>
    // </Router>
    <div>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert} />
      <Textform mode={mode} />
    </div>
  );
}

export default App;
