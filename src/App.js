import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./ReactToastify.css";
import "./App.css";
import {
  LandingPage,
  Footer,
  Navbar,
  LoginPage,
  SignupPage,
  SearchPage,
  PortfolioPage,
  Dashboard,
  ErrorPage,
} from "./components/index";
import { RequiresAuth } from "./utility";
import { Loader } from "./utility/loader/loader";

function App() {
  return (
    <div className="App">
      <Loader />
      <ToastContainer hideProgressBar={true} />
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/portfolio"
          element={
            <RequiresAuth>
              <PortfolioPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequiresAuth>
              <Dashboard />
            </RequiresAuth>
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
