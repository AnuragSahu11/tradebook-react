const Trades = () => {
  return (
    <div className="trades p-y-3 elevated li-shadow space-evenly align-c flex-r-w">
      <div className="trade-current m-dw-0">
        <div className="text is-6 text-center bold is-dark">
          5000 <span className="is-4 is-green"> 10%</span>
        </div>
      </div>
      <div className="trades-name">
        <div className="trade-data">
          <div className="text is-3 semibold">Name</div>
          <div className="text is-4 light is-dark">TATA MOTORS</div>
        </div>
        <div className="trade-data">
          <div className="text is-3 semibold">Symbol</div>
          <div className="text is-4 light is-dark">TATA</div>
        </div>
      </div>
      <div className="trades-price">
        <div className="trade-data">
          <div className="text is-3 semibold">Bought Price</div>
          <div className="text is-4 light is-dark">450</div>
        </div>
        <div className="trade-data">
          <div className="text is-3 semibold">Current Price</div>
          <div className="text is-4 light is-dark">500</div>
        </div>
      </div>
      <div className="trades-price">
        <div className="trade-data">
          <div className="text is-3 semibold">Quantity</div>
          <div className="text is-4 light is-dark">10</div>
        </div>
      </div>
      <div className="trades-button flex-col">
        <button className="btn-primary btn-small shadow has-red">Delete</button>
        <button className="btn-primary btn-small shadow has-green m-up-2">
          Close Trade
        </button>
      </div>
    </div>
  );
};

export { Trades };
