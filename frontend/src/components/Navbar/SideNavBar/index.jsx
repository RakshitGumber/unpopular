import React from "react";
import Pagination from "./Pagination";
import "./style.css";

const SideNavBar = () => {
  return (
    <nav className="side-nav">
      <Pagination
        render={[
          { component: <span>Home</span>, href: "/" },
          { component: <span>Explore</span>, href: "./search" },
        ]}
      />
    </nav>
  );
};

export default SideNavBar;
