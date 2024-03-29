import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { createUser, getUserData } from "./firestore";

const succToast = (text) => {
  const notifySucc = () => toast.success(`${text} successful`);
  notifySucc();
};

const errorToast = (text) => {
  const notifyError = () => toast.error(`${text} failed`);
  notifyError();
};

const login = async ({ email, password }, dispatch, setLoading) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const { user } = res;
    localStorage.setItem("token", user.uid);
    dispatch({ type: "SAVE_TOKEN", payload: user.uid });
    getUserData(user.uid, dispatch, setLoading);
    succToast("Login");
  } catch (err) {
    errorToast("Login");
    const errCode = err.code;
    const errorMessage = err.message;
    console.error(errCode, errorMessage);
  }
};

const signUp = async (email, password, firstName, lastName, navigate) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await createUser(firstName, lastName, email, response.user.uid);
    succToast("Sign Up");
    navigate("/login");
  } catch (err) {
    errorToast("Sign UP");
    const errCode = err.code;
    const errorMessage = err.message;
    console.error(errCode, errorMessage);
  }
};

export { login, signUp };
