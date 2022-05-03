import { createContext, useContext, useReducer } from "react";
import { authReducer } from "./auth-reducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const initialUserData = { token: "", userData: {}, orders: {}, filters: {} };

  const [userDataState, dispatch] = useReducer(authReducer, initialUserData);

  return (
    <AuthContext.Provider value={{ userDataState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
