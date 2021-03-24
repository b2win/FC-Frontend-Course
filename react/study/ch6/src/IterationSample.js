import React, { useState } from "react";

function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const typeIn = (e) => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    // console.log(nextNames);
    setInputText("");
  };

  const onDelete = (id) => {
    const nextNames = names.filter((xyz) => xyz.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((abc) => (
    <li key={abc.id} onDoubleClick={() => onDelete(abc.id)}>
      {abc.text}
    </li>
  ));
  return (
    <>
      <input placeholder="입력해주세요!" onChange={typeIn} value={inputText} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
}

export default IterationSample;
