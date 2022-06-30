import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Swap from "./pages/Swap";
import ExchangesPage from "./pages/Exchanges";
import CoinPage from "./pages/Coin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchanges" element={<ExchangesPage />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/coins/:name" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
