import { BrowserRouter } from "react-router-dom";
import Header from "./components/UI/Header/header.component";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter.component";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
