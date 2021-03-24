import React, { useState } from "react";

function InputSample_original() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearAll = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  // const [addName, setAddName] = useState("");

  // const [addNickname, setAddNickname] = useState("");

  // const typeName = (e) => {
  //   setAddName(e.target.value);
  // };

  // const typeNickname = (e) => {
  //   setAddNickname(e.target.value);
  // };

  // const clearAll = () => {
  //   setAddName("");
  //   setAddNickname("");
  // };

  return (
    <>
      <div>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          value={name}
        />
        <input
          placeholder="닉네임"
          name="nickname"
          onChange={onChange}
          value={nickname}
        />
        <button onClick={clearAll}>초기화</button>
        <div>
          <b>
            이름: {name} ({nickname})
          </b>
        </div>
      </div>
    </>
  );
}

export default InputSample_original;
