import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
        <img src='https://firebasestorage.googleapis.com/v0/b/neflix-b34c6.appspot.com/o/images%2Fbody-image%2FUOStreamer%20Logo.png?alt=media&token=2944d649-93c7-4664-a83f-fa67be5ce500' alt="UOStreamer"/>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/new_and_popular" className="link">
          <span className="navbarmainLinks">New and Popular</span>
          </Link>
          <Link to="/my_list" className="link">
          <span className="navbarmainLinks">My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon hideicon" />
          <span className="kid">KID</span>
          <Notifications className="icon hideicon" />
          <img src="https://firebasestorage.googleapis.com/v0/b/neflix-b34c6.appspot.com/o/images%2Fbody-image%2FPCC.png?alt=media&token=45778eae-4fb9-4bc1-b847-bdbeca1ca19a" alt="Profilepic"/>
          {/* <AccountBox /> */}
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
