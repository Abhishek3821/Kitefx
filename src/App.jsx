import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AccountOverview from "./pages/AccountOverview";
import CTraderRawSpread from "./pages/CTraderRawSpread";
import Islamic from "./pages/Islamic";
import WhyICMarketsGlobal from "./pages/WhyICMarketsGlobal";
import Whatyoucantrade from "./pages/Whatyoucantrade";
import SimplePricing from "./pages/SimplePricing";
import ForexTrading from "./pages/ForexTrading"; 
import RangeofProducts from "./pages/RangeofProducts";
import RawSpread from "./pages/RawSpread";
import Standard from "./pages/Standard";
import SwapFreeChargesTable from "./pages/SwapFreeChargesTable";
import Howtowithdraw from "./pages/Howtowithdraw";
import Howtodeposit from "./pages/Howtodeposit";
import MetatraderWebtrader from "./pages/MetatraderWebtrader";
import Metatrader4 from "./pages/Metatrader4";
import Metatrader5 from "./pages/Metatrader5";
import MetatraderIphoneIpad from "./pages/MetatraderIphoneIpad";
import MetatraderAndroid from "./pages/MetatraderAndroid";
import ForexCFDs from "./pages/ForexCFDs";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AccountOverview" element={<AccountOverview />} />
          <Route path="/CTraderRawSpread" element={<CTraderRawSpread />} />
          <Route path="/Islamic" element={<Islamic />} />
          <Route path="/WhyICMarketsGlobal" element={<WhyICMarketsGlobal />} />
          <Route path="/Whatyoucantrade" element={<Whatyoucantrade />} />
          <Route path="/SimplePricing" element={<SimplePricing />} />
          <Route path="/ForexTrading" element={<ForexTrading />} />
          <Route path="/RangeofProducts" element={<RangeofProducts />} />
          <Route path="/RawSpread" element={<RawSpread />} />
          <Route path="/Standard" element={<Standard />} />
          <Route path="/SwapFreeChargesTable" element={<SwapFreeChargesTable />} />
          <Route path="/Howtowithdraw" element={<Howtowithdraw />} />
          <Route path="/Howtodeposit" element={<Howtodeposit />} />
          <Route path="/MetatraderWebtrader" element={<MetatraderWebtrader />} />
          <Route path="/Metatrader4" element={<Metatrader4 />} />
          <Route path="/Metatrader5" element={<Metatrader5 />} />

          <Route path="/MetatraderIphoneIpad" element={<MetatraderIphoneIpad />} />
          <Route path="/MetatraderAndroid" element={<MetatraderAndroid />} />
          <Route path="/ForexCFDs" element={<ForexCFDs />} />
           
        </Routes>
      </Router>
    </div>
  );
};

export default App;
