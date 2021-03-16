import React, { useState } from "react";

function VendingMachine({ coin }) {
  const [message, setMessage] = useState("");
  const [change, setChange] = useState("");

  const buy = (e) => {
    if (e.target.value - coin > 0) {
      alert("돈이 부족합니다!");
      return;
    }
    if (window.confirm("구매하시겠습니까?")) {
      setMessage(e.target.name + " 구매완료!");
      setChange(coin - e.target.value);
    }
  };

  const style = {
    backgroundColor: "skyblue",
  };
  return (
    <>
      <p>음료 선택</p>
      <button
        placeholder="콜라 - 100원"
        value={100}
        onClick={buy}
        style={coin >= 100 ? style : null}
        name="Cola"
      >
        콜라 - 100원
      </button>
      <button
        placeholder="콜라 - 100원"
        value={200}
        onClick={buy}
        style={coin >= 200 ? style : null}
        name="Cider"
      >
        사이다 - 200원
      </button>
      <button
        placeholder="콜라 - 100원"
        value={500}
        onClick={buy}
        style={coin >= 500 ? style : null}
        name="Fanta"
      >
        환타 - 500원
      </button>
      <button
        placeholder="콜라 - 100원"
        value={1000}
        onClick={buy}
        style={coin >= 1000 ? style : null}
        name="Life"
      >
        생명수 - 1,000원
      </button>
      <p>결과</p>
      <input placeholder="나오는 곳" value={message} />
      <p>잔액</p>
      <input placeholder="남은 금액" value={change} />
    </>
  );
}

export default VendingMachine;
