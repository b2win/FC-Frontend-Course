import React, { useState } from "react";

function Divide({ number }) {
  const [display, setDisplay] = useState(1);
  const [answer, setAnswer] = useState();

  const divide = (e) => {
    if (e.target.value >= 1 && e.target.value <= 10) {
      setDisplay(e.target.value);
      return;
    }
  };

  const calculate = () => {
    setAnswer(number / display);
  };

  return (
    <>
      <input
        placeholder="1 ~ 10을 입력해주세요!"
        onChange={divide}
        value={display}
      />
      <button onClick={calculate}>/</button>
      <div>
        <input value={answer} placeholder="결과" readOnly />
      </div>
    </>
  );
}

export default Divide;
