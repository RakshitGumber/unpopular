import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, signup } from "../../actions/user";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export default function Auth() {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

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
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="container">
      <h1>{isSignup ? "Sign up" : "Log in"}</h1>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              name="firstName"
              type="text"
              placeholder="Enter your Beatiful Name"
              onChange={handleChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              onChange={handleChange}
            />
          </>
        )}
        <input
          name="email"
          type="email"
          placeholder="Enter your Supa Fancy Email"
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter the most secret password ever"
          onChange={handleChange}
        />
        <button type="submit">{isSignup ? "Sign up" : "Log in"}</button>
      </form>
      {isSignup ? (
        <>
          <span>Already a user?</span>
          <button onClick={switchForm}>Log in</button>
        </>
      ) : (
        <>
          <span>New here?</span>
          <button onClick={switchForm}>Click</button>
        </>
      )}
    </div>
  );
}
