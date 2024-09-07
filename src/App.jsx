import React, { useState } from "react";
import { useGetPostsQuery } from "./api/apiSlice";
import SinglePost from "./SinglePost";

function App() {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [selectedPostId, setSelectedPostId] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred!</div>;

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => setSelectedPostId(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>

      {selectedPostId && <SinglePost postId={selectedPostId} />}
    </div>
  );
}

export default App;
