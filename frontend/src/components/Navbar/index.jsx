import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const dispatch = useDispatch();
  const history = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <div className="brand">
        <h1>Unpopular</h1>
        <img src="" alt="Unpopular" height="60px" />
        {/* Add Image */}
      </div>
      <div className="toolbar">
        {user ? (
          <div className="profle">"Avatar"</div>
        ) : (
          <button>
            <Link to="/user">Log in</Link>
          </button>
        )}
      </div>
    </div>
  );
}
