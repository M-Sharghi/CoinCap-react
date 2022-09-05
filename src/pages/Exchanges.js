import Nav from "../components/Nav";
import Header from "../components/Header";
import ExchangeList from "../components/ExchangeList";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { get_Exchanges } from "../helpers/server";



function Exchanges() {
  let [exchange, setExchange] = useState([]);

  useEffect(() => {
    get_Exchanges().then((res) => {
      setExchange(res);
    });
  }, []);


  return (
    <div>
      <Nav />
      <Header />
      <ExchangeList list={exchange}/>
      <Footer />
    </div>
  );
}

export default Exchanges;