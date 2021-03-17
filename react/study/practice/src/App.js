import { useState } from "react";
import "./App.css";
import VendingMachine from "./VendingMachine";
import 연습1 from "./연습1";

function App() {
  const [coin, setCoin] = useState("");

  const insertCoin = (e) => {
    if (e.target.value > 0 && e.target.value <= 1000) {
      setCoin(e.target.value);
      return;
    }
  };

  return (
    <>
      <p>투입한 금액</p>
      <input placeholder="금액입력" value={coin} onChange={insertCoin} />
      <VendingMachine coin={coin} />
      <연습1 />
    </>
  );
}

export default App;
