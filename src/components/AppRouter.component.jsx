import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Oops from "./Oops.component";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/oops" element={<Oops />} />
      <Route path="*" element={<Navigate to="/oops" replace={true} />} />
    </Routes>
  );
};

export default AppRouter;
