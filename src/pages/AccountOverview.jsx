import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import AccountCarousel from "../components/TrandingAcc/AccountCarousel";
import AccountComparisonTable from "../components/TrandingAcc/AccountComparisonTable";

export default function YourAccount() {
  return (
    <div>
      <Banner
        title="Account Overview"
        description="KiteFX Global Raw Pricing offering and large product range are included across all account types. Suited for both new and experienced traders, simply choose your preferred trading platform and pricing model to get started."
        buttonText="Open account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <AccountCarousel />
      <AccountComparisonTable />
    </div>
  );
}
