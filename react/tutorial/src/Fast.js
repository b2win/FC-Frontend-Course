import React, { useState } from "react";

function Fast() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const typeName = (e) => {
    setName(e.target.value);
  };

  const typeNickname = (e) => {
    setNickname(e.target.value);
  };

  const clear = () => {
    setName("");
    setNickname("");
  };

  return (
    <>
      <div>
        <input placeholder="이름" value={name} onChange={typeName} />
        <input placeholder="닉네임" value={nickname} onChange={typeNickname} />
        <button onClick={clear}>초기화</button>
      </div>
      값: {name} ({nickname})
    </>
  );
}

export default Fast;
