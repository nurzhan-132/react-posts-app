import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input/input.component";
import Button from "../components/UI/Button/button.component";
import "../styles/App.scss";
import { AuthContext } from "../context";

const Login = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
    navigate("/posts");
  };
  return (
    <div className="login">
      <h1>Login to see the posts</h1>
      <form onSubmit={login}>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button>Sign in</Button>
      </form>
    </div>
  );
};

export default Login;
