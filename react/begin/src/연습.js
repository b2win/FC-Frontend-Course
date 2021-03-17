import "./App.css";
import React, { useState } from "react";
import VendingMachine from "./VendingMachine";

function App() {
  const [coin, setCoin] = useState("");

  const put = (e) => {
    setCoin(e.target.value);
  };

  return (
    <>
      <p>Money</p>
      <button onClick={put} value={10}>
        10원
      </button>
      <button onClick={put} value={50}>
        50원
      </button>
      <button onClick={put} value={100}>
        100원
      </button>
      <button onClick={put} value={500}>
        500원
      </button>
      <button onClick={put} value={1000}>
        1,000원
      </button>
      <button onClick={put} value={0}>
        반환
      </button>
      <p>투입 금액</p>
      <input placeholder="금액 입력" value={coin} />
      <VendingMachine coin={coin} />
    </>
  );
}

export default App;
