import React from "react";

function User({ user, onToggle }) {
  return (
    <div>
      <li
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </li>
    </div>
  );
}

function Display({ names, onToggle }) {
  return (
    <>
      <div>
        <ul>
          {names.map((user) => (
            <User user={user} key={user.id} onToggle={onToggle} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Display;
