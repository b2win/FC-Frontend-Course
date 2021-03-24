import React, { useState } from "react";

function Phone({ names, nextId, onDelete, onToggle }) {
  const [mobile, setMobile] = useState("");

  const typeNumber = (e) => {
    setMobile(e.target.value);
  };

  const addMobile = () => {
    const nextNames = names.concat({
      id: nextId,
      username: "",
      mobile: "",
    });
    setMobile(mobile);
  };

  return (
    <>
      <div>
        <p>전화번호</p>
        <input onChange={typeNumber} value={mobile} />
      </div>
      <div>
        <button onClick={addMobile}>저장</button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default Phone;
