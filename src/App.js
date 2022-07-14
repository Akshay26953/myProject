import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import ModeData from "./component/Mode";
import Content from "./component/Content";
import Navbar from "./component/Navbar";
import Meme from "./component/Meme";

function App() {
  const [mode, setMode] = useState(ModeData.default);
  function lightMode() {
    setMode(ModeData.default);
  }
  function DarkMode() {
    setMode(ModeData.dark);
  }
  function PinkMode() {
    setMode(ModeData.pink);
  }

  document.body.style.backgroundColor = `${mode.bgc}`;
  return (
    <>
      <BrowserRouter>
      <Navbar
            lMode={lightMode}
            dMode={DarkMode}
            pMode={PinkMode}
            mode={mode}
          />
        <Routes>
        <Route path="/" element={<Content mode={mode} />} />
        <Route path="meme-generator" element={<Meme mode={mode} />} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
