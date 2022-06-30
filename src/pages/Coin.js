import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get_coin } from "../helpers/server";
import { get_chart } from "../helpers/server";
import { get_Exchanges } from "../helpers/server";
import Nav from "../components/Nav";
import Coins from "../components/Coins";
import History from "../components/History";
import Chart from "../components/Chart/index";
import SwapTbl from "../components/SwapTbl";
import ExchangeList from "../components/ExchangeList";
import Footer from "../components/Footer";


function Coin() {
  let { name } = useParams();
  let [data,setData]=useState({});
  let [history,setHistory]=useState({});
  let [chart,setChart]=useState([]);
  let [exchange,setExchange]=useState([]);


  useEffect(() => {
    get_coin(name).then((response) => {
      setData(response);
    });

    get_coin(name).then((res) => {
      setHistory(res);
    });

    get_chart(name).then((res) => {
      setChart(res);
    });

    get_Exchanges().then((res) => {
      setExchange(res);
    });

  }, []);
  

  return (
    <div>
      <Nav />
      <Coins coin={data} />
      <div className="auto flex">
        <div>
          <History data={history} />
          <Chart list={chart} />
        </div>
        <SwapTbl />
      </div>
      <ExchangeList list={exchange}/>
      <Footer />
    </div>
  );
}

export default Coin;
