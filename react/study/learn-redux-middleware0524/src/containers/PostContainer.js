import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../modules/sample";
import Post from "../components/Post";

function PostContainer({ postId }) {
  const { post, loading, users } = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (users) return <div>에러 발생!</div>;
  if (!post) return null;

  return <Post post={users} />;
}

export default PostContainer;
