import { useState } from "react";
import { signUp } from "../../firebase/firebase-auth";
import "./login.css";

const SignupPage = () => {
  const [inputField, setInputField] = useState({ email: "", password: "" });

  const signUpClick = () => {
    signUp(inputField.email, inputField.password);
  };

  return (
    <section className="signup-section m-up-6 p-x-1">
      <div className="signup b-radius center-x elevated m-up-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">Full Name</p>
          <input
            type="text"
            className="form-input input-focused"
            placeholder="enter your full name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, email: e.target.value })
            }
            value={inputField.email}
            type="email"
            className="form-input input-focused"
            placeholder="enter your email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, password: e.target.value })
            }
            value={inputField.password}
            type="password"
            className="form-input input-focused"
            placeholder="enter your password"
            required=""
          />
        </div>
        <label htmlFor="" className="m-up-2 form-checkbox">
          <input type="checkbox" className="" />
          Accept all terms and conditions
        </label>
        <div onClick={signUpClick} className="btn-vertical m-up-3 center-text">
          <button className="btn-primary m-dw-1 btn-small">
            Create new Account
          </button>
          <span href="" className="is-2 link">
            Already have an account
          </span>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
