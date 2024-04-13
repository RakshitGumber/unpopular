import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";
import "./style.css";
import { RxCross1 } from "react-icons/rx";

export default function CreatePost({
  setShowCreateTab,
  currentId,
  setCurrentId,
}) {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (event) => {
    event.preventDefault();

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
      selectedFile: "",
    });
    setShowCreateTab(false);
  };
  return (
    <>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className="create-post"
      >
        <h3 className="create-post-header">
          {currentId ? "Edit" : "What's in your mind..."}
        </h3>
        <input
          name="title"
          placeholder="title"
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
          className="create-input"
        />
        <textarea
          name="message"
          placeholder="message"
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
          className="create-input"
        />
        <div className="image-input-container">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            className="image-input"
          />
        </div>
        <div className="actions">
          <button type="submit" disabled={postData.title === ""}>
            Submit
          </button>
          <button onClick={clear} className="clearButton">
            <RxCross1 />
          </button>
        </div>
      </form>
    </>
  );
}
