import React, { useState } from "react";

import "./App.css";
import Display from "./Display";
import Phone from "./Phone";

function App() {
  const [names, setNames] = useState([
    { id: 1, username: "토르", mobile: "", active: false },
    { id: 2, username: "헐크", mobile: "", active: false },
    { id: 3, username: "캡틴아메리카", mobile: "", active: false },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  const typeName = (e) => {
    setInputText(e.target.value);
  };

  const addUser = () => {
    const nextNames = names.concat({
      id: nextId,
      username: inputText,
      mobile: "",
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onDelete = () => {
    setNames(names.filter((user) => user.active === false));
  };

  const onToggle = (id) => {
    setNames(
      names.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // const addMobile = () => {
  //   setNames(
  //     names.map((user) =>
  //       user.active === true ? { ...user, mobile: "010" } : user
  //     )
  //   );
  //   console.log(names);
  // };

  return (
    <>
      <h1>전화번호부</h1>
      <div>
        <p>이름 입력란:</p>
        <input
          placeholder="이름을 입력해주세요!"
          onChange={typeName}
          value={inputText}
        />
        <button onClick={addUser}>추가</button>
      </div>
      <Display names={names} onToggle={onToggle} />
      <Phone
        names={names}
        nextId={nextId}
        onDelete={onDelete}
        onToggle={onToggle}
        setNames={setNames}
        active={names.active}
        key={names.id}
        // addMobile={addMobile}
      />
    </>
  );
}

export default App;
