import React, { useState } from "react";

function Calculator({ number }) {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");

  const plus = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10) {
      setDisplay(e.target.value);
      return;
    }
  };

  // const sum = () => {
  //   setAnswer(Number(number) + Number(display));
  // };
  // const subtract = () => {
  //   setAnswer(Number(number) - Number(display));
  // };
  // const multiply = () => {
  //   setAnswer(Number(number) * Number(display));
  // };
  // const divide = () => {
  //   setAnswer(Number(number) - Number(display));
  // };

  return (
    <>
      <input
        placeholder="1 ~ 10을 입력해주세요!"
        onChange={plus}
        value={display}
      />
      <br />
      <div>
        <button
          onClick={() => {
            if (display > 0) {
              setAnswer(Number(number) + Number(display));
            } else {
              alert("숫자를 입력해주세요!");
            }
          }}
        >
          더하기
        </button>
        <button onClick={() => setAnswer(Number(number) - Number(display))}>
          빼기
        </button>
        <button onClick={() => setAnswer(Number(number) * Number(display))}>
          곱하기
        </button>
        <button onClick={() => setAnswer(Number(number) / Number(display))}>
          나누기
        </button>
      </div>
      <br />
      <div>
        <input value={answer} placeholder="결과" readOnly />
      </div>
    </>
  );
}

export default Calculator;
