import React from "react";
import PlatformWebSection from "../components/PlatformWebSection";
import { assets } from "../assets/assets";
import { Monitor, Timer, User } from "lucide-react";
import WhyTradePlatformSection from "../components/WhyTradePlatformSection";
import MetatraderBenefitsCard from "../components/MetatraderBenefitsCard";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

const MetatraderIphoneIpad = () => {
  const tabs = [
    { label: "MetaTrader 4", path: "/metatrader-4" },
    { label: "MetaTrader 5", path: "/metatrader-5" },
    { label: "MetaTrader WebTrader", path: "/metatrader-webtrader" },
    { label: "MetaTrader iPhone/iPad", path: "/metatrader-iphone/ipad" },
    { label: "MetaTrader Android", path: "/metatrader-android" },
  ];
  return (
    <div>
      <Banner
        title="MetaTrader for iPhone/iPad"
        description="Stay connected to the market at all times with our tight MetaTrader Raw Spread account on your iPhone or iPad."
        buttonText="Download Metatrader for iPhone/iPad"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />
      <PlatformWebSection
        image={assets.kitefx17}
        imageAlt="MetaTrader WebTrader"
        title={<>Trade Forex on the go with your iPhone or iPad!</>}
        description="We offer both MetaTrader 4 and MetaTrader 5 as an application on the iPhone and iPad. These applications give traders easy access to their accounts wherever they are."
        descriptionSecondary="Our mobile MetaTrader application uses many of the advanced features of the iPhone and iPad, such as the landscape-to-portrait view changer (a simple rotation of the device). The mobile MetaTrader application also offers one click trading, the ability to customise your layouts, and advanced charts and analysis. Use our mobile MetaTrader applications to experience unlimited flexibility without compromising execution speed or quality."
        ctaText="Trade on your iPhone or iPad"
        systemRequirements="iPhone iOS 7.0 or later. Compatible with iPhone, iPad and iPod touch."
        features={[
          { label: "Raw Pricing", icon: "0.0" },
          { label: "Spreads from 0.0 pips", icon: "0.0" },
          { label: "Fast order execution", icon: <Timer size={28} /> },
          { label: "Deep liquidity", icon: "0.0" },
          { label: "Access your account anywhere", icon: <User size={28} /> },
          { label: "MetaTrader 4 and 5", icon: <Monitor size={28} /> },
        ]}
        onCtaClick={() => console.log("Open Account")}
      />
      <WhyTradePlatformSection
        title="Why trade on MetaTrader iOS with IC Markets Global?"
        description=""
        browsers={[]}
        leftFeatures={[
          "Real-time forex and CFD quotes",
          "Full set of trade orders, including pending orders",
          "Trade directly from the chart",
          "Support of all types of execution modes",
          "View your complete trading history",
        ]}
        rightFeatures={[
          "Real-time interactive charts with zoom and scroll",
          "30+ of the most popular technical indicators",
          "Multiple timeframes to analyze price action and patterns",
          "3 chart types: Bars, Japanese Candlesticks, Line",
          "Adjustable settings of technical indicators",
        ]}
      />
      <MetatraderBenefitsCard />
    </div>
  );
};

export default MetatraderIphoneIpad;
