import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getPost } from "../modules/sample";

function UserListContainer({ userListId }) {
  const { loading, error, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(userListId));
  }, [userListId, dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러발생</div>;
  if (!users) return null;

  return <UserList />;
}

export default UserListContainer;
