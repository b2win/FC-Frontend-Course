import React, { useState } from "react";

function InputSample() {
  const [addName, setAddName] = useState("");

  const [addNickname, setAddNickname] = useState("");

  const typeName = (e) => {
    setAddName(e.target.value);
  };

  const typeNickname = (e) => {
    setAddNickname(e.target.value);
  };

  const clearAll = () => {
    setAddName("");
    setAddNickname("");
  };

  return (
    <>
      <div>
        <input placeholder="이름" value={addName} onChange={typeName} />
        <input
          placeholder="닉네임"
          value={addNickname}
          onChange={typeNickname}
        />
        <button onClick={clearAll}>초기화</button>
        <div>
          <b>
            이름: {addName} {addNickname}{" "}
          </b>
        </div>
      </div>
    </>
  );
}

export default InputSample;
