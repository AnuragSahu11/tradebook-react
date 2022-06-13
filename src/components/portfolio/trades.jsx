import { useAuth } from "../../context/auth-context";
import { closeOrder, deleteOrder, getUserData } from "../../firebase/firestore";

const Trades = ({ orderData, currentPrice, orderId }) => {
  const { userDataState, setLoading } = useAuth();
  const { token } = userDataState;
  const { name, symbol, quantity, price, image } = orderData;

  const { dispatch } = useAuth();

  const profitAndLoss = (boughtPrice, currentPrice, quantity) => {
    const amount = ((currentPrice - boughtPrice) * quantity).toFixed(2);
    const percentage = (
      ((currentPrice - boughtPrice) / boughtPrice) *
      100
    ).toFixed(2);
    return (
      <div
        className={`${
          amount > 0 ? "is-green" : "is-red"
        } current-price-text  is-6 text-center bold`}
      >
        {amount > 0 ? "+" + amount : amount}
        <span
          className={`${
            amount > 0 ? "is-green" : "is-red"
          } is-4 m-l-1 semibold`}
        >
          {percentage < 0 ? "↓" + percentage : "↑" + percentage}%
        </span>
      </div>
    );
  };

  const closeTradeClick = async () => {
    await closeOrder(
      token,
      {
        ...orderData,
        closingPrice: currentPrice,
      },
      orderId
    );
    getUserData(token, dispatch, setLoading);
  };

  const deleteTradeClick = async () => {
    await deleteOrder(token, orderId);
    getUserData(token, dispatch, setLoading);
  };

  return (
    <div className="trades p-y-3 elevated li-shadow space-evenly align-c flex-r-w">
      <div className="trade-current m-dw-0">
        {profitAndLoss(price, currentPrice, quantity)}
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
          onClick={closeTradeClick}
          className="btn-primary btn-small shadow has-green"
        >
          Close Trade
        </button>
        <button
          onClick={deleteTradeClick}
          className="btn-primary btn-small shadow has-red m-up-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { Trades };
