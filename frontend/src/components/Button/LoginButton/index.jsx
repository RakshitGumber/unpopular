import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/user">
      <button className="login-btn">Log in</button>
    </Link>
  );
};

export default LoginButton;
