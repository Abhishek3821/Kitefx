import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import VPSPromoSection from "../components/VPSPromoSection";
import ForexVPSSection from "../components/ForexVPSSection";
import ICVPSPlans from "../components/ICVPSPlans";
import VPSConnectionHero from "../components/VPSConnectionHero";
import NeedHelpSection from "../components/NeedHelpSection";

export default function VirtualPrivateServer() {
  return (
    <div>
      <Banner
        title="Virtual Private Server "
        description="Execute automated trading strategies 24 hours a day, 7 days a week with the fastest possible connectivity to the KiteFX  Global trading servers. "
        buttonText="Start Trading"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <VPSPromoSection />
      <ForexVPSSection />
      <ICVPSPlans />
      <VPSConnectionHero />
      <NeedHelpSection />
    </div>
  );
}
