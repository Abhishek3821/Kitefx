import ForexFactsSection from "../components/ForexFactsSection";
import ForexSpreadsIntro from "../components/ForexSpreadsIntro";
import HowForexTradingWorks from "../components/HowForexTradingWorks";
import ForexTradingExamples from "../components/ForexTradingExamples";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

export default function ForexCFDs() {
  return (
    <div>
      <Banner
        title="Forex CFDs "
        description="The KiteFX Global Forex offering is one of the most competitive in the world. Access the world’s largest and most liquid market with Raw spreads starting from 0.0 pips. "
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <ForexFactsSection />
      <ForexSpreadsIntro />
      <HowForexTradingWorks />
      <ForexTradingExamples />
    </div>
  );
}
