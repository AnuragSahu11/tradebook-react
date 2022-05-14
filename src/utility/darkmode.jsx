const SwitchTheme = () => {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "false");
  }
  const checkStatus = () => {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-theme");
    }
  };

  const changeStatus = () => {
    if (localStorage.getItem("darkMode") === "true") {
      localStorage.setItem("darkMode", false);
      document.body.classList.toggle("dark-theme");
    } else {
      localStorage.setItem("darkMode", "true");
      document.body.classList.toggle("dark-theme");
    }
  };

  checkStatus();

  return (
    <button
      onClick={changeStatus}
      className="dark-mode btn-icon is-dark nav-icons m-x-1"
    >
      <i className="fas is-dark fa-moon" />
    </button>
  );
};

export { SwitchTheme };
