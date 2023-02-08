import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
