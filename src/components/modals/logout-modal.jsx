const LogoutModal = ({ showLogout, toggleLogout }) => {
  const logoutClickHandler = () => {};

  const outsideModalClick = () => {
    toggleLogout();
  };

  return (
    <div
      onClick={outsideModalClick}
      style={{ display: showLogout ? "block" : "none" }}
      className="logout-wrapper"
    >
      <div onClick={(e) => e.stopPropagation()} className="logout m-up-6">
        <div className="modal center-x elevated center-y shadow">
          <button
            onClick={toggleLogout}
            className="card-cross btn-close is-medium"
          >
            <i className="fas fa-times" />
          </button>
          <i className="modal-icon is-blue fas fa-sign-out-alt" />
          <div className="textbox">
            <div className="title text-center">Log out</div>
            <div className="text text-center">
              Clicking below will log you out of the current device.
            </div>
          </div>
          <div className="btn-horizontal m-up-1">
            <button
              onClick={logoutClickHandler}
              className="btn-grey has-red btn-small"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LogoutModal };
