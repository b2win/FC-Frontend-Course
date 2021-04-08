import React from "react";
import Button from "./components/Button";
import "./App.scss";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

function App() {
  return (
    <>
      <div className="App">
        <div className="buttons">
          <Button>Button</Button>
        </div>
      </div>
      <hr />
      <div>
        <SassComponent />
      </div>
      <CSSModule />
    </>
  );
}

export default App;
