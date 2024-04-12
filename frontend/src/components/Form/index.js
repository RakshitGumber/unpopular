import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

export default function Form({ currentId, setCurrentId }) {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, {
          ...postData,
          name: user?.result?.name,
        })
      );
    } else {
      dispatch(
        createPost({
          ...postData,
          name: user?.result?.name,
        })
      );
    }
    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h3>{currentId ? "Edit" : "Post an opinion"}</h3>
        <input
          name="title"
          placeholder="title"
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <textarea
          name="message"
          placeholder="message"
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
        />
        <input
          name="tags"
          placeholder="tags"
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value });
          }}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
    </div>
  );
}
