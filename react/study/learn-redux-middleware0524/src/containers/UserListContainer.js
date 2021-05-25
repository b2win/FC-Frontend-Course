import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getPost } from "../modules/sample";
import loadingImage from "../loadingImage.gif";

function UserListContainer({ userListId }) {
  const { loading } = useSelector((state) => state.sample);
  const { error, users } = useSelector((state) => state.sample);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(userListId));
  }, [userListId, dispatch]);

  if (loading)
    return (
      <div>
        <img src={loadingImage} alt={"로딩 중 이미지"} />
      </div>
    );
  if (error) return <div>에러발생</div>;
  if (!users) return null;

  return <UserList />;
}

export default UserListContainer;
