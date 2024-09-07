import React from "react";
import { useGetPostByIdQuery } from "./api/apiSlice";

function SinglePost({ postId }) {
  const { data: post, error, isLoading } = useGetPostByIdQuery(postId);

  if (isLoading) return <div>Loading post...</div>;
  if (error) return <div>An error occurred fetching post!</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default SinglePost;
