import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/Header/header.component";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter.component";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
