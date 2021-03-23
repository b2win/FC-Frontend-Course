import React, { useState } from "react";

function PhoneNumber({ names, setNextId, nextId }) {
  const [number, setNumber] = useState("");

  const typeNumber = (e) => {
    setNumber(e.target.value);
  };

  // const onSave = () => {
  //   const nextNames;
  // };

  const onDelete = () => {
    names.pop();
    setNextId(nextId - 1);
  };

  return (
    <>
      <div>
        <p>전화번호</p>
        <input
          placeholder="전화번호를 입력해주세요!"
          onChange={typeNumber}
          value={number}
          type="tel"
          pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}"
        />
        &nbsp;
        <span>입력예시: 010-0000-0000 </span>
      </div>
      <div>
        <button>저장</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default PhoneNumber;
