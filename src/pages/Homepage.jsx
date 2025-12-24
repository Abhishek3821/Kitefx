import React from "react";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import RawSpreadSection from "../components/RawSpreadSection";
import PricingFeatures from "../components/PricingFeatures";
import AutomatedTradingEdge from "../components/AutomatedTradingEdge";
import TradingTerminals from "../components/TradingTerminals";
import GlobalMarkets from "../components/GlobalMarkets";
import StrengthInNumbers from "../components/StrengthInNumbers";
import PaymentMethods from "../components/PaymentMethods";
import AccountStepsAndPromo from "../components/AccountStepsAndPromo";
import InstantAccountCTA from "../components/InstantAccountCTA";

const Homepage = () => {
  return (
    <div className="bg-black">
      <Hero />
      <StatsBar />
      <RawSpreadSection />
      <PricingFeatures />
      <AutomatedTradingEdge />
      <TradingTerminals />
      <GlobalMarkets />
      <StrengthInNumbers />
      <PaymentMethods />
      <AccountStepsAndPromo />
    </div>
  );
};

export default Homepage;
