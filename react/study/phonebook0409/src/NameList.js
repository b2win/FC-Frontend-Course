import React from "react";

function NameList({ phonebook, onClickNameDetail }) {
  const nameDetail = phonebook.map((list) => (
    <li
      key={list.id}
      style={{ cursor: "pointer", color: "blue" }}
      onClick={() => onClickNameDetail(list)}
    >
      {list.name}
    </li>
  ));
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{nameDetail}</ul>
    </div>
  );
}

export default NameList;
