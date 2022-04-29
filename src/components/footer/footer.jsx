const Footer = () => {
  return (
    <>
      <footer>
        <div classname="footer-div m-up-3 has-accent p-up-2">
          <div classname="textbox">
            <div classname="text is-dark text-center">
              Made with <i class="bx bx-code-alt"></i> by Anurag Sahu
            </div>
            <div classname="footer-icons text-center">
              <a href="https://www.linkedin.com/in/anurag-sahu-241520193/">
                <button classname="btn-icon nav-icons m-x-1">
                  <i class="bx bxl-linkedin-square"></i>
                </button>
              </a>
              <a href="https://github.com/AnuragSahu11">
                <button classname="btn-icon nav-icons m-x-1">
                  <i classname="fab fa-github-square is-4"></i>
                </button>
              </a>
            </div>
            <div classname="text text-center is-2">© 2022 Lucid Ui</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
