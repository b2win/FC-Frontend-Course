import "./App.css";
import React, { useState } from "react";
import Atm from "./Atm";

function App() {
  const [amount, setAmount] = useState("");
  const [custom, setCustom] = useState("");

  const select = (e) => {
    setAmount(e.target.value);
  };

  const put = (e) => {
    if (e.target.value >= 0 && e.target.value <= 100000) {
      setCustom(e.target.value);
    }
  };

  const clear = () => {
    0;
  };

  return (
    <>
      <h1>ATM 예제</h1>
      <div>
        <span>금액 직접입력 : </span>
        <input placeholder="직접입력" value={custom} onChange={put} />
      </div>
      <button value={1000} onClick={select}>
        1000원
      </button>
      <button value={5000} onClick={select}>
        5000원
      </button>
      <button value={10000} onClick={select}>
        10,000원
      </button>
      <button value={50000} onClick={select}>
        50,000원
      </button>
      <button value={""} onClick={select}>
        정정
      </button>
      <button onDoubleClick={clear} value={}>
        초기화
      </button>
      <Atm amount={amount} custom={custom} />
    </>
  );
}

export default App;
