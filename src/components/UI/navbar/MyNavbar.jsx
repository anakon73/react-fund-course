import { Link } from "react-router-dom";
import classes from "./MyNavbar.module.css";

const MyNavbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default MyNavbar;
