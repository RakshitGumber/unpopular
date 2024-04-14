import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CiEdit } from "react-icons/ci";
import FileBase from "react-file-base64";
import ChangeTheme from "../../services/ChangeTheme.js";
import { updateUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";

import "./style.css";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  profilepic: "",
};

const darkTheme = {
  "--background": "#16161d",
  "--secondary-background": "#1f1f29",
  "--secondary-text": "#9696bf",
  "--text": "white",
  "--primary": "#7b00ff",
  "--border": "#2d2d2d",
};

const lightTheme = {
  "--background": "rgb(238, 242, 247)",
  "--secondary-background": "#F1FAFF",
  "--secondary-text": "#28282d",
  "--text": "black",
  "--primary": "#7b00ff",
  "--border": "#f6f6f6",
};

export const UserProfile = ({ userData }) => {
  const [editProfile, setEditProfile] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [theme, setTheme] = useState(lightTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchTheme = () => {
    if (theme === darkTheme) setTheme(lightTheme);
    if (theme === lightTheme) setTheme(darkTheme);
    ChangeTheme(theme);
  };

  const handleSubmit = async () => {
    await dispatch(updateUser(user.user._id, formData));
  };

  return (
    <div className="settings-panel">
      <>
        {!editProfile ? (
          <button
            className="edit-button"
            onClick={() => setEditProfile(!editProfile)}
          >
            <CiEdit />
          </button>
        ) : (
          <div className="save-buttons">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                setEditProfile(!editProfile);
              }}
            >
              Done
            </button>
            <button onClick={() => setEditProfile(!editProfile)}>Cancel</button>
          </div>
        )}
        {!editProfile ? (
          <div className="editable-section">
            <div className="profilepic-container">
              {user.user.profilepic ? (
                <img src={user.user.profilepic} />
              ) : (
                <div className="empty-image">add photo</div>
              )}
            </div>

            <div className="profile-content">
              <h2>{user.user.username}</h2>
              <span>{user.user.firstName + " " + user.user.lastName}</span>
            </div>
          </div>
        ) : (
          <form className="profile-form">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormData({ ...user, profilepic: base64 })
              }
              className="image-input"
            />
            <input
              name="username"
              type="text"
              placeholder={user.user.username}
              onChange={handleChange}
            />
            <input
              name="firstName"
              type="text"
              placeholder={user.user.firstName}
              onChange={handleChange}
            />{" "}
            <input
              name="lastName"
              type="text"
              placeholder={user.user.lastName}
              onChange={handleChange}
            />
          </form>
        )}
      </>
      <hr />
      <div className="extra-section">
        <button onClick={switchTheme} className="themechangebutton">
          Theme
        </button>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("../");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
