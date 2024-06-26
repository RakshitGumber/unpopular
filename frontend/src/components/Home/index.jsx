import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../Posts";
import CreatePost from "../CreatePost";
import { getPosts } from "../../actions/posts";
import "./style.css";
import { useDispatch } from "react-redux";

export default function Home({ setShowCreateTab, showCreate }) {
  const [currentId, setCurrentId] = useState(null);
  // const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <>
      {showCreate && (
        <CreatePost
          currentId={currentId}
          setCurrentId={setCurrentId}
          setShowCreateTab={setShowCreateTab}
        />
      )}
      <Posts setCurrentId={setCurrentId} />
    </>
  );
}
