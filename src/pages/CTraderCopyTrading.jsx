import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import Tabs from "../components/Tabs";
import CopyTradingSection from "../components/CopyTradingSection";
import WhyTradeSection from "../components/WhyTradeSection";

const CTraderCopyTrading = () => {
  const tabs = [
    { label: "cTrader", path: "/ctrader" },
    { label: "cTrader Web", path: "/ctrader-web" },
    { label: "cTrader iPhone/iPad", path: "/ctrader-iphone/ipad" },
    { label: "cTrader iMac", path: "/ctrader-imac" },
    { label: "cTrader Android", path: "/ctrader-android" },
    { label: "cTrader Copy Trading", path: "/ctrader-copy-trading" },
  ];
  return (
    <div>
      <Banner
        title="cTrader Copy Trading"
        description="IC Markets Global offers a unique opportunities for Investors and Strategy providers with Spotware’s cTrader Copy Trading platform. Designed for Easy & Transparent Copy Trading."
        buttonText="cTrader Copy Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />
      <CopyTradingSection />
      <WhyTradeSection
        title="Trade Forex on the go with your Android device!"
        subtitle="The World’s Most Popular Platform"
        platformName=""
        platformLogo={assets.kitefx24}
        leftFeatures={[
          "Fast execution for forex and CFDs on Commodities",
          "Single-tap order execution",
          "Full balance, margin, and P&L information",
          "View and modify pending orders",
          "Special split-screen interface for Tablets",
        ]}
        rightFeatures={[
          "Complete accounts list – switch account with a single tap.",
          "View trading history",
          "View all symbols and rates, including from your favourites list",
          "Charts available",
        ]}
      />
    </div>
  );
};

export default CTraderCopyTrading;
