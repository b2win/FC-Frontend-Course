import React, { useState } from "react";
import "./App.css";
import Display from "./Display";
import Phone from "./Phone";

function App() {
  const [username, setUsername] = useState([
    { id: 1, name: "토르", mobile: "", active: false },
    { id: 2, name: "헐크", mobile: "", active: false },
    { id: 3, name: "아이언맨", mobile: "", active: false },
    { id: 4, name: "스파이더맨", mobile: "", active: false },
    { id: 5, name: "배트맨", mobile: "", active: false },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);

  const typeName = (e) => {
    setInputText(e.target.value);
  };

  const addUser = () => {
    const addName = username.concat({
      id: nextId,
      name: inputText,
      mobile: "",
    });
    setNextId(nextId + 1);
    setInputText("");
    setUsername(addName);
  };

  const onToggle = (id) => {
    setUsername(
      username.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <h1>전화번호부</h1>
      <div>
        <p>이름 입력란:</p>
        <input
          placeholder="이름을 입력해주세요!"
          value={inputText}
          onChange={typeName}
        />
        <button onClick={addUser}>추가</button>
      </div>
      <Display username={username} onToggle={onToggle} />
      <Phone username={username} setUsername={setUsername} />
    </>
  );
}

export default App;
