import React, { useState } from "react";

function Multiple({ number }) {
  const [display, setDisplay] = useState("");
  const [answer, setAnswer] = useState();

  const multiple = (e) => {
    if (e.target.value >= 1 && e.target.value <= 10) {
      setDisplay(e.target.value);
      return;
    }
  };

  const calculate = () => {
    setAnswer(number * display);
  };

  return (
    <>
      <input
        placeholder="1 ~ 10을 입력해주세요!"
        onChange={multiple}
        value={display}
      />
      <button onClick={calculate}>*</button>
      <div>
        <input value={answer} placeholder="결과" readOnly />
      </div>
    </>
  );
}

export default Multiple;
