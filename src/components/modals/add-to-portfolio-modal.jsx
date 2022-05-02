import { useEffect, useState } from "react";
import { updateOrder } from "../../firebase/firestore";
import { getCoinData } from "../../utility/api-methods";
import "./modal.css";

const AddToPortfolioModal = ({ toggleModal, coinId }) => {
  const [coinPrice, setCoinPrice] = useState("");
  const [inputFields, setInputFields] = useState({
    price: "",
    qty: "",
    amount: "",
  });

  const { price, qty, amount } = inputFields;

  useEffect(() => {
    getCoinData(coinId, setCoinPrice);
  }, [coinId]);

  const addClick = () => {
    if ((price || coinPrice) && (amount || qty)) {
      updateOrder("vpLtiGgM54Xc4ACV4R8xTvg4rTj2", {
        name: "cardano",
        price: price || coinPrice,
        amount: amount,
      });
    }
  };

  const outsideModalClick = (e) => toggleModal();
  const insideModalClick = (e) => e.stopPropagation();

  return (
    <div onClick={outsideModalClick} className="modal-wrapper">
      <div
        onClick={(e) => insideModalClick(e)}
        className="modal p-x-4 center-x elevated m-up-6 shadow"
      >
        <button
          onClick={toggleModal}
          className="card-cross btn-close is-medium"
        >
          <i className="fas fa-times" />
        </button>
        <i className="modal-icon is-blue far fa-address-card" />
        <div className="textbox">
          <div className="title text-center">Add to portfolio {coinId} </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Current Price</p>
            <p className="current-price is-4">{coinPrice}</p>
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Price</p>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, price: e.target.value });
              }}
              type="text"
              className="form-input input-focused"
              placeholder="Indice price"
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Quantity</p>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, qty: e.target.value });
              }}
              type="text"
              className="form-input input-focused"
              placeholder="Number of units "
              disabled={Boolean(amount)}
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Amount</p>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, amount: e.target.value });
              }}
              disabled={Boolean(qty)}
              type="text"
              className="form-input input-focused"
              placeholder="Total amount"
              required=""
            />
          </div>
        </div>
        <div className="btn-horizontal">
          <button
            onClick={(e) => {
              addClick();
              toggleModal();
            }}
            className="btn-primary width-100 has-green m-up-4 btn-small"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export { AddToPortfolioModal };
