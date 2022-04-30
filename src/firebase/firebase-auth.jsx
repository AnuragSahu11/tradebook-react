import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { createUser, getUserData } from "./firestore";

const login = async (email, password, dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch({ type: "SAVE_TOKEN", payload: user.uid });
    getUserData(user.uid, dispatch);
  } catch (err) {
    const errCode = err.code;
    const errorMessage = err.message;
    console.error(errCode, errorMessage);
  }
};

const signUp = async (email, password, firstName, lastName) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    createUser(firstName, lastName, email, response.user.uid);
  } catch (err) {
    const errCode = err.code;
    const errorMessage = err.message;
    console.error(errCode, errorMessage);
  }
};

export { login, signUp };
