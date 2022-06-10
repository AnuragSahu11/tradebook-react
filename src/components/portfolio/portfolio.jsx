import { Filters } from "./filters";
import { Trades } from "./trades";
import "./portfolio.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { getUserData } from "../../firebase/firestore";
import {
  coinIdList,
  applyFilters,
  objectToArray,
  changeTitle,
} from "../../utility";
import { getCoinPrices } from "../../utility/api-methods";

const PortfolioPage = () => {
  const { userDataState, dispatch, setLoading, isLoading } = useAuth();
  const [coinPriceData, setCoinPriceData] = useState({});
  const { token } = userDataState;

  useEffect(() => {
    (async () => {
      await getUserData(token, dispatch, setLoading);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      let { data } = await getCoinPrices(
        coinIdList(objectToArray(userDataState?.orders))
      );
      setCoinPriceData(data);
    })();
  }, [userDataState]);

  changeTitle("Portfolio");

  return (
    <main>
      <div className="portfolio">
        <div className="grid-20-80 grid-portfolio">
          <Filters />
          <div className="portfolio-data p-dw-5 m-up-2 p-x-3">
            <div className="title is-6 light m-up-6 p-up-1">Portfolio</div>
            <div className="portfolio-trades center-x m-up-2">
              {!isLoading &&
                applyFilters(
                  objectToArray(userDataState.orders),
                  userDataState.filters,
                  coinPriceData
                ).map((order) => (
                  <Trades
                    key={order.key}
                    orderData={order}
                    orderId={order.key}
                    currentPrice={coinPriceData[order.id]?.usd || "loading"}
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
