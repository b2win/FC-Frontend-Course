import "./App.css";
import React, { useState } from "react";
import NameList from "./NameList";
import PhoneNumber from "./PhoneNumber";

function App() {
  const [names, setNames] = useState([
    { id: 1, text: "토르", mobile: "", active: true },
    { id: 2, text: "헐크", mobile: "", active: true },
    { id: 3, text: "캡틴아메리카", mobile: "", active: false },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  const onType = (e) => {
    setInputText(e.target.value);
  };

  const onAdd = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="이름"
          onChange={onType}
          value={inputText}
        />
        <button onClick={onAdd}>추가</button>
      </div>
      <NameList names={names} />
      <PhoneNumber
        nextId={nextId}
        names={names}
        setNames={setNames}
        setNextId={setNextId}
      />
    </>
  );
}

export default App;
