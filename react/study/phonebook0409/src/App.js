import { useState } from "react";
import "./App.css";

function App() {
  const [phonebook, setPhonebook] = useState([]);
  const [inputName, setInputName] = useState(""); //이름입력창
  const [nextId, setNextId] = useState("");

  const enterName = (e) => {
    setInputName(e.target.value);
  };

  const onClickAddName = () => {
    const AddName = phonebook.concat({
      id: nextId,
      name: inputName,
      mobile: "",
    });
    setInputName("");
    setNextId(nextId + 1);
    setPhonebook(AddName);
  };

  return (
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
  );
}

export default App;
