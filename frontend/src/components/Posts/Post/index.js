import React, { useEffect, useState } from "react";
import "./style.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { getRawUser } from "../../../actions/user";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = post.creator;
  const [extraOptions, setExtraOptions] = useState(false);
  const [postUser, setPostUser] = useState({});
  const getUser = async () => {
    setPostUser(await getRawUser(id));
    console.log(postUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  const openPost = () => {
    navigate(`/posts/${post._id}`);
  };
  return (
    <>
      <div className="post-header">
        <div className="profile-pic">
          <img
            src={
              postUser.profilepic ??
              `https://ui-avatars.com/api/?name=${postUser.firstName}+${postUser.lastName}`
            }
            alt="profile"
          />
        </div>
        <div className="profile">
          <h2>{post.name}</h2>
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
        {postUser && postUser._id === post.creator && (
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
