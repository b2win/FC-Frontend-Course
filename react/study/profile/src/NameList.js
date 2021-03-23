import React, { useState } from "react";

function NameList() {
  const [names, setNames] = useState([
    { id: 1, text: "토르" },
    { id: 2, text: "헐크" },
    { id: 3, text: "캡틴아메리카" },
  ]);

  const savedList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <ul>{savedList}</ul>
    </>
  );
}

export default NameList;
