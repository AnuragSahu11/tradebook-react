import { useAuth } from "../../context/auth-context";
import { deleteOrder, getUserData } from "../../firebase/firestore";

const Trades = ({
  name,
  symbol,
  quantity,
  price,
  image,
  currentPrice,
  orderId,
}) => {
  const { dispatch } = useAuth();

  const profitAndLoss = (boughtPrice, currentPrice, quantity) => {
    return ((boughtPrice - currentPrice) * quantity).toFixed(2);
  };

  const precentage = (boughtPrice, currentPrice) => {
    return ((boughtPrice - currentPrice) / boughtPrice).toFixed(2) * 100;
  };

  const closeTradeClick = () => {};

  const deleteTradeClick = () => {
    deleteOrder("vpLtiGgM54Xc4ACV4R8xTvg4rTj2", orderId);
    getUserData("vpLtiGgM54Xc4ACV4R8xTvg4rTj2", dispatch);
  };

  return (
    <div className="trades p-y-3 elevated li-shadow space-evenly align-c flex-r-w">
      <div className="trade-current m-dw-0">
        <div className="text is-6 text-center bold is-dark">
          {profitAndLoss(price, currentPrice, quantity)}{" "}
          <span className="is-4 is-green">
            {" "}
            {precentage(price, currentPrice)}%{" "}
          </span>
        </div>
      </div>
      <div className="trades-name">
        <div className="trade-data">
          <div className="text is-3 semibold">Name</div>
          <div className="text is-4 light is-dark">{name}</div>
        </div>
        <div className="trade-data">
          <div className="text is-3 semibold">Symbol</div>
          <div className="text is-4 light is-dark">{symbol}</div>
        </div>
      </div>
      <div className="trades-price">
        <div className="trade-data">
          <div className="text is-3 semibold">Bought Price</div>
          <div className="text is-4 light is-dark">{price}</div>
        </div>
        <div className="trade-data">
          <div className="text is-3 semibold">Current Price</div>
          <div className="text is-4 light is-dark">{currentPrice}</div>
        </div>
      </div>
      <div className="trades-price">
        <div className="trade-data">
          <div className="text is-3 semibold">Quantity</div>
          <div className="text is-4 light is-dark">{quantity}</div>
        </div>
        <div className="trade-data">
          <img className="coin-logo m-up-1" src={image} alt="" />
        </div>
      </div>
      <div className="trades-button flex-col">
        <button
          onClick={deleteTradeClick}
          className="btn-primary btn-small shadow has-red"
        >
          Delete
        </button>
        <button
          onClick={closeTradeClick}
          className="btn-primary btn-small shadow has-green m-up-2"
        >
          Close Trade
        </button>
      </div>
    </div>
  );
};

export { Trades };
