import React from "react";

function MobileNumber({
  onClickSaveNumber,
  inputNumber,
  enterNumber,
  numberInput,
}) {
  return (
    <div>
      <p>전화번호 입력창</p>
      <input
        type="text"
        placeholder="핸드폰번호를 입력해주세요!"
        value={inputNumber}
        onChange={enterNumber}
        ref={numberInput}
      />
      <button onClick={onClickSaveNumber}>저장</button>
    </div>
  );
}

export default MobileNumber;
