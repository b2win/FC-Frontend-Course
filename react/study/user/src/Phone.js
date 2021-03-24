import React, { useState } from "react";

function Phone({ names, nextId, onDelete, onToggle, setNames }) {
  const [number, setNumber] = useState("");

  const typeNumber = (e) => {
    setNumber(e.target.value);
  };

  const addMobile = (mobile) => {
    setNames(
      names.map((user) =>
        user.mobile === mobile ? { ...user, mobile: !names.mobile } : user
      )
    );
    console.log(names);
  };

  return (
    <>
      <div>
        <p>전화번호</p>
        <input onChange={typeNumber} value={number} />
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
