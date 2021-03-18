import React, { useState } from "react";
import Plus from "./Plus";
import Minus from "./Minus";
import Multiple from "./Multiple";
import Divide from "./Divide";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const original = (e) => {
    if (e.target.value >= 0 && e.target.value <= 1000) {
      setNumber(e.target.value);
    }
    return;
  };

  return (
    <>
      <h1>계산기 문제</h1>
      <div>
        <p>숫자입력: </p>
        <input
          placeholder="0 ~ 1000을 입력해 주세요!"
          value={number}
          onChange={original}
        />
      </div>
      <br />
      <Plus number={number} />
      <br />
      <Minus number={number} />
      <br />
      <Multiple number={number} />
      <br />

      <Divide number={number} />
    </>
  );
}

export default App;
