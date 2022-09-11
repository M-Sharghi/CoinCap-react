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
    <div style={{background: "rgb(236, 239, 241)"}}>
      <Nav />
      <Header />
      <ExchangeList list={exchange}/>
      <Footer />
    </div>
  );
}

export default Exchanges;