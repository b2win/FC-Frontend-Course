import React, { useState } from "react";
import VendingMachine from "./VendingMachine";
import "./App.css";

function App() {
  const [coin, setCoin] = useState("");

  const insertCoin = (e) => {
    if (e.target.value <= 1000 && e.target.value >= 0) {
      setCoin(e.target.value);
    }
  };

  return (
    <>
      <div>투입한 금액</div>
      <input
        type="number"
        placeholder="금액 입력"
        onChange={insertCoin}
        value={coin}
      />
      <VendingMachine coin={coin} />
    </>
  );
}

export default App;
