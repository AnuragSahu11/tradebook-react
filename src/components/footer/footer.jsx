import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-div m-up-3 has-accent p-up-2">
          <div className="textbox">
            <div className="text is-dark text-center">
              Made with <i className="bx bx-code-alt"></i> by Anurag Sahu
            </div>
            <div className="footer-icons text-center">
              <a href="https://www.linkedin.com/in/anurag-sahu-241520193/">
                <button className="btn-icon nav-icons m-x-1">
                  <i className="fab fa-linkedin is-4"></i>
                </button>
              </a>
              <a href="https://github.com/AnuragSahu11">
                <button className="btn-icon nav-icons m-x-1">
                  <i className="fab fa-github-square is-4"></i>
                </button>
              </a>
            </div>
            <div className="text text-center is-2">© 2022 Lucid Ui</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export { Footer };
