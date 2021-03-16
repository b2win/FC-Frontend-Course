import logo from "./logo.svg";
import "./App.css";
import VendingMachine from "./VendingMachine";
import { useState } from "react";
import InputSample from "./InputSample";
import Say from "./Say";

function App() {
  // const [coin, setCoin] = useState("");

  // const insertCoin = (e) => {
  //   if (e.target.value > 0 && e.target.value <= 1000) {
  //     setCoin(e.target.value);
  //     return;
  //   }
  // };

  // return (
  //   <>
  //     <p>투입 금액</p>
  //     <input placeholder="금액입력" value={coin} onChange={insertCoin} />
  //     <VendingMachine coin={coin} />
  //   </>
  // );
  return <Say />;
}

export default App;
