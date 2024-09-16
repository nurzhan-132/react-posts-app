import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/router";
import { AuthContext } from "../context";
import Skeleton from "./UI/Skeleton/skeleton.component";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          ))}
          <Route path="/login" element={<Navigate to="/posts" replace />} />
          <Route path="/" element={<Navigate to="/posts" replace />} />
          <Route path="*" element={<Navigate to="/oops" replace />} />
        </Routes>
      ) : (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
