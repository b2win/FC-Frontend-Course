import React, { useState } from "react";

function VendingMachine({ coin }) {
  const [message, setMessage] = useState("선택해주세요!");
  const [leftover, setLeftover] = useState("");

  const select = (e) => {
    if (coin - e.target.value < 0) {
      alert("금액을 넣어주세요!");
      return;
    }

    if (window.confirm("구매 하시겠습니까?")) {
      setMessage(e.target.name);
      setLeftover(coin - e.target.value);
    }
  };

  const style = {
    color: "skyblue",
    fontWeight: 900,
  };

  return (
    <>
      <div>
        <p>음료선택</p>
        <button
          onClick={select}
          value={100}
          name="Cola"
          style={coin >= 100 ? style : null}
        >
          콜라 - 100원
        </button>
        <button
          onClick={select}
          value={200}
          name="Cider"
          style={coin >= 200 ? style : null}
        >
          사이다 - 200원
        </button>
        <button
          onClick={select}
          value={500}
          name="Fanta"
          style={coin >= 500 ? style : null}
        >
          환타 - 500원
        </button>
        <button
          onClick={select}
          value={1000}
          name="LifeDrink"
          style={coin >= 1000 ? style : null}
        >
          생명수 - 1000원
        </button>
      </div>
      <div>
        <p>결과</p>
        <input placeholder="나오는 곳" value={message} readOnly />
      </div>
      <div>
        <p>잔액 </p>
        <input placeholder={coin} value={leftover} readOnly />
      </div>
    </>
  );
}

export default VendingMachine;
