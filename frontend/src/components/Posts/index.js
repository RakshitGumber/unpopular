import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import "./styles.css";

export default function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post._id} className="post-item">
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
}
