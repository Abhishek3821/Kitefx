import React from "react";
import PlatformWebSection from "../components/PlatformWebSection";
import { assets } from "../assets/assets";
import { Monitor, Timer, User } from "lucide-react";
import WhyTradePlatformSection from "../components/WhyTradePlatformSection";
import MetatraderWebtraderBenefits from "../components/MetatraderWebtraderBenefits";
import MetatraderWebtraderFunctionality from "../components/MetatraderWebtraderFunctionality";
import MetaTraderTabs from "../components/MetatraderTabs";

const MetaraderWebtrader = () => {
  return (
    <div className="py-24">
      <MetaTraderTabs />
      <PlatformWebSection
        image={assets.kitefx17}
        imageAlt="MetaTrader WebTrader"
        title={<>Trade Forex from anywhere on MetaTrader WebTrader!</>}
        description="MetaTrader WebTrader offers fast order execution capabilities of MetaTrader with ease and convenience of being a web-based application. MetaTrader WebTrader is a user friendly web-based trading platform allowing you to enjoy trading in the IC Markets Global trading environment with no dealing desk from anywhere in the world."
        descriptionSecondary="MetaTrader WebTrader has the same tight spreads, Level II Pricing, and one-click trading as the MetaTrader desktop version along with features such as a personalized trader dashboard to allow monitoring of your positions at a glance."
        ctaText="Open Account"
        systemRequirements="Browsers Supported Chrome, Firefox, Safari, IE 10+"
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
        title="Why trade on MetaTrader Web Trader with IC Markets Global?"
        description="MetaTrader Web Trader has the same tight spreads, Level II Pricing, and one-click trading as the MetaTrader desktop version along with features such as a personalized trader dashboard to allow you to monitor all of your positions at a glance."
        browsers={[
          {
            name: "Chrome",
            icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png",
          },
          {
            name: "Firefox",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.png",
          },
          {
            name: "Safari",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/52/Safari_browser_logo.svg",
          },
          {
            name: "Internet Explorer",
            icon: "https://upload.wikimedia.org/wikipedia/commons/1/10/Internet_Explorer_9_icon.svg",
          },
        ]}
        leftFeatures={[
          "Trade from any location",
          "Take advantage of our Raw spreads",
          "No order or trade restrictions",
          "Trade micro lots 0.01 with no maximum",
          "Level II pricing – full market depth",
        ]}
        rightFeatures={[
          "One click trade execution",
          "Multiple order types",
          "Real time trade reporting",
          "Advanced charting and technical analysis",
          "Leverage of up to 1:1000",
        ]}
      />
      <MetatraderWebtraderBenefits />
      <MetatraderWebtraderFunctionality />
    </div>
  );
};

export default MetaraderWebtrader;
