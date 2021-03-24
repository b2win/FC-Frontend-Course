import React, { useState } from "react";

function Phone({ names, onDelete, setNames }) {
  const [number, setNumber] = useState("");

  const typeNumber = (e) => {
    setNumber(e.target.value);
  };

  const addMobile = () => {
    setNames(
      names.map((user) =>
        user.active === true ? { ...user, mobile: { number } } : user
      )
    );
    console.log(names);
  };

  return (
    <>
      <div>
        <p>전화번호</p>
        <input
          onChange={typeNumber}
          value={number}
          placeholder="위에 이름을 선택 후 전화번호를 입력해주세요!"
        />
      </div>
      <div>
        <button onClick={addMobile} value={number}>
          저장
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default Phone;
