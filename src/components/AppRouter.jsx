import { Navigate, Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import { routes } from "../router";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            element={<route.element />}
            exact={route.exact}
            path={route.path}
            key={route.element}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
};

export default AppRouter;
