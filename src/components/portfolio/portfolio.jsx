import { Filters } from "./filters";
import { Trades } from "./trades";
import "./portfolio.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { getUserData } from "../../firebase/firestore";
import { objectToArray } from "../../utility";
import { getCoinPrices } from "../../utility/api-methods";

const PortfolioPage = () => {
  const { userDataState, dispatch } = useAuth();
  const [coinPriceData, setCoinPriceData] = useState({});

  useEffect(() => {
    (async () => {
      await getUserData("vpLtiGgM54Xc4ACV4R8xTvg4rTj2", dispatch);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { data } = await getCoinPrices("bitcoin,cardano");
      setCoinPriceData(data);
    })();
  }, []);

  return (
    <main>
      <div className="portfolio">
        <div className="grid-20-80 grid-portfolio">
          <Filters />
          <div className="portfolio-data p-dw-5 m-up-2 p-x-3">
            <div className="title is-6 light m-up-6 ">Portfolio</div>
            <div className="portfolio-trades center-x m-up-2">
              {objectToArray(userDataState.orders).map((order) => (
                <Trades
                  key={order.key}
                  currentPrice={coinPriceData[order.id].usd || "loading"}
                  name={order.name}
                  symbol={order.symbol}
                  price={order.price}
                  quantity={order.quantity}
                  image={order.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { PortfolioPage };
