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
import CTrader from "./pages/CTrader";
import CTraderWeb from "./pages/CTraderWeb";
import CTraderIphoneIpad from "./pages/CTraderIphoneIpad";
import CTraderIMac from "./pages/CTraderIMac";
import CTRaderAndroid from "./pages/CTRaderAndroid";
import CTraderCopyTrading from "./pages/CTraderCopyTrading";
import TradingView from "./pages/TradingView";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import EconomicCalender from "./pages/EconomicCalender";
import ForexCalculator from "./pages/ForexCalculator";
import TradingConditions from "./pages/TradingConditions";
import TradingHours from "./pages/TradingHours";
import SwapRates from "./pages/SwapRates";
import Footer from "./components/Footer";
import CommoditiesCFDs from "./pages/commodities";
import Indices from "./pages/Indices";
import Bonds from "./pages/bonds";
import DigitalCurrencies from "./pages/digital-currencies";
import StocksCFDs from "./pages/shares-cfds";
import FuturesCFDs from "./pages/futures-cfds";
import VirtualPrivateServer from "./pages/virtual-private-server";
import TradingServers from "./pages/trading-servers";
import MT4AdvancedTools from "./pages/mt4-advanced-tools";
import ICInsights from "./pages/ic-insights";
import TradingCentral from "./pages/trading-central";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/account-overview" element={<AccountOverview />} />
          <Route path="/ctrader-raw-spread" element={<CTraderRawSpread />} />
          <Route path="/islamic" element={<Islamic />} />
          <Route path="/what-you-can-trade" element={<Whatyoucantrade />} />
          <Route path="/simple-pricing" element={<SimplePricing />} />
          <Route path="/forex-trading" element={<ForexTrading />} />
          <Route path="/range-of-products" element={<RangeofProducts />} />
          <Route path="/raw-spread" element={<RawSpread />} />
          <Route path="/standard" element={<Standard />} />
          <Route
            path="/swap-free-charges-table"
            element={<SwapFreeChargesTable />}
          />
          <Route path="/how-to-withdraw" element={<Howtowithdraw />} />
          <Route path="/how-to-deposit" element={<Howtodeposit />} />
          <Route
            path="/metatrader-webtrader"
            element={<MetatraderWebtrader />}
          />
          <Route path="/metatrader-4" element={<Metatrader4 />} />
          <Route path="/metatrader-5" element={<Metatrader5 />} />

          <Route
            path="/metatrader-iphone/ipad"
            element={<MetatraderIphoneIpad />}
          />
          <Route path="/metatrader-android" element={<MetatraderAndroid />} />
          <Route path="/ctrader" element={<CTrader />} />
          <Route path="/ctrader-web" element={<CTraderWeb />} />
          <Route path="/ctrader-iphone/ipad" element={<CTraderIphoneIpad />} />
          <Route path="/ctrader-imac" element={<CTraderIMac />} />
          <Route path="/ctrader-android" element={<CTRaderAndroid />} />
          <Route
            path="/ctrader-copy-trading"
            element={<CTraderCopyTrading />}
          />
          <Route path="/trading-view" element={<TradingView />} />
          <Route path="/forex-cfds" element={<ForexCFDs />} />
          <Route path="/commodities" element={<CommoditiesCFDs />} />
          <Route path="/indices" element={<Indices />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/digital-currencies" element={<DigitalCurrencies />} />
          <Route path="/shares-cfds" element={<StocksCFDs />} />
          <Route path="/futures-cfds" element={<FuturesCFDs />} />

          
          <Route path="/why-kitefx" element={<WhyICMarketsGlobal />} />
          <Route path="/about-kitefx" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/economic-calender" element={<EconomicCalender />} />
          <Route path="/forex-calculator" element={<ForexCalculator />} />
          <Route path="/trading-conditions" element={<TradingConditions />} />
          <Route path="/trading-hours" element={<TradingHours />} />
          <Route path="/forex-spreads" element={<SimplePricing />} />
          <Route path="/swap-rates" element={<SwapRates />} />

          <Route path="/virtual-private-server" element={<VirtualPrivateServer />} /> 
         <Route path="/trading-servers" element={<TradingServers />} /> 
         <Route path="/mt4-advanced-tools" element={<MT4AdvancedTools />} /> 
         <Route path="/ic-insights" element={<ICInsights />} /> 
         <Route path="/trading-central" element={<TradingCentral />} /> 
       






        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
