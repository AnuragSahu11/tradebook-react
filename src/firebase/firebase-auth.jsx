import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  } catch (err) {
    const errCode = err.code;
    const errorMessage = err.message;
    console.log(errCode, errorMessage);
  }
};

export { login };
