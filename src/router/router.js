import Posts from "../pages/Posts";
import About from "../pages/About";
import OnePostPage from "../pages/OnePostPage";
import Oops from "../pages/Oops";
import Login from "../pages/Login";

export const publicRoutes = [
  { path: "/posts", component: <Posts /> },
  { path: "/about", component: <About /> },
  { path: "/posts/:id", component: <OnePostPage /> },
  { path: "/oops", component: <Oops /> },
];

export const privateRoutes = [{ path: "/login", component: <Login /> }];
