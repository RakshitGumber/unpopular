import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import "./style.css";
import { BiUpvote, BiPencil, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
// add icons - thumb, delete, more

export default function Post({ post, setCurrentId }) {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  return (
    <div className="post-block">
      <div className="post-content" onClick={openPost}>
        <div className="post-header">
          <h1>{post.title}</h1>
          <div className="stamp">
            <span>{post.name} </span>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="post-actions">
            {user?.user?._id === post?.creator && (
              <button
                onClick={() => {
                  dispatch(deletePost(post._id));
                }}
              >
                <BiTrash />
              </button>
            )}
            {user?.user?._id === post?.creator && (
              <button onClick={() => setCurrentId(post._id)}>
                <BiPencil />
              </button>
            )}
          </div>
        </div>
        <p>{post.message}</p>
        {post.selectedFile && (
          <img
            src={post.selectedFile}
            alt="something was here"
            className="Post Image"
          />
        )}
        <div className="tags">
          {post.tags.map((tag) => (
            <span>{tag} </span>
          ))}
        </div>
      </div>
      <div className="like-section">
        <button
          onClick={() => {
            dispatch(likePost(post._id));
          }}
          className="action"
        >
          <BiUpvote />
        </button>
        <span></span>
      </div>
    </div>
  );
}
