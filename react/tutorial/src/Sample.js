import React, { useState } from "react";

function Sample() {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
    { id: 5, text: "비트윈" },
  ]);

  const [list, setList] = useState("");
  const [nextId, setNextId] = useState(5);

  const onType = (e) => {
    setList(e.target.value);
  };

  console.log(names.text);
  console.log(list);

  const add = () => {
    if (list === "") {
      alert("입력해주세요!");
      return;
    }
    if (list === names.text) {
      // 중복 알럿 아직 해결 못함!!
      alert("중복입니다!");
      return;
    } else {
      const nextNames = names.concat({
        id: nextId,
        text: list,
      });
      setNextId(nextId + 1);
      setNames(nextNames);
      setList("");
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const deleteFirst = () => {
    names.shift();
    setNextId(nextId - 1);
  };

  const deleteLast = () => {
    names.pop();
    setNextId(nextId - 1);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input
        type="text"
        placeholder="입력해 주세요!"
        onChange={onType}
        value={list}
      />
      <button onClick={add}>추가</button>
      <button onClick={deleteFirst}>맨처음 삭제</button>
      <button onClick={deleteLast}>마지막 삭제</button>
      <ul>{namesList}</ul>
    </>
  );
}

export default Sample;
