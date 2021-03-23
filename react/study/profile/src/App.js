import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const onType = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" placeholder="이름" onChange={onType} value={name} />
        <button onClick={}>추가</button>
      </div>
    </>
  );
}

export default App;
