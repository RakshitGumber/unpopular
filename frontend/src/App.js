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
import { IoChatboxEllipses } from "react-icons/io5";
import SideNavBar from "./components/Navbar/SideNavBar/index.jsx";
import { Search } from "./components/Search/index.jsx";
import { PostDetails } from "./components/PostDetails/index.jsx";

export default function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNavbar = () => setShowSideNav(!showSideNav);

  return (
    <Router>
      <TopNavbar
        render={
          user
            ? [
                <button>
                  <IoChatboxEllipses />
                </button>,
                <button>
                  <FaBell />
                </button>,
                <button>
                  <FaGear />
                </button>,
              ]
            : [<LoginButton />]
        }
        toggleSideNavbar={toggleSideNavbar}
        user={user}
        setUser={setUser}
      />
      {user && <SideNavBar />}
      <Routes>
        <Route
          path="/"
          element={!user ? <Landing /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/user" />}
        />
        <Route
          path="/user"
          element={!user ? <Signup /> : <Navigate to="home" />}
        />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}
