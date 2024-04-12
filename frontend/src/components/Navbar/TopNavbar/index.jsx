import React, { useState, useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./index.css";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

export const TopNavbar = ({ render, toggleSideNavbar, user, setUser }) => {
  const animation = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    animation.current = anime({
      targets: ".top-navbar",
      translateY: 100,
      ease: "spring",
    });

    const logout = () => {
      dispatch({ type: "LOGOUT" });
      history("/");
      setUser(null);
    };

    window.addEventListener("resize", () => {
      setScreenWidth(window.screen.width);
    });

    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [dispatch, history, setUser, user?.token]);

  return (
    <div className="top-navbar">
      {user && screenWidth <= 767 && (
        <button className="hamburger" onClick={toggleSideNavbar}>
          <HiOutlineMenuAlt4 />
        </button>
      )}
      <div className="branding">
        <Link to="/">
          <h1 className="title navbar-title">unpopular</h1>
        </Link>
      </div>
      <div className="user-options">
        {render.map((prop) => (
          <React.Fragment key={Math.floor(Math.random() * 10000)}>
            {prop}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
