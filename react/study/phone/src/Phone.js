import React, { useState } from "react";

function Phone({ username, setUsername }) {
  const [number, setNumber] = useState("");

  const typeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onDelete = () => {
    setUsername(username.filter((user) => user.active === false));
    console.log(username);
  };

  const addNumber = () => {
    setUsername(
      username.map((user) =>
        user.active === true ? { ...user, mobile: number } : user
      )
    );
    console.log(username);
  };

  return (
    <>
      <div>
        <p>전화번호 입력란:</p>
        <input
          placeholder="전화번호를 입력해 주세요!"
          onChange={typeNumber}
          value={number}
        />
      </div>
      <div>
        <button onClick={addNumber} key={username.id}>
          저장
        </button>
        <button onClick={onDelete}>삭제</button>
      </div>
    </>
  );
}

export default Phone;
