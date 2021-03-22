import "./App.css";
import React, { useState } from "react";
import VendingMachine from "./VendingMachine";
import Sample from "./Sample";

function App() {
  const [insertCoin, setInsertCoin] = useState("");
  const onType = (e) => {
    if (e.target.value >= 0 && e.target.value <= 1000) {
      setInsertCoin(e.target.value);
    }
  };
  return (
    <>
      {/* <h1>자판기</h1>
      <div>
        <p>투입금액</p>
        <input placeholder="금액입력" onChange={onType} value={insertCoin} />
      </div>
      <VendingMachine money={insertCoin} /> */}
      <Sample />
    </>
  );
}

export default App;
