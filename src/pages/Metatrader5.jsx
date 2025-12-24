import React from "react";
import MetaTraderInfo from "../components/MetaTraderInfo";
import WhyPlatformSection from "../components/WhyPlatformSection";
import { assets } from "../assets/assets";
import WhyPlatformDifferent from "../components/WhyPlatformDifferent";
import AboutPlatformSection from "../components/AboutPlatformSection";
import TwoColumnInfo from "../components/TwoColumnInfo";
import PlatformStepsSection from "../components/PlatformStepsSection";
import Banner from "../components/Banner";
import Tabs from "../components/Tabs";

const Metatrader5 = () => {
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
        title="MetaTrader 5 Platform"
        description="MetaTrader 5 is the all-in-one platform for trading forex, stocks, indices, bonds, cryptocurrencies and CFDs on Commodities."
        buttonText="Download MetaTrader 5"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <Tabs tabs={tabs} />
      <MetaTraderInfo
        title="Experience the next Generation of MetaTrader 5 with IC Markets Global"
        paragraphs={[
          "The new platform is an updated and improved version of its predecessor which has long been the industry standard for traders around the world. IC Markets Global is proud to present the next generation MetaTrader 5 platform, designed to offer everything you need to trade the markets.",
          "MetaTrader 5’s advanced charting technology coupled with sophisticated order management tools help you to monitor and control your positions quickly and efficiently. It is a powerful platform packed with brand new features aimed at improving your trading experience. It is available on both of the IC Markets Global account types: Raw Pricing and Standard.",
        ]}
        ctaText="Open Account"
        systemRequirements="The MetaTrader 5 Client Terminal requires Windows operating system 7 or higher. It is also possible to run this software on a Mac OSX."
        onCtaClick={() => console.log("Open Account Clicked")}
      />
      <WhyPlatformSection
        backgroundImage={assets.kitefx11}
        platformImage={assets.kitefx15}
        title="Why is IC Markets Global MetaTrader 5 Platform Different?"
        subtitle=""
        featuresLeft={[
          "Raw pricing",
          "Spreads from 0.0 pips",
          "Up to 1:1000 leverage",
        ]}
        featuresRight={[
          "Low latency trading",
          "Deep interbank liquidity",
          "Multi-asset platform",
        ]}
      />
      <WhyPlatformDifferent
        title=""
        sections={[
          {
            heading: "Raw Pricing Connectivity",
            paragraphs: [
              "Raw Pricing allows IC Markets Global to offer tight spreads and trading conditions on the MetaTrader 5 trading platform.",
              "Gain access to institutional grade prices on almost the same level of the world’s leading execution venues through our Raw Pricing. Traders can enjoy trading with no dealing desk, price requotes or any sort of manipulation on our market leading platforms. Our extensive mix of up to 25 different pricing providers makes IC Markets Global the top choice for high volume traders, scalpers and automated traders who demand some of the best trading conditions including the low spreads and fastexecution speeds.",
            ],
          },
          {
            heading: "Fast Order Execution",
            paragraphs: [
              "All IC Markets Global MetaTrader 5 servers are located in the Equinix NY4 data centre in New York for optimal execution speed. The NY4 data centre is known as one of the most secure and reliable data centres in the world. The MetaTrader 5 servers are cross connected to us and our pricing providers to ensure  low latency and fast execution.",
              "The IC Markets Global MetaTrader 5 trade servers have latency less than 1 millisecond to major VPS providers either collocated in the NY4 data centre or through dedicated lines to nearby data centres.",
            ],
          },
          {
            heading: "No Restrictions on Trading",
            paragraphs: [
              "There are no trading restrictions on the IC Markets Global MetaTrader 5 platform. We offer ideal trading conditions for scalping and high frequency trading, even allowing traders to place orders between the spread as there is no minimum order distance and a freeze level of 0. This means orders including stop loss orders can be placed at any level.",
              "Traders can also hedge positions as there is no first in first out (FIFO) rule with IC Markets Global. Please note that different hedge margin level and settings may be applied to different products and platforms.",
            ],
          },
          {
            heading: "Level II Pricing – Market Depth",
            paragraphs: [
              "The MetaTrader 5 Depth of Market displays the full range of available prices directly from our prices providers. This feature provides full transparency of available liquidity for each currency at any given time. High liquidity, asynchronous spot prices and low latency guarantee the tightest possible spreads.",
            ],
          },
          {
            heading: "Spreads from 0.0 Pips",
            paragraphs: [
              "IC Markets Global offers some of the tightest spreads out of all forex brokers around the world with our EURUSD spread averaging just 0.1 pips. This is currently one of the tightest average EURUSD spread globally. IC Markets Global is always able to keep spreads tight by sourcing prices from our diverse mix of up to 25 different sources of prices.",
            ],
          },
        ]}
      />
      <TwoColumnInfo
        backgroundColor="#F3F3F3"
        leftTitle="Flexible Funding and Withdrawal Options"
        leftText="We have made funding and withdrawing funds easy by offering a wide range of funding options including: credit/debit card, Skrill, wire transfer, Neteller, FasaPay, China Union Pay, Bpay and broker to broker transfer, deposits."
        rightTitle="Flexible Lot Sizing"
        rightText="Our platforms offer you flexible lot sizing so you can manage your risk appropriately. We don’t place any restrictions on trade sizes and even allow trades as small as one micro lot (0.01) to be traded."
      />
      <AboutPlatformSection
        badgeText="MetaTrader 5"
        title="About MetaTrader 5"
        description={
          <>
            <p>
              The new platform is an updated and improved version of its
              predecessor which has long been the industry standard for traders
              around the world. Its advanced charting technology, together with
              sophisticated order management tools allow to monitor and control
              your positions efficiently.
            </p>
            <p>
              It is a powerful platform packed with brand new features aimed at
              improving your trading experience. It is available on IC Markets
              Global Raw Pricing and Standard account types.
            </p>
          </>
        }
        features={[
          "Mobility",
          "Analytics - DOM",
          "MQL5",
          "Advanced Order types & execution",
          "Improved Strategy Tester for EAs",
        ]}
        ctaText="Download MetaTrader 5"
        onCtaClick={() => console.log("Download MT5")}
        image={assets.kitefx16}
        imageAlt="MetaTrader 5 Platform"
      />
      <PlatformStepsSection
        backgroundImage={assets.kitefx14}
        title="How to open an MetaTrader 5 account with IC Markets Global."
        description="Before you can start trading, first open a Standard or Raw Spread MT5 account with IC Markets Global. Upon successful account registration, you will be able to find your MetaTrader 5 account details listed in your Secured Client Area."
        ctaText="Start Trading"
        onCtaClick={() => console.log("Start Trading")}
      />
    </div>
  );
};

export default Metatrader5;
