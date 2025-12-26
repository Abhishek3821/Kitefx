import StockCFDHero from "../components/StockCFDHero";
import ICInsightsSection from "../components/ICInsightsSection";
import PoweredByTipRanks from "../components/PoweredByTipRanks";
import AccessICInsights from "../components/AccessICInsights";
import ICInsightsFAQ from "../components/ICInsightsFAQ";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

export default function ICInsights() {
  return (
    <div>
      <Banner
        title="Level Up Your Investment Strategies"
        description="KiteFX Insights is a comprehensive investment research and analysis platform designed to empower you to make data-powered decisions."
        buttonText="Open an Account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <ICInsightsSection />
      <PoweredByTipRanks />
      <AccessICInsights />
      <ICInsightsFAQ />
    </div>
  );
}
