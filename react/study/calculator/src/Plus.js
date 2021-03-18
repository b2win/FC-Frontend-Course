import React, { useState } from "react";

function Plus({ number }) {
  const [display, setDisplay] = useState(0);
  const [answer, setAnswer] = useState(0);

  const plus = (e) => {
    if (e.target.value >= 0 && e.target.value <= 10) {
      setDisplay(e.target.value);
      return;
    }
  };

  const calculate = () => {
    setAnswer(number * 1 + display * 1);
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
