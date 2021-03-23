import React, { useState } from "react";

function NameList({ names, active }) {
  const style = {
    color: active ? "green" : "black",
    cursor: "pointer",
  };

  const savedList = names.map((name) => (
    <li style={style} key={name.id}>
      {name.text}
    </li>
  ));
  return (
    <>
      <ul>{savedList}</ul>
    </>
  );
}

export default NameList;
