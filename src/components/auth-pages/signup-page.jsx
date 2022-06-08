import { useState } from "react";
import { signUp } from "../../firebase/firebase-auth";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "../../context/auth-context";
import { changeTitle } from "../../utility";
import { toast } from "react-toastify";

const SignupPage = () => {
  const navigate = useNavigate();
  const { setLoading } = useAuth();
  const [inputField, setInputField] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    acceptTC: false,
  });
  const [viewPassword, setViewPassword] = useState(false);
  const { email, password, firstName, lastName, acceptTC } = inputField;

  const validateForm = () => {
    //eslint-disable-next-line
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return firstName && lastName && regex.test(email) && password && acceptTC;
  };

  const signUpClick = async () => {
    if (validateForm()) {
      setLoading(true);
      await signUp(email, password, firstName, lastName);
      setLoading(false);
    } else {
      toast.warn("Enter valid details");
    }
  };

  changeTitle("SignUp for Tradebook");

  return (
    <section className="signup-section m-up-6 p-x-1">
      <div className="signup b-radius center-x elevated m-up-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div m-up-1">
          <p className="form-label">First Name</p>
          <i className="bx bx-user is-light"></i>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, firstName: e.target.value })
            }
            value={firstName}
            type="text"
            className="form-input input-focused"
            placeholder="Enter your First Name"
            required=""
          />
          <p className="form-label m-up-1">Last Name</p>
          <i className="bx bx-user is-light"></i>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, lastName: e.target.value })
            }
            value={lastName}
            type="text"
            className="form-input input-focused"
            placeholder="Enter your Last Name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <i className="bx bx-envelope is-light"></i>
          <input
            onChange={(e) =>
              setInputField({ ...inputField, email: e.target.value })
            }
            value={email}
            type="email"
            className="form-input input-focused"
            placeholder="Enter your Email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i
            onClick={() => setViewPassword(!viewPassword)}
            className="fas fa-eye is-light pointer"
          ></i>{" "}
          <input
            onChange={(e) =>
              setInputField({ ...inputField, password: e.target.value })
            }
            value={password}
            type={viewPassword ? "text" : "password"}
            className="form-input input-focused"
            placeholder="Enter your Password"
            required=""
          />
        </div>
        <label className="m-up-2 form-checkbox">
          <input
            onChange={() =>
              setInputField({ ...inputField, acceptTC: !inputField.acceptTC })
            }
            type="checkbox"
            className=""
            checked={acceptTC}
          />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button
            onClick={signUpClick}
            className="btn-primary m-dw-1 btn-small"
          >
            Create new Account
          </button>
          <span onClick={() => navigate("/login")} className="is-2 link">
            Already have an account
          </span>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
