import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <Link to={`/${post.id}`}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
