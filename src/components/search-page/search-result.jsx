import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AddToPortfolioModal } from "../modals/add-to-portfolio-modal";

const SearchResult = ({ searchResult }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const [coinData, setCoinData] = useState({});

  const result = searchResult
    .slice(0, 10)
    .map((coin) => (
      <SearchResultComponent
        key={coin.id}
        symbol={coin.symbol}
        name={coin.name}
        image={coin.large}
        id={coin.id}
        toggleModal={toggleModal}
        setCoinData={setCoinData}
      />
    ));
  return (
    <>
      {showModal && (
        <AddToPortfolioModal coinData={coinData} toggleModal={toggleModal} />
      )}
      <div className="result p-x-2 m-up-6">{result}</div>
    </>
  );
};

const SearchResultComponent = ({
  symbol,
  name,
  image,
  toggleModal,
  setCoinData,
  id,
}) => {
  const { userDataState } = useAuth();
  const navigate = useNavigate();
  const { token } = userDataState;
  const addClick = () => {
    if (token) {
      toggleModal();
      setCoinData({ name, symbol, image, id });
    } else {
      const infoToast = () => toast.info("You need to Login first");
      infoToast();
      navigate("/login");
    }
  };
  return (
    <div className="result-data is-dark p-x-3 elevated center-text p-y-3 li-shadow">
      <div className="result-data-div">
        <div className="subtitle is-3 underline">Symbol</div>
        <div className="text light is-4 m-up-1">{symbol}</div>
      </div>
      <div className="result-data-div">
        <div className="subtitle m-up-2 underline is-3">Full name</div>
        <div className="text light m-up-1 is-4">{name}</div>
      </div>
      <div className="result-data-div">
        <div className="subtitle m-up-2 underline is-3">Logo</div>
        <div className="text light m-up-2 is-4">
          <img className="result-thumbnail" src={`${image}`} alt="" />
        </div>
      </div>


      <button
        onClick={addClick}
        className="btn-primary width-100 btn-small m-up-2"
      >
        + Add
      </button>
    </div>
  );
};

export { SearchResult };
