import { useState } from "react";
import { AddToPortfolioModal } from "../modals/add-to-portfolio-modal";

const SearchResult = ({ searchResult }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevState) => !prevState);
  const [coinId, setCoinId] = useState("");

  const result = searchResult
    .slice(0, 10)
    .map((coinData) => (
      <SearchResultComponent
        key={coinData.id}
        symbol={coinData.symbol}
        name={coinData.name}
        image={coinData.large}
        id={coinData.id}
        toggleModal={toggleModal}
        setCoinId={setCoinId}
      />
    ));
  return (
    <>
      {showModal && (
        <AddToPortfolioModal coinId={coinId} toggleModal={toggleModal} />
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
  setCoinId,
  id,
}) => {
  const addClick = () => {
    toggleModal();
    setCoinId(id);
  };
  return (
    <div className="result-data p-x-3 elevated center-text p-y-3 li-shadow">
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
