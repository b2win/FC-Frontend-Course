import React from "react";
import UserListContainer from "../containers/UserListContainer";

function UserListPage({ match }) {
  const { id } = match.params;
  const userListId = parseInt(id, 10);
  return <UserListContainer userListId={userListId} />;
}

export default UserListPage;
