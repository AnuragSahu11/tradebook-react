import { useAuth } from "../../context/auth-context";
import "./loader.css";

const Loader = () => {
  const { isLoading } = useAuth();
  return (
    <div
      style={isLoading ? { display: "block" } : { display: "none" }}
      className="fade-in loadingio-spinner-rolling-ltt7ie78t49"
    >
      <div className="ldio-cz3ptt4enft">
        <div></div>
      </div>
    </div>
  );
};

export { Loader };
