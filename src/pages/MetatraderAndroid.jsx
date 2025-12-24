import React from "react";
import PlatformWebSection from "../components/PlatformWebSection";
import WhyTradePlatformSection from "../components/WhyTradePlatformSection";
import MetatraderBenefitsCard from "../components/MetatraderBenefitsCard";
import { assets } from "../assets/assets"; // ✅ FIX
import { Monitor, Timer, User } from "lucide-react";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

const MetatraderAndroid = () => {
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
        title="MetaTrader for Android"
        description="Never miss an opportunity! Stay connected to the market at all times with the MetaTrader app for Android."
        buttonText="Download Metatrader for Android"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />

      <PlatformWebSection
        image={assets.kitefx17}
        imageAlt="MetaTrader Android"
        title={<>Trade Forex on the go with your Android device!</>}
        description="We offer both MetaTrader 4 and MetaTrader 5 as an application on Android-based devices. These applications give traders easy access to their accounts wherever they are."
        descriptionSecondary="The IC Markets Global MetaTrader Android application gives you access to our tight spreads and fast execution speeds directly on your Android-based mobile. It features fast one click trading from multiple screens and customisable layouts. With full access to historical data and advanced charting facilities, you can manage your account, trade our full list of products, and use over 30 technical indicators for market analysis."
        ctaText="Use MetaTrader for Android"
        systemRequirements="Android 4.0 or higher"
        features={[
          { label: "Raw Pricing", icon: "0.0" },
          { label: "Spreads from 0.0 pips", icon: "0.0" },
          { label: "Fast order execution", icon: <Timer size={28} /> },
          { label: "Deep liquidity", icon: "0.0" },
          { label: "Access your account anywhere", icon: <User size={28} /> },
          { label: "MetaTrader 4 and 5", icon: <Monitor size={28} /> },
        ]}
        onCtaClick={() => console.log("Use MetaTrader Android")}
      />

      <WhyTradePlatformSection
        title="Why trade on MetaTrader Android with IC Markets Global?"
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

export default MetatraderAndroid;
