import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../Posts";
import CreatePost from "../CreatePost";
import { getPosts } from "../../actions/posts";
import "./style.css";
import { useDispatch } from "react-redux";
import { Search } from "../Search/index.jsx";

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  // const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <>
      <Posts setCurrentId={setCurrentId} />
      <CreatePost currentId={currentId} setCurrentId={setCurrentId} />
    </>
  );
}
