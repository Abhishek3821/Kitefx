import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import IslamicAccountSection from "../components/TrandingAcc/IslamicAccountSection";
import OvernightFinancingCharges from "../components/TrandingAcc/OvernightFinancingCharges";
import SwapFreeChargesTable from "./SwapFreeChargesTable";

export default function Islamic() {
  return (
    <div>
      <Banner
        title="Islamic Accounts"
        description="Islamic accounts provide a solution for clients seeking to manage their finances in accordance with religious prohibitions on interest."
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <IslamicAccountSection />
      <OvernightFinancingCharges />
      <SwapFreeChargesTable />
    </div>
  );
}
