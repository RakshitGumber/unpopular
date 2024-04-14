import React, { useRef, useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import MenuButton from "../../Button/RoundButton";
import "./index.css";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

export const TopNavbar = ({ render, user, setUser }) => {
  const animation = useRef(null);

  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    animation.current = anime({
      targets: ".top-navbar",
      translateY: 100,
      ease: "spring",
      delay: 1000,
    });

    const logout = () => {
      dispatch({ type: "LOGOUT" });
      history("/");
      setUser(null);
    };

    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [dispatch, history, setUser, user?.token]);

  return (
    <>
      <div className="top-navbar">
        <div className="branding">
          <Link to="/">
            <h1 className="title navbar-title">unpopular</h1>
          </Link>
        </div>
        <div className="user-options">
          {render.map((prop, index) => (
            <React.Fragment key={index}>{prop}</React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
