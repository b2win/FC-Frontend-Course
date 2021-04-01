import "./App.css";
import React, { useState } from "react";
import AddedName from "./AddedName";
import Number from "./Number";

function App() {
  const typeName = (e) => {
    setInputName(e.target.value);
  };

  const typeNumber = (e) => {
    setInputNumber(e.target.value);
    setBasket({
      ...basket,
      mobile: inputNumber,
    });
    console.log(basket);
  };

  const [nameList, setNameList] = useState([]);
  const [inputName, setInputName] = useState("");
  const [nextId, setNextId] = useState(0);

  const [basket, setBasket] = useState("");
  const [inputNumber, setInputNumber] = useState("");

  const onClickSelect = (user) => {
    setBasket(user);
    console.log(user);
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

  const onClickSave = () => {
    nameList.map((user) => {
      if (user.id === basket.id) {
        user.mobile = basket.mobile;
      }
    });
    setNameList(nameList);
    //이 부분이 제일 이해 불가!
    console.log(nameList);
    setInputNumber("");
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
      <AddedName nameList={nameList} onClickSelect={onClickSelect} />
      <Number
        inputNumber={inputNumber}
        typeNumber={typeNumber}
        onClickSave={onClickSave}
      />
    </>
  );
}

export default App;
