import "./App.css";
import React, { useState } from "react";
import AddedName from "./AddedName";

function App() {
  const typeName = (e) => {
    setInputName(e.target.value);
  };
  const [nameList, setNameList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [nextId, setNextId] = useState(0);
  const [selectedName, setSelectedName] = useState({});

  const select = (nameList) => {
    setSelectedName();
  };

  const addUser = () => {
    const addList = nameList.concat({
      id: nextId,
      name: inputName,
      mobile: "",
    });
    setNextId(nextId + 1);
    setNameList(addList);
    setInputName("");
  };

  return (
    <>
      <div>
        <p>이름 입력</p>
        <input
          placeholder="이름을 입력해주세요!"
          onChange={typeName}
          value={inputName}
        />
        <button onClick={addUser}>추가</button>
      </div>
      <AddedName nameList={nameList} />
    </>
  );
}

export default App;
