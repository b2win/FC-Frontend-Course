import React, { useState } from "react";

function Plus({ number }) {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState("");

  const plus = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10) {
      setDisplay(e.target.value);
      return;
    }
  };

  const calculate = () => {
    setAnswer(Number(number) + Number(display));
  };

  return (
    <>
      <input
        placeholder="1 ~ 10을 입력해주세요!"
        onChange={plus}
        value={display}
      />
      <button onClick={calculate}>+</button>
      <div>
        <input value={answer} placeholder="결과" readOnly />
      </div>
    </>
  );
}

export default Plus;
