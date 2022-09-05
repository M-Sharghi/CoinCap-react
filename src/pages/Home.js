import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import CoinsList from "../components/CoinsList";
import Footer from "../components/Footer";
import { get_coins } from "../helpers/server";

function Home() {
  let [data, setData] = useState([]);

  useEffect(() => {
    get_coins().then((response) => {
      setData(response);
    });
  }, []);

  return (
    <div>
      <Nav />
      <Header />
      <CoinsList list={data} />
      <Footer />
    </div>
  );
}

export default Home;
