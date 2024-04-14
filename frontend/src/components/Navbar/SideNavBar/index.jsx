import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import "./style.css";

const SideNavBar = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current = anime({
      targets: ".side-nav",
      translateX: 300,
      ease: "spring",
    });
  }, []);

  return (
    <ul className="side-nav">
      <li>
        <Link to="./home">Home</Link>
      </li>
      <li>
        <Link to="./friends">Friends</Link>
      </li>
      <li>
        <Link to="./posts">Explore</Link>
      </li>
    </ul>
  );
};

export default SideNavBar;
