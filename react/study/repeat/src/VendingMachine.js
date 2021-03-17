import React, { useState } from "react";

function VendingMachine({ coin }) {
  const [display, setDisplay] = useState("");
  const [change, setChange] = useState("");

  const buy = (e) => {
    const { name, value } = e.target;
    setDisplay(name);
    setChange(value);
  };

  return (
    <div>
      <p>음료 선택</p>
      <button name="Cola" value={100} onClick={buy}>
        콜라 - 100원
      </button>
      <p>결과</p>
      <input placeholder="나오는 곳" value={display} />
      <p>잔액</p>
      <input placeholder="잔액" value={coin - change} />
    </div>
  );
}

export default VendingMachine;
