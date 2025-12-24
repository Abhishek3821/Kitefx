import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import Tabs from "../components/Tabs";
import TradingPlatformHero from "../components/TradingPlatformHero";
import WhyTradeSection from "../components/WhyTradeSection";
import PlatformDifferentiators from "../components/PlatformDifferentiators";
import {
  Clock,
  BarChart3,
  Layers,
  ShieldCheck,
  Activity,
  Lock,
} from "lucide-react";
import AboutPlatform from "../components/AboutPlatform";
import PlatformStepsSection from "../components/PlatformStepsSection";

const CTraderAndroid = () => {
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
        title="cTrader for Android"
        description="Never miss an opportunity! Stay connected to the market at all times with the ultra-responsive cTrader Android app."
        buttonText="Download cTrader for Android"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />
      <TradingPlatformHero
        title="Trade on the most sophisticated trading technology IC Markets Global cTrader Android"
        description={
          <>
            <span>
              IC Markets Global cTrader for Android gives you the very best in
              FX trading as a native app. It gives you all the tools you will
              need for effective technical analysis, including common trend
              indicators, oscillators, volatility measures and line drawings,
              all accessible from directly within the chart.
            </span>
            <br />
            <br />
            <span>
              Gain access to our tight spreads and fast execution speeds
              directly from your Android device. You will get the same core
              functionality as cTrader Web for Mobiles, with faster launch times
              and the same easy-to-use interface.
            </span>
          </>
        }
        ctaText="Use cTrader Android"
        onCtaClick={() => console.log("Open Account Clicked")}
        systemRequirements="Android 4.1 & later."
        mainImage={assets.kitefx23}
      />
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
      <PlatformDifferentiators
        title="What makes IC Markets Global's cTrader Platform different?"
        subtitle="IC Markets Global has partnered with key providers to bring you a powerful and user-friendly platform designed to take your trading to the next level."
        features={[
          {
            icon: <BarChart3 size={24} />,
            title: "Extremely Low Spreads",
            description:
              "IC Markets Global boasts some of the tightest spreads of all Forex CFD providers globally. Spreads on EUR/USD can often be seen at 0.0 pips during European and North American sessions.",
          },
          {
            icon: <Clock size={24} />,
            title: "Fast Order Execution",
            description:
              "The IC Markets Global cTrader server is located in the LD5 IBX Equinix Data Centre in London, providing ultra-low latency and fast execution.",
          },
          {
            icon: <Layers size={24} />,
            title: "Advanced Trading Tools",
            description:
              "Advanced order types, Depth of Market (DOM), and VWAP indicators help traders make informed decisions.",
          },
          {
            icon: <ShieldCheck size={24} />,
            title: "Smart Stop Out",
            description:
              "Smart Stop Out logic provides enhanced account protection using a more advanced algorithm.",
          },
          {
            icon: <Activity size={24} />,
            title: "Level II Pricing",
            description:
              "Full market depth transparency with available volumes shown at each price level.",
          },
          {
            icon: <Lock size={24} />,
            title: "No Restrictions on Trading",
            description:
              "No minimum order distance or freeze levels, allowing orders to be placed close to market price.",
          },
        ]}
      />
      <AboutPlatform
        eyebrow=""
        title="About cTrader"
        description="cTrader is a moderately new retail trading platform compared to the MetaQuotes platform. It offers ultra-fast order execution capabilities and a user-friendly platform allowing you to enjoy Raw Pricing trading with No Dealing Desk trading from anywhere in the world."
        points={[
          "Simple user interface",
          "Advanced take profit and stop loss systems",
          "Detachable charts and varying chart time frames",
          "Live sentiments and depth of market",
        ]}
        ctaLabel="Download cTrader"
        image={assets.kitefx25}
        onCtaClick={() => console.log("Download clicked")}
      />
      <PlatformStepsSection
        backgroundImage={assets.kitefx14}
        title="How to open an cTrader account with IC Markets Global."
        description="Before you can start trading, you will need to open a Standard or Raw Spread cTrader account. Upon successful account registration, you will find your cTrader account details listed in your Personal Area."
        steps={[
          { step: "Step 01", text: "Open an account with IC Markets Global" },
          {
            step: "Step 02",
            text: "Download the exe file from the Trading tools section",
          },
          { step: "Step 03", text: "Run the trading terminal on your Device" },
          {
            step: "Step 04",
            text: "Select ‘Login to Trade Account’ in File menu",
          },
          {
            step: "Step 05",
            text: "Enter your credentials and the server of your MetaTrader 4",
          },
          {
            step: "Step 06",
            text: "You will hear a chime confirming your login",
          },
        ]}
        ctaText="Start Trading"
        onCtaClick={() => console.log("Start Trading")}
      />
    </div>
  );
};

export default CTraderAndroid;
