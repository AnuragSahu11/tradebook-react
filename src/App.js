import { ToastContainer } from "react-toastify";
import { Footer, Navbar } from "./components/index";
import { Loader } from "./utility/loader/loader";
import { Router } from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader />
      <ToastContainer hideProgressBar={true} />
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
