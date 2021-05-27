import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPost, getPosts } from "../modules/posts";
import PostList from "../components/PostList";

function PostListContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({ postId }));
    return () => {
      dispatch(clearPost());
    };
  }, [postId, dispatch]);

  if (loading && !data) return <div>로딩 중..</div>;
  if (error) return <div>에러 발생...</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;
