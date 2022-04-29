import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(" ");
  const hamburgerClick = () => {
    if (showNav === " ") setShowNav("mobile-navbar-view");
    if (showNav === "mobile-navbar-view") {
      setShowNav(" ");
    }
  };
  return (
    <div className="nav">
      <nav className="navbar li-shadow">
        <div className="nav-brand">
          <a href="" className="logo-a">
            <img className="logo-s" src="/images/logo.png" alt="" />
          </a>
        </div>
        <div onClick={hamburgerClick} className="nav-hamburger">
          <i className="fas fa-bars" />
        </div>
        <div className="nav-menu">
          <div className="nav-start">
            <a href="pages/dashboard.html" className="nav-item link">
              Dashboard
            </a>
            <a href="pages/portfolio.html" className="nav-item link">
              Portfolio
            </a>
            <a href="pages/searchpage.html" className="nav-item link">
              Search
            </a>
          </div>
          <div className="nav-end">
            <button className="dark-mode btn-icon nav-icons m-x-1">
              <i className="fas fa-moon" />
            </button>
            <a href="pages/sign-up.html">
              <button className="btn-secondary nav-btn btn-small">
                Sign up
              </button>
            </a>
            <a href="pages/login.html">
              <button className="btn-primary nav-btn btn-small">Log in</button>
            </a>
          </div>
        </div>
      </nav>

      <div className={`mobile-navbar ${showNav} text-center flex-c-w`}>
        <div className="text-center m-up-3 center-x">
          <img className="logo-s" src="/images/logo.png" alt="" />
          <p className="is-4 is-blue">Tradebook</p>
        </div>
        <Link className="is-3 m-up-2 is-dark" to="/">
          Home
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing">
          Explore
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/playlist">
          Playlists
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/watchLater">
          Watch Later
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/history">
          History
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
