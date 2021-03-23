import "./App.css";
import React, { useState } from "react";
import NameList from "./NameList";

function App() {
  const [name, setName] = useState("");

  const onType = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="이름" onChange={onType} value={name} />
        <button>추가</button>
      </div>
      <NameList />
    </>
  );
}

export default App;
