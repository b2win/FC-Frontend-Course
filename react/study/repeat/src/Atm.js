import React, { useState } from "react";

function Atm({ amount, custom }) {
  const [message, setMessage] = useState("");

  const money = amount || custom;

  const withdrawal = () => {
    if (money > 0) {
      // window.confirm(money + "원을 출금 하시겠습니까?");
      window.confirm(`${money} 원을 출금 하시겠습니까?`);
      // setMessage(money + "원 출금 완료");
      setMessage(`${money}원 출금 완료!`);
    } else {
      // alert("금액을 선택해 주세요!");
      alert(`금액을 선택해 주세요!`);
    }
  };

  const deposit = () => {
    if (money > 0) {
      // window.confirm(money + "원을 입금 하시겠습니까?");
      window.confirm(`${money} 원을 입금 하시겠습니까?`);
      // setMessage(money + "원 입금 완료");
      setMessage(`${money}원 입금완료!`);
    } else {
      // alert("금액을 선택해 주세요!");
      alert(`금액을 선택해 주세요!`);
    }
  };

  return (
    <>
      <div>
        <span>입력/선택 금액 : </span>
        <input placeholder="금액" value={money} readOnly />
      </div>
      <span>출금/입금 선택 : </span>
      <button value={money} onClick={withdrawal}>
        출금
      </button>
      <button value={money} onClick={deposit}>
        입금
      </button>
      <div>
        <span>업무 처리 결과 : </span>
        <input placeholder="처리 결과" readOnly value={message} />
      </div>
    </>
  );
}

export default Atm;
