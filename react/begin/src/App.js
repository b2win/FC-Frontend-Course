import React, { useState } from "react";
import Machine from "./Machine";

function App() {
  const [coin, setCoin] = useState("");

  const put = (e) => {
    if (e.target.value >= 0 && e.target.value <= 1000) {
      setCoin(e.target.value);
      alert(e.target.value + "원이 투입되었습니다!");
    }
  };

  // const insertMoney = (e) => {
  //   if (e.target.value >= 0 && e.target.value <= 1000) {
  //     setCoin(e.target.value);
  //   }
  // };

  return (
    <>
      <p>돈</p>
      <button value={10} onClick={put}>
        10원
      </button>
      <button value={50} onClick={put}>
        50원
      </button>
      <button value={100} onClick={put}>
        100원
      </button>
      <button value={500} onClick={put}>
        500원
      </button>
      <button value={1000} onClick={put}>
        1,000원
      </button>
      <p>투입 금액</p>
      <input placeholder="금액 입력" value={coin} onChange={put} readOnly />
      <Machine coin={coin} />
    </>
  );
}

export default App;
