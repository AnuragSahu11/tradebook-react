import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { SwitchTheme } from "../../utility";
import { LogoutModal } from "../modals/logout-modal";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { userDataState } = useAuth();
  const [showLogout, setShowLogout] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const { token } = userDataState;

  const toggleLogout = () => {
    setShowLogout((prevState) => !prevState);
  };

  const hamburgerClick = () => {
    toggleNav();
  };

  const toggleNav = () => {
    setShowNav((prevState) => !prevState);
  };

  return (
    <>
      <LogoutModal showLogout={showLogout} toggleLogout={toggleLogout} />
      <div className="nav">
        <nav className="navbar shadow">
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
              <span
                onClick={() => navigate("/dashboard")}
                className="nav-item link"
              >
                Dashboard
              </span>
              <span
                onClick={() => navigate("/portfolio")}
                className="nav-item link"
              >
                Portfolio
              </span>
              <span
                onClick={() => navigate("/search")}
                className="nav-item link"
              >
                Search
              </span>
            </div>
            <div className="nav-end">
              <SwitchTheme />
              {token ? (
                <button
                  onClick={toggleLogout}
                  className="btn-primary nav-btn btn-small"
                >
                  Log Out
                </button>
              ) : (
                <>
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
                </>
              )}
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
          <Link
            onClick={() => toggleNav()}
            className="is-3 m-up-2 is-dark"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => toggleNav()}
            className="is-3 m-up-2 is-dark"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => toggleNav()}
            className="is-3 m-up-2 is-dark"
            to="/search"
          >
            Search
          </Link>
          <Link
            onClick={() => toggleNav()}
            className="is-3 m-up-2 is-dark"
            to="/portfolio"
          >
            Portfolio
          </Link>
          {token ? (
            <p
              className="is-3 m-up-2 is-dark pointer"
              onClick={() => {
                toggleNav();
                toggleLogout();
              }}
            >
              Logout
            </p>
          ) : (
            <>
              <Link
                onClick={() => setShowNav((prevState) => !prevState)}
                className="is-3 m-up-2 is-dark"
                to="/login"
              >
                Login
              </Link>
            </>
          )}
          <div className="center-x m-up-2">
            <SwitchTheme />
          </div>
        </div>
      </div>
    </>
  );
};

export { Navbar };
