import "./modal.css";

const AddToPortfolioModal = ({ toggleModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal p-x-4 center-x elevated m-up-6 shadow">
        <button
          onClick={toggleModal}
          className="card-cross btn-close is-medium"
        >
          <i className="fas fa-times" />
        </button>
        <i className="modal-icon is-blue far fa-address-card" />
        <div className="textbox">
          <div className="title text-center">Add to portfolio</div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Price</p>
            <input
              type="text"
              className="form-input input-focused"
              placeholder="Indice price"
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Quantity</p>
            <input
              type="text"
              className="form-input input-focused"
              placeholder="Number of units "
              required=""
            />
          </div>
          <div className="m-up-2 center-x form-div">
            <p className="form-label">Amount</p>
            <input
              type="text"
              className="form-input input-focused"
              placeholder="Total amount"
              required=""
            />
          </div>
        </div>
        <div className="btn-horizontal">
          <button className="btn-primary width-100 has-green m-up-4 btn-small">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export { AddToPortfolioModal };
