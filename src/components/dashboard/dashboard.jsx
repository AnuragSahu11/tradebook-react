import { PieChart, Pie } from "recharts";
import { useAuth } from "../../context/auth-context";
import {
  accountValue,
  changeTitle,
  coinIdList,
  currentAccValue,
  lossTrades,
  lossTradesPercentage,
  objectToArray,
  profitTrades,
  profitTradesPercentage,
} from "../../utility";
import { useEffect, useState } from "react";
import { getUserData } from "../../firebase/firestore";
import "./dashboard.css";
import {
  closedLossTrades,
  closedProfitTrades,
  closedTradeLoss,
  closedTradeProfit,
  lossTradeAmount,
  profitTradeAmount,
  totalAmountInvest,
  totalAmountSold,
} from "../../utility/dashboard-methods";
import { getCoinPrices } from "../../server-requests/server-requests";

const Dashboard = () => {
  const {
    userDataState,
    userDataState: { token },
    dispatch,
    isLoading,
    setLoading,
  } = useAuth();
  const [coinPriceData, setCoinPriceData] = useState({});

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

  changeTitle("Dashboard");

  const OpenOrderPieChartData = [
    {
      name: "profit",
      value: Math.round(
        profitTradeAmount(userDataState?.orders, coinPriceData)
      ),
    },
    {
      name: "loss",
      value: Math.round(lossTradeAmount(userDataState?.orders, coinPriceData)),
    },
  ];

  const ClosedOrderPieChartData = [
    {
      name: "profit",
      value: Math.round(closedTradeProfit(userDataState?.closed)),
    },
    {
      name: "loss",
      value: Math.round(closedTradeLoss(userDataState?.closed)),
    },
  ];

  const openOrderTotalValue = userDataState
    ? currentAccValue(userDataState?.orders, coinPriceData)
    : null;
  const openOrderInvestment = userDataState
    ? accountValue(userDataState?.orders)
    : null;
  const closedOrderTotalInvest = userDataState
    ? totalAmountInvest(userDataState?.closed)
    : null;
  const closedOrderTotalSold = userDataState
    ? totalAmountSold(userDataState?.closed)
    : null;

  changeTitle("Dashboard Tradebook");

  return (
    <main className="">
      <div className="dashboard p-y-2 m-up-6 p-x-3">
        <div className="title is-6 m-dw-4 semibold">Dashboard</div>
        {!isLoading && (
          <>
            <p className="width-100 is-5 regular ">Open Orders</p>
            <div className="grid-70-30">
              <div className="summary width-100 height-100 br-3 flex-r-w m-dw-4 center-x p-r-6 elevated li-shadow">
                <div className="summary-div width-50 p-y-3 p-x-3">
                  <img src="/images/mf-dashboard.svg" alt="" />
                  <div className="subtitle m-up-1 semibold">
                    Current Account value
                  </div>
                  <div className="title is-5 semibold">
                    {openOrderTotalValue}
                  </div>
                </div>
                <div className="summary-div p-y-3 p-x-3">
                  <img src="/images/coin-account-balance.svg" alt="" />
                  <div className="subtitle m-up-1 semibold">
                    Your Total Investment
                  </div>
                  <div className="title is-5 semibold">
                    {openOrderInvestment}
                  </div>
                </div>
                <div className="summary-div width-50 p-y-3 p-x-3">
                  <img src="/images/profits.png" alt="" />
                  <div className="subtitle m-up-1 semibold">Net Profit</div>
                  <div className="title is-5 is-green semibold">
                    {openOrderTotalValue - openOrderInvestment > 0
                      ? (openOrderTotalValue - openOrderInvestment).toFixed(2)
                      : "--"}
                  </div>
                </div>
                <div className="summary-div p-y-3 p-x-3">
                  <img src="/images/loss.png" alt="" />
                  <div className="subtitle m-up-1 semibold">Net Loss</div>
                  <div className="title is-5 is-red semibold">
                    {openOrderTotalValue - openOrderInvestment < 0
                      ? (openOrderTotalValue - openOrderInvestment).toFixed(2)
                      : "--"}
                  </div>
                </div>
                <div className="summary-div p-y-3 p-x-3 center-x width-100">
                  <div className="subtitle m-up-1 semibold">
                    Total Open trades
                  </div>
                  <div className="title is-5 semibold">
                    {objectToArray(userDataState?.orders).length}
                  </div>
                </div>
              </div>
              <div className="performance-summary center-x">
                <div className="profit profit-performance p-x-5 p-y-4 br-3 elevated li-shadow">
                  <div className="profit-div">
                    <div className="is-4 semibold is-green">
                      Profitable Trades
                    </div>
                    <div className="text is-5 is-dark">
                      {profitTrades(userDataState?.orders, coinPriceData)}
                    </div>
                  </div>
                  <div className="profit-div">
                    <div className="is-4 semibold is-green">Profit %</div>
                    <div className="text is-5 is-dark">
                      {profitTradesPercentage(
                        openOrderTotalValue,
                        openOrderInvestment
                      )}
                    </div>
                  </div>
                </div>
                <div className="loss p-x-5 p-y-4 m-up-4 br-3 elevated li-shadow">
                  <div className="loss-div">
                    <div className="is-4 semibold is-red">Loss Trades</div>
                    <div className="text is-5 is-dark">
                      {lossTrades(userDataState?.orders, coinPriceData)}
                    </div>
                  </div>
                  <div className="loss-div">
                    <div className="is-4 semibold is-red">Loss %</div>
                    <div className="text is-5 is-dark">
                      {lossTradesPercentage(
                        openOrderTotalValue,
                        openOrderInvestment
                      )}
                    </div>
                  </div>
                </div>
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={OpenOrderPieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </div>
            </div>
            <p className="width-100 is-5 m-l-3 m-up-6 regular">Closed Orders</p>
            <div className="grid-70-30">
              <div className="summary height-100 width-100 br-3 flex-r-w m-dw-4 center-x p-r-6 elevated li-shadow">
                <div className="summary-div width-50 p-y-3 p-x-3">
                  <img src="/images/mf-dashboard.svg" alt="" />
                  <div className="subtitle m-up-1 semibold">
                    Total amount invested
                  </div>
                  <div className="title is-5 semibold">
                    {totalAmountInvest(userDataState?.closed)}
                  </div>
                </div>
                <div className="summary-div p-y-3 p-x-3">
                  <img src="/images/coin-account-balance.svg" alt="" />
                  <div className="subtitle m-up-1 semibold">
                    Total amount sold
                  </div>
                  <div className="title is-5 semibold">
                    {totalAmountSold(userDataState?.closed)}
                  </div>
                </div>
                <div className="summary-div width-50 p-y-3 p-x-3">
                  <img src="/images/profits.png" alt="" />
                  <div className="subtitle m-up-1 semibold">Profit</div>
                  <div className="title is-5 is-green semibold">
                    {closedOrderTotalSold - closedOrderTotalInvest > 0
                      ? (closedOrderTotalSold - closedOrderTotalInvest).toFixed(
                          2
                        )
                      : "--"}
                  </div>
                </div>
                <div className="summary-div p-y-3 p-x-3">
                  <img src="/images/loss.png" alt="" />
                  <div className="subtitle m-up-1 semibold">Loss</div>
                  <div className="title is-5 is-red semibold">
                    {closedOrderTotalSold - closedOrderTotalInvest < 0
                      ? closedOrderTotalSold - closedOrderTotalInvest.toFixed(2)
                      : "--"}
                  </div>
                </div>
              </div>
              <div className="performance-summary center-x">
                <div className="profit profit-performance p-x-5 p-y-4 br-3 elevated li-shadow">
                  <div className="profit-div">
                    <div className="is-4 semibold is-green">
                      Profitable Trades
                    </div>
                    <div className="text is-5 is-dark">
                      {closedProfitTrades(userDataState?.closed)}
                    </div>
                  </div>
                  <div className="profit-div">
                    <div className="is-4 semibold is-green">Profit %</div>
                    <div className="text is-5 is-dark">
                      {closedOrderTotalSold - closedOrderTotalInvest > 0
                        ? (
                            ((closedOrderTotalSold - closedOrderTotalInvest) /
                              closedOrderTotalInvest) *
                            100
                          ).toFixed(2)
                        : "--"}
                    </div>
                  </div>
                </div>
                <div className="loss p-x-5 p-y-4 m-up-4 br-3 elevated li-shadow">
                  <div className="loss-div">
                    <div className="is-4 semibold is-red">Loss Trades</div>
                    <div className="text is-5 is-dark">
                      {closedLossTrades(userDataState?.closed)}
                    </div>
                  </div>
                  <div className="loss-div">
                    <div className="is-4 semibold is-red">Loss %</div>
                    <div className="text is-5 is-dark">
                      {closedOrderTotalSold - closedOrderTotalInvest < 0
                        ? (
                            ((closedOrderTotalSold - closedOrderTotalInvest) /
                              closedOrderTotalInvest) *
                            100
                          ).toFixed(2)
                        : "--"}
                    </div>
                  </div>
                </div>
                <PieChart width={300} height={300}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={ClosedOrderPieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export { Dashboard };
