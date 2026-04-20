import React from "react";

async function fetchData() {
  const res = await fetch("http://localhost:4000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
}

const PostProvider = async () => {
  const posts = await fetchData(); // ✅ FIXED

  // console.log("posts in post provider is ", posts);

  return (
    <div>
      postProvider

      {Array.isArray(posts) &&
        posts.slice(0, 5).map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostProvider;