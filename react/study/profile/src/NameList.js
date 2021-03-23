import React, { useState } from "react";

function NameList({ names, active, setNames, id }) {
  const style = {
    color: active ? "red" : "green",
    cursor: "pointer",
  };

  const onDelete = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const [check, setCheck] = useState(true);

  const savedList = names.map((name) => (
    <>
      <label>
        <input type="checkbox" id="checkbox" Checked={check} />
        <li style={style} key={name.id}>
          {name.text}
        </li>
      </label>
      <button onClick={() => onDelete(name.id)}>삭제</button>
      <br />
    </>
  ));
  return (
    <>
      <ul>{savedList}</ul>
    </>
  );
}

export default NameList;
