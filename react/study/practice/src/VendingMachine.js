import React, { useState } from "react";

function VendingMachine({ coin }) {
  const [leftover, setLeftover] = useState("");
  const [result, setResult] = useState("");

  const buy = (e) => {
    if (e.target.value - coin > 0) {
      alert("돈이 부족합니다!");
      return;
    }
    if (window.confirm("구매 하시겠습니까?")) {
      setResult(e.target.name + " 구매완료!");
      setLeftover(coin - e.target.value);
    }
  };

  const style = {
    backgroundColor: "skyblue",
    fontWeight: 900,
  };

  return (
    <div>
      <p>음료선택</p>
      <button
        name="Cola"
        value={100}
        onClick={buy}
        style={coin >= 100 ? style : null}
      >
        콜라 - 100원
      </button>
      <button
        name="Cider"
        value={200}
        onClick={buy}
        style={coin >= 200 ? style : null}
      >
        사이다 - 200원
      </button>
      <button
        name="Fanta"
        value={500}
        onClick={buy}
        style={coin >= 500 ? style : null}
      >
        환타 - 500원
      </button>
      <button
        name="LifeDrink"
        value={1000}
        onClick={buy}
        style={coin >= 1000 ? style : null}
      >
        생명수 - 1,000원
      </button>
      <p>결과</p>
      <input type="button" value={result} placeholder="나오는곳" readOnly />
      <p>잔액</p>
      <input
        type="button"
        value={leftover + "원"}
        placeholder="남은금액"
        readOnly
      />
    </div>
  );
}

export default VendingMachine;
