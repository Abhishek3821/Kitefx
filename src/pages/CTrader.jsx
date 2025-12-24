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
import PlatformStepsSection from "../components/PlatformStepsSection";
import AboutPlatform from "../components/AboutPlatform";

const CTrader = () => {
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
        title="cTrader"
        description="Trade global markets with a platform designed specifically for high speed of execution. cTrader’s unique design, elegant user interface and advanced features make it a favourite for discretionary Forex traders."
        buttonText="Download cTrader"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />
      <TradingPlatformHero
        title="Trade on the most sophisticated trading technology IC Markets Global cTrader"
        description="cTrader platform combines the speed of high performing trading platform with the deep liquidity of IC Markets Global, providing clients with the ultimate trading solution. It utilises proven technology that will enable you to take your trading to the next level."
        ctaText="Open Account"
        onCtaClick={() => console.log("Open Account Clicked")}
        systemRequirements="Minimum: Dual Core CPU processor, 2gb memory, Windows 7 Operating System onward."
        mainImage={assets.kitefx23}
      />
      <WhyTradeSection
        title="Why trade on cTrader with IC Markets Global?"
        subtitle="The World’s Most Popular Platform"
        platformName=""
        platformLogo={assets.kitefx24}
        leftFeatures={[
          "Real-time forex and CFD quotes",
          "Market leading spreads and low commissions",
          "Servers in the LD5 IBX Equinix Data Center",
          "Micro lot trading – Minimum lot size of 0.01 with no maximum",
          "Flexible funding and withdrawing options",
          "Level II pricing with full market depth",
        ]}
        rightFeatures={[
          "No restrictions on limit orders",
          "Multiple order types",
          "Detachable charts",
          "Expanded symbol display",
          "Real-time reports",
          "One-click trading",
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

export default CTrader;
