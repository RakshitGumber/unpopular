import React, { useEffect, useState } from "react";
import "./style.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { getUser } from "../../../actions/user";
import {
  BiUpvote,
  BiPencil,
  BiTrash,
  BiSolidUpvote,
  BiCommentDetail,
  BiDotsHorizontalRounded,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Post({ post, setCurrentId }) {
  const userData = useSelector((state) => state.userReducer.userData);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = post.creator;
  const [extraOptions, setExtraOptions] = useState(false);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };

  const openUser = () => {
    navigate(`/user/${post.creator}`);
  };

  return (
    <>
      <div className="post-header">
        <div className="profile-pic">
          <img
            src={
              userData &&
              (userData.profilepic ??
                `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}`)
            }
            alt="profile"
            onMouseOver={() => {}}
          />
        </div>
        <div className="profile" onClick={openUser}>
          <h2>{userData && userData.username}</h2>
          <span>{moment(post.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="post-body" onClick={openPost}>
        <h1>{post.title}</h1>
        <p className="post-content">{post.message}</p>
        <img src={post.selectedFile} alt="Missing" />
      </div>
      <div className="actions-section">
        <div className="like-action">
          <button onClick={() => dispatch(likePost(post._id))}>
            {post.likes.filter((id) => id).length > 0 ? (
              <BiSolidUpvote className="red-button" />
            ) : (
              <BiUpvote />
            )}
          </button>
          <span>{post.likes.length}</span>
        </div>
        <div className="comment-action">
          <button onClick={openPost}>
            <BiCommentDetail />
          </button>
        </div>
        {userData && userData._id === post.creator && (
          <div className="more-actions">
            <button
              onClick={() => {
                setExtraOptions(!extraOptions);
              }}
            >
              <BiDotsHorizontalRounded />
            </button>
          </div>
        )}
        {extraOptions && (
          <>
            <div className="edit-post-button">
              <button onClick={() => setCurrentId(post._id)}>
                <BiPencil />
              </button>
            </div>
            <div className="delete-button">
              <button onClick={() => dispatch(deletePost(post._id))}>
                <BiTrash />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
