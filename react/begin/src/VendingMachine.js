import React, { useState } from "react";

function VendingMachine({ coin }) {
  const buy = (e) => {
    if (e.target.value - coin > 0) {
      alert("돈이 부족합니다.");
      return;
    } else window.confirm("구매하시겠습니까?");
    {
      setDisplay(e.target.name + " 구매완료!");
      setChange(coin - e.target.value + "원");
    }
  };

  const [display, setDisplay] = useState("");
  const [change, setChange] = useState("");

  const style = {
    backgroundColor: "skyblue",
  };

  return (
    <>
      <p>음료 선택</p>
      <button
        name="콜라"
        value={100}
        onClick={buy}
        style={coin >= 100 ? style : null}
      >
        콜라 - 100원
      </button>
      <button
        name="사이다"
        value={200}
        onClick={buy}
        style={coin >= 200 ? style : null}
      >
        사이다 - 200원
      </button>
      <button
        name="환타"
        value={500}
        onClick={buy}
        style={coin >= 500 ? style : null}
      >
        환타 - 500원
      </button>
      <button
        name="생명수"
        value={1000}
        onClick={buy}
        style={coin >= 1000 ? style : null}
      >
        생명수 - 1,000원
      </button>
      <p>결과</p>
      <input placeholder="나오는 곳" value={display} readOnly />
      <p>잔액</p>
      <input placeholder="잔액" value={change} readOnly />
    </>
  );
}

export default VendingMachine;
