import React, { useState } from "react";

function Machine({ coin }) {
  const buy = (e) => {
    const { name, value } = e.target;
    if (coin - value < 0) {
      alert("돈이 부족합니다");
      return;
    } else window.confirm("구매하시겠습니까?");
    {
      setDisplay(name);
      setChange(value);
    }
  };

  const [display, setDisplay] = useState("");
  const [change, setChange] = useState("");

  // const [inputs, setInputs] = useState("");

  return (
    <>
      <p>음료 선택</p>
      <button onClick={buy} name="Cola" value={100}>
        콜라 - 100원
      </button>
      <button onClick={buy} name="Cider" value={200}>
        사이다 - 200원
      </button>
      <button onClick={buy} name="Fanta" value={500}>
        환타 - 500원
      </button>
      <button onClick={buy} name="Life" value={1000}>
        생명수 - 1,000원
      </button>
      <p>결과</p>
      <input value={display} />
      <p>잔액</p>
      <input value={coin - change} />
    </>
  );
}

export default Machine;
