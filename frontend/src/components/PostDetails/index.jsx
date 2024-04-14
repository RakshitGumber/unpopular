import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../../actions/posts";
import { CommentSection } from "./CommentSection";
import { likePost } from "../../actions/posts";
import { BiUpvote, BiSolidUpvote } from "react-icons/bi";
import "./style.css";
import Loader from "../Animations/Loader";

export const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  if (isLoading || !post) {
    return <Loader />;
  }

  return (
    <div className="post-detail-panel">
      <h1>{post.title}</h1>
      {post.selectedFile && <img src={post.selectedFile} alt={post.title} />}
      <p className="post-content">{post.message}</p>
      <span className="date-created">{moment(post.createdAt).fromNow()}</span>
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
      <CommentSection post={post} />
    </div>
  );
};
