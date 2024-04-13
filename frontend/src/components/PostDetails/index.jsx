import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../../actions/posts";
import { CommentSection } from "./CommentSection";

export const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id, dispatch]);

  if (isLoading || !post) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <CommentSection post={post} />
    </div>
  );
};
