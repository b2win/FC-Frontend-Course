import React, { useState } from "react";

function PhoneNumber({ names, setNextId, nextId, setNames, id }) {
  const [number, setNumber] = useState("");

  const typeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onSave = (e) => {
    setNames.mobile(e.target.value);
    setNumber("");
  };

  // const onDelete = () => {
  //   names.pop();
  //   setNextId(nextId - 1);
  // };

  const onDelete = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <div id="phone">
        <p>전화번호</p>
        <input
          placeholder="전화번호를 입력해주세요!"
          onChange={typeNumber}
          value={number}
          type="tel"
          pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}"
        />
        &nbsp;
        <small>입력예시: 010-0000-0000 </small>
        <br />
        <button value={number} onClick={onSave}>
          저장
        </button>
        <button onClick={() => onDelete(id)}>삭제</button>
      </div>
    </>
  );
}

export default PhoneNumber;
