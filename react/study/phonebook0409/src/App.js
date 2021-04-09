import { useRef, useState } from "react";
import NameList from "./NameList";
import "./App.css";
import Selected from "./Selected";
import MobileNumber from "./MobileNumber";

function App() {
  const [phonebook, setPhonebook] = useState([]);
  const [inputName, setInputName] = useState(""); //이름입력창
  const [nextId, setNextId] = useState(0);
  const [selectedNameDetail, setSelectedNameDetail] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [detailVisible, setDetailVisible] = useState(false);

  const nameInput = useRef();
  const numberInput = useRef();

  const enterName = (e) => {
    setInputName(e.target.value);
  };

  const onClickAddName = () => {
    const addName = phonebook.concat({
      id: nextId,
      name: inputName,
    });
    setNextId(nextId + 1);
    setPhonebook(addName);
    setInputName("");
    nameInput.current.focus();
  };

  const onClickNameDetail = (detail) => {
    setSelectedNameDetail(detail);
  };

  const onClickSaveNumber = () => {
    phonebook.map((detail) => {
      if (detail.id === selectedNameDetail.id) {
        detail.mobile = selectedNameDetail.mobile;
      }
      return detail; //중요!
    });
    setPhonebook(phonebook);
    setInputNumber("");
    numberInput.current.focus();
  };

  const enterNumber = (e) => {
    setInputNumber(e.target.value);
    setSelectedNameDetail({
      ...selectedNameDetail,
      mobile: inputNumber,
    });
  };

  const onClickDeleteName = () => {
    const updatedPhonebook = phonebook.filter(
      (detail) => detail.id !== selectedNameDetail.id
    );
    setPhonebook(updatedPhonebook);
    setSelectedNameDetail({
      name: "",
      mobile: "",
      id: "",
    });
  };

  return (
    <>
      <h1>전화번호부</h1>
      <div id="phonebook">
        <div id="name">
          <p>이름입력</p>
          <input
            type="text"
            placeholder="성함을 입력해주세요!"
            value={inputName}
            onChange={enterName}
            ref={nameInput}
          />
          <button onClick={onClickAddName}>추가</button>
        </div>
        <div id="phone">
          <MobileNumber
            inputNumber={inputNumber}
            enterNumber={enterNumber}
            onClickSaveNumber={onClickSaveNumber}
            numberInput={numberInput}
          />
        </div>
      </div>
      <NameList
        phonebook={phonebook}
        onClickNameDetail={onClickNameDetail}
        detailVisible={detailVisible}
        setDetailVisible={setDetailVisible}
      />
      {detailVisible && (
        <Selected
          selectedNameDetail={selectedNameDetail}
          onClickDeleteName={onClickDeleteName}
        />
      )}
    </>
  );
}

export default App;
