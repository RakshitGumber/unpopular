import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
// add icons - thumb, delete, more

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {post.selectedFile && (
        <img src={post.selectedFile} alt="something was here" />
      )}
      <div>
        <h1>{post.title}</h1>
        <p>{post.message}</p>
        <span>{post.creator}</span>
        <span>{moment(post.createdAt).fromNow()}</span>
      </div>
      <div>
        {user?.user?._id === post?.creator && (
          <button onClick={() => setCurrentId(post._id)}>:</button>
        )}
      </div>
      <div className="tags">
        {post.tags.map((tag) => (
          <span>{tag} </span>
        ))}
      </div>
      <div className="actions">
        <button
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          like {post.likes.length}
        </button>
        {user?.user?._id === post?.creator && (
          <button
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}
