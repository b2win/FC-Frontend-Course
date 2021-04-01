import React from "react";

function Number({ typeNumber, inputNumber, onClickSave }) {
  return (
    <div>
      <p>전화번호</p>
      <input
        placeholder="전화번호를 입력해주세요!"
        value={inputNumber}
        onChange={typeNumber}
      />
      <button onClick={onClickSave}>저장</button>
      <button>삭제</button>
    </div>
  );
}

export default Number;
