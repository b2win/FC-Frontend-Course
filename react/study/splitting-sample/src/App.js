import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello World!!!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
