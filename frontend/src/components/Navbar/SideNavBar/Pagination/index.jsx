import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ render }) => {
  return (
    <ul className="pages">
      {render.map((child, index) => {
        return (
          <li key={index}>
            <Link to={`${child.href}`}>{child.component}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
