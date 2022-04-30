import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  LandingPage,
  Footer,
  Navbar,
  LoginPage,
  SignupPage,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
