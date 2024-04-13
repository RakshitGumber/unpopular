import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";

export const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post?.comments || []);
  const [myComment, setMyComment] = useState("");
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleClick = async () => {
    const finalComment = `${user.user.name}: ${myComment}`;
    const newComment = await dispatch(commentPost(finalComment, post._id));

      // Update the state with the new comment
      setComments([...comments, newComment]);
      // Clear the comment input field
      setMyComment("");

  };

  return (
    <div>
      <div>
        <h3>Replies</h3>
        {comments.map((c, i) => {
          return <div key={i}>{c}</div>;
        })}
      </div>
      <div>
        <h3>Add a comment</h3>
        <input
          name=""
          value={myComment}
          onChange={(e) => setMyComment(e.target.value)}
        />
        <button onClick={handleClick} disabled={!myComment}>
          Reply
        </button>
      </div>
    </div>
  );
};
