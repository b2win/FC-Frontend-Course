import React, { useState } from "react";
import axios from "axios";
import { useAsync } from "react-async";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  // const [users, setUsers] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchUsers = async () => {
  //   try {
  //     setUsers(null);
  //     setError(null);
  //     setLoading(true);
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/users/"
  //     );
  //     setUsers(response.data);
  //   } catch (e) {
  //     console.log(e.response.status);
  //     setError(e);
  //   }
  //   setLoading(false);
  // };
  const { data: users, error, isLoading, reload, run } = useAsync({
    deferFn: getUsers,
  });
  const [userId, setUserId] = useState(null);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
