import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./components/UI/navbar/MyNavbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
