import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Dashboard from "./Component/Dashboard";
import LandingPage from "./Component/LandingPage/LandingPage";
import CoinPage from "./Component/DetailCoin/CoinPage";
import ComparePage from "./Compare/ComparePage/Compare";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </>
  );
}

export default App;
