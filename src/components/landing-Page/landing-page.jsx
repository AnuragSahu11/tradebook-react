import "./landing-page.css";

const LandingPage = () => {
  return (
    <section className="hero">
      <div className="hero-div p-y-1 p-x-3 grid-2">
        <div className="hero-text center-x center-y">
          <img
            className="logo-m"
            src="/images/02 - Colorful - Icon Only.png"
            alt=""
          />
          <div className="textbox">
            <div className="title is-6 m-up-2 bold">
              Welcome To <br />
              <span className="" style={{ color: "var(--blue)" }}>
                LUCID Tradebook
              </span>
            </div>
            <div className="subtitle is-3">
              Manage your Portfolio the Lucid way
            </div>
          </div>
          <button className="m-up-3 btn-primary btn-large shadow">
            Get started
          </button>
        </div>
        <div className="hero-image">
          <img
            className="hero-image-img"
            src="/images/online-report-not-css.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { LandingPage };
