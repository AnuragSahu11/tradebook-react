import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const hamburgerClick = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <div className="nav">
      <nav className="navbar li-shadow">
        <div className="nav-brand">
          <span href="" className="logo-a">
            <img className="logo-s" src="/images/logo.png" alt="" />
          </span>
        </div>
        <div onClick={hamburgerClick} className="nav-hamburger">
          <i className="fas fa-bars" />
        </div>
        <div className="nav-menu">
          <div className="nav-start">
            <span className="nav-item link">Dashboard</span>
            <span className="nav-item link">Portfolio</span>
            <span href="pages/searchpage.html" className="nav-item link">
              Search
            </span>
          </div>
          <div className="nav-end">
            <button className="dark-mode btn-icon nav-icons m-x-1">
              <i className="fas fa-moon" />
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="btn-secondary nav-btn btn-small"
            >
              Sign up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="btn-primary nav-btn btn-small"
            >
              Log in
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-navbar ${
          showNav ? "mobile-navbar-view" : null
        } text-center flex-c-w`}
      >
        <div className="text-center m-up-3 center-x">
          <img className="logo-s" src="/images/logo.png" alt="" />
          <p className="is-4 is-blue">Tradebook</p>
        </div>
        <Link className="is-3 m-up-2 is-dark" to="/">
          Home
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing">
          Dashboard
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/playlist">
          Search
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/watchLater">
          Portfolio
        </Link>
        <Link className="is-3 m-up-2 is-dark" to="/videoListing/history">
          History
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
