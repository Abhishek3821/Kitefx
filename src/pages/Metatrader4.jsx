import React from "react";
import MetaTraderInfo from "../components/MetaTraderInfo";
import WhyPlatformSection from "../components/WhyPlatformSection";
import AdvancedTrading from "../components/AdvancedTrading";
import MetaTraderTabs from "../components/MetatraderTabs";
import { assets } from "../assets/assets";
import WhyPlatformDifferent from "../components/WhyPlatformDifferent";
import TwoColumnInfo from "../components/TwoColumnInfo";
import AboutPlatformSection from "../components/AboutPlatformSection";
import PlatformStepsSection from "../components/PlatformStepsSection";

const Metatrader4 = () => {
  return (
    <div className="mt-24">
      <MetaTraderTabs />
      <MetaTraderInfo
        title="Trade on the award-winning IC Markets Global MetaTrader 4 platform"
        paragraphs={[
          "IC Markets Global offers its clients the opportunity to trade on the award-winning MetaTrader 4 platform. It is undoubtedly the world’s most popular trading platform for forex traders due to its ease of use, feature rich environment and automated trading ability.",
          "It has grown from a trading platform to a global community where trader’s demands are met by technology provider’s innovations. IC Markets Global has partnerships with many of these technology providers and is proud to offer you the next generation MetaTrader 4 platform, designed to take your trading to the next level.",
          "Both IC Markets Global Standard and Raw Spread accounts are available on the MetaTrader 4 trading platform.",
        ]}
        ctaText="Open Account"
        systemRequirements="The MetaTrader 4 Client Terminal requires Windows 7 or higher. It is also possible to run this software on a Mac OSX."
        onCtaClick={() => console.log("Open Account Clicked")}
      />
      <WhyPlatformSection
        backgroundImage={assets.kitefx11}
        platformImage={assets.kitefx10}
        title="Why trade on MetaTrader 4 with IC Markets Global?"
        subtitle="Award-winning platform available on web browser, desktop and mobile"
        featuresLeft={[
          "Market leading spreads and low commissions",
          "Leverage up to 1:1000",
          "Minimum lot size of 0.01",
        ]}
        featuresRight={[
          "Flexible funding and withdrawal options",
          "No trading restrictions",
          "Lightning-fast order execution",
        ]}
      />
      <WhyPlatformDifferent
        title="Why is IC Markets Global MetaTrader 4 Platform Different?"
        sections={[
          {
            heading: "Raw Pricing",
            paragraphs: [
              "IC Markets Global is able to offer market best possible pricing and some of the best trading conditions through the MetaTrader 4 platform by providing clients with Raw Pricing. Our Raw Pricing allows you to trade on institutional grade level, using pricing almost equal to the world’s leading execution venues. Executable Streaming Prices (ESP) are sent from our pricing provider so that clients can trade with no dealing desk, price manipulation or requotes.",
              "Due to the diverse mix comprising of up to 25 different pricing providers at any one time, IC Markets Global is the forex CFD provider of choice for high volume traders, scalpers and robots who demand the tight spreads and best execution.",
            ],
          },
          {
            heading: "Fast Order Execution",
            paragraphs: [
              "The IC Markets Global MetaTrader 4 server is located in the Equinix NY4 data centre in New York. The NY4 data centre referred to as a financial ecosystem is home to over 600 buy and sell side firms, exchanges, trading venues, market data and service providers.",
              "The IC Markets Global MetaTrader 4 server has latency on average of less than 1 millisecond to major VPS providers either collocated in the NY4 data centre or through dedicated lines to nearby data centres. This low latency is ideal for automated and High Frequency Trading and scalping.",
            ],
          },
          {
            heading: "No Restrictions on Trading",
            paragraphs: [
              "IC Markets Global MetaTrader 4 and 5 platforms have no restrictions on trading. We have some of the best trading conditions for scalping and high frequency trading globally, allowing traders to place orders between the spread as there is no minimum order distance and a freeze level of 0.",
              "Traders can also hedge positions as there is no first in first out (FIFO) rule with IC Markets Global. Please note that different hedge margin level and settings may be applied to different products and platforms.",
            ],
          },
          {
            heading: "Spreads from 0.0 Pips",
            paragraphs: [
              "IC Markets Global boasts some of the tightest spreads of all forex CFD providers globally. Spreads start from 0.0 pips on the MetaTrader 4 platform with the average on EURUSD being 0.1 pips 24/5.",
              "Our diverse pricing mix from up to 25 different pricing providers means that we are always able to keep our spreads tight, especially during high volatility times such as news announcements.",
            ],
          },
        ]}
      />
      <TwoColumnInfo
        backgroundColor="#F3F3F3"
        leftTitle="Flexible Funding and Withdrawal Options"
        leftText="Once you have opened your account you can fund using any of our funding options including: credit/debit card, Skrill, wire transfer, Neteller, FasaPay, China Union Pay, Bpay and broker to broker transfer, deposits."
        rightTitle="Flexible Lot Sizing"
        rightText="There are no limits or restrictions on trade sizes, you can place trades as small as one micro lot (0.01). Our flexible lot sizing allows you to trial the platform with minimal risk and manage your trade sizes in accordance with your account balance."
      />
      <AboutPlatformSection
        badgeText="MetaTrader 4"
        title="About MetaTrader 4"
        description="MetaTrader 4 has grown from a trading platform to a global community where trader’s demands are met by technology provider’s innovations."
        features={[
          "Mobility",
          "Analytics",
          "Algorithmic trading",
          "Multiple order types and execution modes",
        ]}
        ctaText="Download MetaTrader 4"
        onCtaClick={() => console.log("Download MT4")}
        image={assets.kitefx12}
        imageAlt="MetaTrader 4 Platform"
      />
      <AdvancedTrading />
      <PlatformStepsSection
        backgroundImage={assets.kitefx14}
        title="How to open an MetaTrader 4 account with IC Markets Global?"
        description="Before you can start trading, you will need to open a Standard or Raw Spread MT4 account. Upon successful account registration, you will find your MetaTrader 4 account details listed in your Personal Area."
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

export default Metatrader4;
