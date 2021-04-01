import React from "react";

function AddedName({ nameList, onClickSelect }) {
  const nameDetail = nameList.map((user) => (
    <li
      key={user.id}
      style={{ cursor: "pointer" }}
      onClick={() => onClickSelect(user)}
    >
      {user.name}
    </li>
  ));

  return (
    <>
      <div>
        <ul style={{ listStyleType: "none" }}>{nameDetail}</ul>
      </div>
    </>
  );
}

export default AddedName;
