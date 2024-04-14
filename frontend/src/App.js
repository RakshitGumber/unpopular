import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Signup from "./components/Signup/index.jsx";
import { TopNavbar } from "./components/Navbar/TopNavbar/index.jsx";
import LoginButton from "./components/Button/LoginButton";
import { Landing } from "./components/Landing/index.jsx";
import { IoAddSharp } from "react-icons/io5";
import { PostDetails } from "./components/PostDetails/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions/user.js";
import { UserProfile } from "./components/UserProfile/index.jsx";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [profileSetting, setProfileSetting] = useState(false);
  const [showCreateTab, setShowCreateTab] = useState(false);

  const userData = useSelector((state) => state.userReducer.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(getUser(user.user._id));
    // console.log(user.user);
  });

  const toggleCreateTab = () => {
    setShowCreateTab(!showCreateTab);
  };

  const toggleProfileSetting = () => {
    setProfileSetting(!profileSetting);
  };

  return (
    <Router>
      <TopNavbar
        render={
          user
            ? [
                <button onClick={toggleCreateTab}>
                  <IoAddSharp />
                </button>,
                userData && (
                  <div onClick={toggleProfileSetting}>
                    <img
                      src={
                        userData &&
                        (userData.profilepic ||
                          `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}`)
                      }
                      alt="profile"
                      className="profile-view"
                    />
                  </div>
                ),
              ]
            : [<LoginButton />]
        }
        user={user}
        setUser={setUser}
      />
      {user && profileSetting && <UserProfile userData={userData} />}
      <Routes>
        <Route
          path="/"
          element={!user ? <Landing /> : <Navigate to="./home" />}
        />
        {user && (
          <>
            <Route
              path="/home"
              element={
                user ? (
                  <Home
                    showCreate={showCreateTab}
                    setShowCreateTab={setShowCreateTab}
                  />
                ) : (
                  <Navigate to="/user" />
                )
              }
            />
            <Route path="/posts/:id" element={<PostDetails />} />
          </>
        )}
        <Route
          path="/user"
          element={!user ? <Signup /> : <Navigate to="home" />}
        />
      </Routes>
    </Router>
  );
}
