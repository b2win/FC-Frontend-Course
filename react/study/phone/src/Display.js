import React from "react";

function Display({ username, onToggle }) {
  const userList = username.map((user) => (
    <li
      key={user.id}
      style={{
        cursor: "pointer",
        color: user.active ? "red" : "black",
        fontWeight: user.active ? 900 : 200,
      }}
      onClick={() => onToggle(user.id)}
    >
      {user.name}
    </li>
  ));

  return (
    <>
      <div>
        <ul>{userList}</ul>
      </div>
    </>
  );
}

export default Display;
