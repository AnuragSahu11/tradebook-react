import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth-context";
import { updateOrder } from "../../firebase/firestore";
import { getCoinData } from "../../server-requests/server-requests";
import "./modal.css";

const AddToPortfolioModal = ({ toggleModal, coinData }) => {
  const { userDataState } = useAuth();
  const { token } = userDataState;
  const [currentPrice, setcurrentPrice] = useState("");
  const { name, symbol, image, id } = coinData;
  const [inputFields, setInputFields] = useState({
    userPrice: "",
    qty: "",
    amount: "",
  });

  const { userPrice, qty, amount } = inputFields;

  useEffect(() => {
    getCoinData(id, setcurrentPrice);
  }, [id]);

  const addClick = () => {
    if ((userPrice || currentPrice) && (amount || qty)) {
      let price = userPrice || currentPrice;
      let quantity = qty || (amount / currentPrice).toFixed(2);

      updateOrder(token, {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        symbol: symbol,
        image: image,
      });
    } else {
      toast.warn("Please Enter valid data");
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
          <div className="title text-center">Add to portfolio {name} </div>
          <p className="is-2">
            Coin Buying price will take your provided price as the coin buying
            price.If coin buying price is not input then the current coin price
            will be taken as the default input.
          </p>
          <p className="is-2">
            Then Select either number of coins or the amount invested. Click Add
            to add trade to portfolio.
          </p>
          <div className="m-up-2 center-x form-div">
            <p className="form-label is-4 bold is-green">Current Price</p>
            <p className="current-price m-y-0 is-4 is-green">{currentPrice}</p>
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Your Buying price</p>
            <i className="bx bx-dollar-circle is-light"></i>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, userPrice: e.target.value });
              }}
              type="number"
              className="form-input input-focused"
              placeholder="Coin buying price"
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Number of Coins</p>
            <i className="bx bx-coin-stack is-light"></i>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, qty: e.target.value });
              }}
              type="number"
              className="form-input input-focused"
              placeholder="Number of units "
              disabled={Boolean(amount)}
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Amount Invested</p>
            <i className="bx bx-dollar is-light"></i>
            <input
              onChange={(e) => {
                setInputFields({ ...inputFields, amount: e.target.value });
              }}
              disabled={Boolean(qty)}
              type="number"
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
