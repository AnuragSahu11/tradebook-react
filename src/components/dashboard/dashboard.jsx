import { PieChart, Pie } from "recharts";
import "./dashboard.css";

const Dashboard = () => {
  const data = [
    { name: "Geeksforgeeks", students: 400 },
    { name: "Technical scripter", students: 700 },
    { name: "Geek-i-knack", students: 200 },
    { name: "Geek-o-mania", students: 1000 },
  ];
  return (
    <main className="">
      <PieChart width={700} height={700}>
        <Pie data={data} dataKey="students" outerRadius={250} fill="green" />
      </PieChart>
      <div className="dashboard p-y-2 p-x-3">
        <div className="title is-6 m-dw-4 text-center light">Dashboard</div>
        <p className="width-100 is-5 m-l-3 bold">Open Orders</p>
        <div className="grid-70-30">
          <div className="summary width-100 height-100 br-3 flex-r-w m-dw-4 center-x p-r-6 elevated li-shadow">
            <div className="summary-div width-50 p-y-3 p-x-3">
              <img src="/images/mf-dashboard.svg" alt="" />
              <div className="subtitle m-up-1 semibold">Account value</div>
              <div className="title is-5 semibold">10500</div>
            </div>
            <div className="summary-div p-y-3 p-x-3">
              <img src="/images/coin-account-balance.svg" alt="" />
              <div className="subtitle m-up-1 semibold">Your Investment</div>
              <div className="title is-5 semibold">9000</div>
            </div>
            <div className="summary-div width-50 p-y-3 p-x-3">
              <img src="/images/profits.png" alt="" />
              <div className="subtitle m-up-1 semibold">Profit</div>
              <div className="title is-5 is-green semibold">2000</div>
            </div>
            <div className="summary-div p-y-3 p-x-3">
              <img src="/images/loss.png" alt="" />
              <div className="subtitle m-up-1 semibold">Loss</div>
              <div className="title is-5 is-red semibold">500</div>
            </div>
          </div>
          <div className="performance-summary center-x">
            <div className="profit p-x-5 p-y-4 br-3 elevated li-shadow">
              <div className="profit-div">
                <div className="is-4 semibold is-green">Profitable Trades</div>
                <div className="text is-5 is-dark">02</div>
              </div>
              <div className="profit-div">
                <div className="is-4 semibold is-green">Profit %</div>
                <div className="text is-5 is-dark">16%</div>
              </div>
            </div>
            <div className="loss p-x-5 p-y-4 m-up-4 br-3 elevated li-shadow">
              <div className="loss-div">
                <div className="is-4 semibold is-red">Loss Trades</div>
                <div className="text is-5 is-dark">01</div>
              </div>
              <div className="loss-div">
                <div className="is-4 semibold is-red">Loss %</div>
                <div className="text is-5 is-dark">--</div>
              </div>
            </div>
          </div>
        </div>
        <p className="width-100 is-5 m-l-3 bold">Closed Orders</p>
        <div className="grid-70-30">
          <div className="summary height-100 width-100 br-3 flex-r-w m-dw-4 center-x p-r-6 elevated li-shadow">
            <div className="summary-div width-50 p-y-3 p-x-3">
              <img src="/images/mf-dashboard.svg" alt="" />
              <div className="subtitle m-up-1 semibold">Account value</div>
              <div className="title is-5 semibold">10500</div>
            </div>
            <div className="summary-div p-y-3 p-x-3">
              <img src="/images/coin-account-balance.svg" alt="" />
              <div className="subtitle m-up-1 semibold">Your Investment</div>
              <div className="title is-5 semibold">9000</div>
            </div>
            <div className="summary-div width-50 p-y-3 p-x-3">
              <img src="/images/profits.png" alt="" />
              <div className="subtitle m-up-1 semibold">Profit</div>
              <div className="title is-5 is-green semibold">2000</div>
            </div>
            <div className="summary-div p-y-3 p-x-3">
              <img src="/images/loss.png" alt="" />
              <div className="subtitle m-up-1 semibold">Loss</div>
              <div className="title is-5 is-red semibold">500</div>
            </div>
          </div>
          <div className="performance-summary center-x">
            <div className="profit p-x-5 p-y-4 br-3 elevated li-shadow">
              <div className="profit-div">
                <div className="is-4 semibold is-green">Profitable Trades</div>
                <div className="text is-5 is-dark">02</div>
              </div>
              <div className="profit-div">
                <div className="is-4 semibold is-green">Profit %</div>
                <div className="text is-5 is-dark">16%</div>
              </div>
            </div>
            <div className="loss p-x-5 p-y-4 m-up-4 br-3 elevated li-shadow">
              <div className="loss-div">
                <div className="is-4 semibold is-red">Loss Trades</div>
                <div className="text is-5 is-dark">01</div>
              </div>
              <div className="loss-div">
                <div className="is-4 semibold is-red">Loss %</div>
                <div className="text is-5 is-dark">--</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Dashboard };
