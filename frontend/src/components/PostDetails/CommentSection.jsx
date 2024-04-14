import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";
import "./style.css";

export const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post?.comments || []);
  const [myComment, setMyComment] = useState("");
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = async () => {
    const finalComment = `${user.user.username}: ${myComment}`;
    const newComment = await dispatch(commentPost(finalComment, post._id));

    // Update the state with the new comment
    setComments([...comments, newComment]);
    // Clear the comment input field
    setMyComment("");
  };

  return (
    <>
      <div className="replies-block">
        <h3 className="head-text">Replies</h3>
        {comments.map((c, i) => {
          return (
            <div className="replies" key={i}>
              {c}
            </div>
          );
        })}
      </div>
      <div className="comment-block">
        <h3 className="head-text">Add a Reply</h3>
        <input
          name=""
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
          className="comment-input"
          placeholder="Add a reply"
        />
        <button
          onClick={handleClick}
          disabled={!myComment}
          className="comment-btn"
        >
          Reply
        </button>
      </div>
    </>
  );
};
