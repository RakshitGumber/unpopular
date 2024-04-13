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

  const openUser = () => {
    navigate(`/user/${post.creator}`);
  };

  return (
    <div className="post-block">
      <div className="post-content">
        <div className="post-header">
          <div className="cred-block">
            <div className="avatar">
              {!post.image ? <div className="empty-avatar"></div> : <img />}
            </div>
            <span className="created-cred" onClick={openUser}>
              {post.name}
            </span>
            <span className="created-cred">&#8226;</span>
            <span className="created-cred">
              {moment(post.createdAt).fromNow()}
            </span>
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
        <div className="post-body" onClick={openPost}>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-para">{post.message}</p>
          {post.selectedFile && (
            <img
              src={post.selectedFile}
              alt="something was here"
              className="post-image"
            />
          )}
        </div>
      </div>
      <div className="user-actions">
        <div className="like-section">
          <button
            onClick={() => {
              dispatch(likePost(post._id));
            }}
            className="action"
          >
            <BiUpvote />
          </button>
          <span>{post.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
