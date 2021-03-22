import React, { useState } from "react";

function VendingMachine({ money }) {
  const [display, setDisplay] = useState("");
  const [change, setChange] = useState("");

  const buy = (e) => {
    if (e.target.value - money > 0) {
      alert("돈을 넣어주세요!");
      return;
    } else if (window.confirm("구매하시겠습니까?")) {
      setDisplay(e.target.value);
      setChange(money - e.target.value);
    }
  };

  return (
    <>
      <div>
        <p>음료선택</p>
        <button value={100} onClick={buy}>
          콜라 - 100원
        </button>
        <button value={200} onClick={buy}>
          사이다 - 200원
        </button>
        <button value={500} onClick={buy}>
          환타 - 500원
        </button>
        <button value={1000} onClick={buy}>
          생명수 - 1,000원
        </button>
      </div>
      <div>
        <p>결과</p>
        <input placeholder="나오는 곳" value={display} />
      </div>
      <div>
        <p>잔액</p>
        <input placeholder="잔액" value={change} />
      </div>
    </>
  );
}

export default VendingMachine;
