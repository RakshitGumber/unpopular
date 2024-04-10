import React from "react";
import Posts from "./components/Posts";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="container">
      <h1>Unpopular</h1>
      <img src="" alt="Unpopular" height="60px" />
      {/* Add Image */}
      <div>
        <Posts />
        <Form />
      </div>
    </div>
  );
}
