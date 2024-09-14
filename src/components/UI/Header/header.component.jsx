import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["navbar"]}>
      <nav className={styles["navbar-container"]}>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
