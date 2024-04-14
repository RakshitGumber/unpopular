import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../actions/user";
import Firework from "../Animations/Firework";
import "./style.css";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(login(formData, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchForm = (e) => {
    e.preventDefault();
    setIsSignup(() => !isSignup);
  };
  return (
    <>
      <div className="form-container">
        <h1 className="form-header">{isSignup ? "Sign up" : "Log in"}</h1>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Enter Last Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  name="username"
                  type="text"
                  placeholder="Enter User Name"
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>

          <button className="signupButton" type="submit">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        {isSignup ? (
          <div>
            <span>Already a user?</span>
            <button onClick={switchForm} className="switch-btn">
              Log in
            </button>
          </div>
        ) : (
          <div>
            <span>New here?</span>
            <button onClick={switchForm} className="switch-btn">
              Sign Up
            </button>
          </div>
        )}
      </div>
      <Firework />
    </>
  );
}
