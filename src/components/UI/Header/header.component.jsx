import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { AuthContext } from "../../../context";
import Button from "../Button/button.component";

const Header = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.clear();
  };

  return (
    <header className={styles["navbar"]}>
      <nav className={styles["navbar-container"]}>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        {isAuth && <Button onClick={logout}>Logout</Button>}
      </nav>
    </header>
  );
};

export default Header;
