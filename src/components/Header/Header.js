import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Welcome to website with React Router with header</h1>
      {/* 
      this was page will reload
      <a href="/home">Home</a>
      <a href="/friends">Friends</a>
      <a href="/about">About</a>
       */}

      {/* navigation with active link customization */}
      {/*  <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
 */}
      {/* use this way if you do not need active link editing */}
      {/* <Link to="/home">Home</Link>
      <Link to="/friends">Friends</Link>
      <Link to="/about">About</Link> */}

      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/friends"> Friends</Link>
        <Link to="/about">About Us</Link>
      </nav> */}

      <nav style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>
        <CustomLink to="/about-us">About Us</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
