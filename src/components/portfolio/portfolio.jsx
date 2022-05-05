import { Filters } from "./filters";
import { Trades } from "./trades";
import "./portfolio.css";

const PortfolioPage = () => {
  return (
    <main>
      <div className="portfolio">
        <div className="grid-20-80 grid-portfolio">
          <Filters />
          <div className="portfolio-data p-dw-5 m-up-2 p-x-3">
            <div className="title is-6 light m-up-6 ">Portfolio</div>
            <div className="portfolio-trades center-x m-up-2">
              <Trades />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { PortfolioPage };
