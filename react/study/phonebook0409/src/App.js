import { useState } from "react";
import NameList from "./NameList";
import "./App.css";
import Selected from "./Selected";
import MobileNumber from "./MobileNumber";

function App() {
  const [phonebook, setPhonebook] = useState([]);
  const [inputName, setInputName] = useState(""); //이름입력창
  const [nextId, setNextId] = useState(0);
  const [selectedNameDetail, setSelectedNameDetail] = useState("");

  const enterName = (e) => {
    setInputName(e.target.value);
  };

  const onClickAddName = () => {
    const addName = phonebook.concat({
      id: nextId,
      name: inputName,
      mobile: "n/a",
    });
    setNextId(nextId + 1);
    setPhonebook(addName);
    setInputName("");
  };

  const onClickNameDetail = (detail) => {
    setSelectedNameDetail(detail);
    console.log(selectedNameDetail);
  };

  const onClickSaveNumber = () => {
    phonebook.map((detail) => {
      if (detail.id === selectedNameDetail.id) {
        detail.mobile = selectedNameDetail.mobile;
      }
      return detail; //중요!
    });
    setPhonebook(phonebook);
    console.log(phonebook);
    setInputNumber("");
  };

  const [inputNumber, setInputNumber] = useState("");

  const enterNumber = (e) => {
    setInputNumber(e.target.value);
    setSelectedNameDetail({
      ...selectedNameDetail,
      mobile: inputNumber,
    });
  };

  return (
    <>
      <h1>전화번호부</h1>
      <div>
        <p>이름입력</p>
        <input
          type="text"
          placeholder="성함을 입력해주세요!"
          value={inputName}
          onChange={enterName}
        />
        <button onClick={onClickAddName}>추가</button>
      </div>
      <NameList phonebook={phonebook} onClickNameDetail={onClickNameDetail} />
      <MobileNumber
        inputNumber={inputNumber}
        enterNumber={enterNumber}
        onClickSaveNumber={onClickSaveNumber}
      />
      <Selected selectedNameDetail={selectedNameDetail} />
    </>
  );
}

export default App;
