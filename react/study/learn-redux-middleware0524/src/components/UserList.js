import React from "react";

function UserList({ userList }) {
  const { name, email } = userList;
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
}

export default UserList;
