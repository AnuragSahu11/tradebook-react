import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import { login } from "../../firebase/firebase-auth";
import { changeTitle } from "../../utility";
import { demoCredentials } from "../../utility/constants";
import "./login.css";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [inputField, setInputField] = useState({ email: "", password: "" });
  const { setLoading, dispatch } = useAuth();

  const { email, password } = inputField;

  const validateForm = () => {
    //eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email) && password;
  };

  const demoLoginClick = async () => {
    setInputField(demoCredentials);
    setLoading(true);
    try {
      await login(demoCredentials, dispatch, setLoading);
      navigate(from, { replace: true });
    } catch {}
    setLoading(false);
  };

  const loginClick = async () => {
    setLoading(true);
    if (validateForm()) {
      try {
        await login(inputField, dispatch, setLoading);
        navigate(from, { replace: true });
      } catch {}
    } else {
      toast.warn("Enter valid credentials");
    }
    setLoading(false);
  };

  changeTitle("Login to Tradebook");

  return (
    <section className="login-section m-up-6 p-x-1">
      <div className="login b-radius center-x m-up-6 elevated shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Login</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Email</p>
          <i className="bx bx-envelope is-light"></i>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, email: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="Enter your Email"
            required=""
            value={email}
          />
          <p className="form-label m-up-2">Password</p>
          <i className="bx bx-key is-light"></i>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, password: e.target.value })
            }
            type="password"
            className="form-input input-focused"
            placeholder="Enter your Password"
            required=""
            value={password}
          />
        </div>
        <label htmlFor="" className="m-up-2 form-checkbox">
          <input type="checkbox" className="" />
          Remember me
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button onClick={loginClick} className="btn-primary m-dw-1 btn-small">
            Login
          </button>
          <button
            onClick={demoLoginClick}
            className="btn-primary m-dw-1 btn-small"
          >
            Demo Login
          </button>
          <span onClick={() => navigate("/signup")} className="is-2 link">
            Create Account
          </span>
        </div>
      </div>
    </section>
  );
};

export { LoginPage };
