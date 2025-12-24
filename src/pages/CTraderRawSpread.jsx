import { motion } from "framer-motion";
import CTraderRawSpreadSection from "../components/TrandingAcc/CTraderRawSpreadSection.jsx";
import CTraderExecutionFeatures from "../components/TrandingAcc/CTraderExecutionFeatures.jsx";
import Banner from "../components/Banner.jsx";
import { assets } from "../assets/assets.js";

export default function CTrader() {
  return (
    <div>
      <Banner
        title="cTrader Raw Spread Account"
        description="cTrader was built for demanding performances and, when combined with IC Markets Global Raw pricing and unrivalled execution speeds, cTrader makes a valuable addition to your trading arsenal and will help take your trading to the next level."
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <CTraderRawSpreadSection />
      <CTraderExecutionFeatures />
    </div>
  );
}
