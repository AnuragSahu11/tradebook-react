import { createContext, useContext, useReducer, useState } from "react";
import { authReducer } from "./auth-reducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const initialUserData = {
    token: localStorage.getItem("token") || null,
    userData: {},
    orders: {},
    filters: {},
    closed: {},
  };
  const [isLoading, setLoading] = useState(false);
  const [userDataState, dispatch] = useReducer(authReducer, initialUserData);

  return (
    <AuthContext.Provider
      value={{ userDataState, dispatch, isLoading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
