import React from "react";

function AddedName({ nameList, selectedName }) {
  const nameDetail = nameList.map((user) => (
    <li key={user.id} style={{ cursor: "pointer" }} onClick={selectedName}>
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
