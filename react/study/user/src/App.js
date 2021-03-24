import React, { useState } from "react";

import "./App.css";
import Display from "./Display";
import Phone from "./Phone";

function App() {
  const [names, setNames] = useState([
    { id: 1, username: "토르", mobile: true, active: true },
    { id: 2, username: "헐크", mobile: true, active: false },
    { id: 3, username: "캡틴아메리카", mobile: true, active: false },
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

  const onDelete = (id) => {
    setNames(names.filter((user) => user.id !== id));
    console.log(setNames);
  };

  const onToggle = (id) => {
    setNames(
      names.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  // const addMobile = (mobile) => {
  //   setNames(
  //     names.map((user) =>
  //       user.mobile === mobile ? { ...user, mobile: !names.mobile } : user
  //     )
  //   );
  //   console.log(names);
  // };

  return (
    <>
      <div>
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
        // addMobile={addMobile}
      />
    </>
  );
}

export default App;
