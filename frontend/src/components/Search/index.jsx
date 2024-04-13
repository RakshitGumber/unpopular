import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostsBySearch } from "../../actions/posts";

function useQuery() {
  return new URLSearchParams(useNavigate().search);
}
export const Search = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searchQuery = query.get("searchQuery");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostsBySearch({ search }));
      navigate(`/posts/search?searchQuery=${search ?? "none"}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="search"
        name="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={searchPost}>Search</button>
    </div>
  );
};
