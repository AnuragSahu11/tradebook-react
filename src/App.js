import { Route, Routes } from "react-router-dom";
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
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
