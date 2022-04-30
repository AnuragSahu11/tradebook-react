import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { login } from "../../firebase/firebase-auth";
import "./login.css";

const LoginPage = () => {
  const [inputField, setInputField] = useState({ email: "", password: "" });
  const { dispatch } = useAuth();

  const demoLoginClick = async () => {
    setInputField({ email: "anurag@gmail.com", password: "123456" });
    login("anurag@gmail.com", "123456", dispatch);
  };

  const loginClick = () => {
    login(inputField.email, inputField.password, dispatch);
  };

  return (
    <section className="login-section m-up-6 p-x-1">
      <div className="login b-radius center-x m-up-6 elevated shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Login</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Email</p>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, email: e.target.value })
            }
            type="text"
            className="form-input input-focused"
            placeholder="enter your email id"
            required=""
            value={inputField.email}
          />
          <p className="form-label m-up-2">Password</p>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, password: e.target.value })
            }
            type="password"
            className="form-input input-focused"
            placeholder="enter your password"
            required=""
            value={inputField.password}
          />
        </div>
        <label htmlFor="" className="m-up-2 form-checkbox">
          <input type="checkbox" className="" />
          Remember me
        </label>
        <span className="link-secondary m-l-6">Forgot password</span>
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
          <span className="is- link">Create Account</span>
        </div>
      </div>
    </section>
  );
};

export { LoginPage };
