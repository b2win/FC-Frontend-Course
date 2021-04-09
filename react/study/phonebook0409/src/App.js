import { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");

  const enterName = (e) => {
    setInputName(e.target.value);
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
      <button>추가</button>
    </div>
  );
}

export default App;
