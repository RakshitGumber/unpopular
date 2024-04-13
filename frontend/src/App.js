import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import Signup from "./components/Signup/index.jsx";
import { TopNavbar } from "./components/Navbar/TopNavbar/index.jsx";
import { FaBell, FaGear } from "react-icons/fa6";
import LoginButton from "./components/Button/LoginButton";
import { Landing } from "./components/Landing/index.jsx";
import { IoChatboxEllipses, IoAddSharp } from "react-icons/io5";
import SideNavBar from "./components/Navbar/SideNavBar/index.jsx";
import { Search } from "./components/Search/index.jsx";
import { PostDetails } from "./components/PostDetails/index.jsx";
import ChangeTheme from "./services/ChangeTheme.js";

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
  "--secondary-background": "#ffffff",
  "--secondary-text": "#28282d",
  "--text": "black",
  "--primary": "#7b00ff",
  "--border": "#f6f6f6",
};

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showSideNav, setShowSideNav] = useState(false);
  const [theme, setTheme] = useState(lightTheme);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [showCreateTab, setShowCreateTab] = useState(false);

  const toggleSideNavbar = () => setShowSideNav(!showSideNav);

  const switchTheme = () => {
    if (theme === darkTheme) setTheme(lightTheme);
    if (theme === lightTheme) setTheme(darkTheme);
    ChangeTheme(theme);
  };

  window.addEventListener("resize", () => {
    setScreenWidth(window.screen.width);
  });

  const toggleCreateTab = () => {
    setShowCreateTab(!showCreateTab);
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
                <button>
                  <IoChatboxEllipses />
                </button>,
                <button>
                  <FaBell />
                </button>,
              ]
            : [<LoginButton />]
        }
        toggleSideNavbar={toggleSideNavbar}
        user={user}
        setUser={setUser}
      />
      {/* <button onClick={switchTheme} className="themechangebutton">
        SiwtchTheme
      </button> */}
      {user && (screenWidth > 767 || showSideNav) && <SideNavBar />}
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
            <Route path="/search" element={<Search />} />
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
