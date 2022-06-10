import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  SearchPage,
  PortfolioPage,
  Dashboard,
  ErrorPage,
} from "../components/index";
import { RequiresAuth } from "./requires-auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/search" element={<SearchPage />} />

      <Route element={<RequiresAuth />}>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Router };
