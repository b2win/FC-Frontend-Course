import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;
const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading["sample/GET_POST"],
      loadingUsers: loading["sample/GET_USERS"],
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers(1));
  }, [dispatch]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;

// const { useEffect } = React;
// const SampleContainer = ({
//   getPost,
//   getUsers,
//   post,
//   users,
//   loadingPost,
//   loadingUsers,
// }) => {
//   // 클래스 형태 컴포넌트였다면 componentDidMount
//   useEffect(() => {
//     getPost(1);
//     getUsers(1);
//   }, [getPost, getUsers]);
//   return (
//     <Sample
//       post={post}
//       users={users}
//       loadingPost={loadingPost}
//       loadingUsers={loadingUsers}
//     />
//   );
// };

// export default connect(
//   ({ sample, loading }) => ({
//     post: sample.post,
//     users: sample.users,
//     loadingPost: loading["sample/GET_POST"],
//     loadingUsers: loading["sample/GET_USERS"],
//   }),
//   {
//     getPost,
//     getUsers,
//   }
// )(SampleContainer);
