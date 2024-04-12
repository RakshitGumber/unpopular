import React, { useState, useEffect } from "react";
import Posts from "../Posts";
import Form from "../Form";
import { getPosts } from "../../actions/posts";

import { useDispatch } from "react-redux";

export default function Home() {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
      <input
        name="search"
        type="text"
        placeholder="Find what others are thinking"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {/* <div>//add elemnts to show on search</div> */}
      <Posts setCurrentId={setCurrentId} />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
    </div>
  );
}
