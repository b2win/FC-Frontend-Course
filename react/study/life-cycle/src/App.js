import React, { useState } from "react";
import Average from "./Average";
import Counter from "./Counter";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
        {visible && <Info />}
      </div>
      <hr />
      {/* <Info /> */}
      <Counter />
      <hr />
      <Average />
    </>
  );
}
export default App;
