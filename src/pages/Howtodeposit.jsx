import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import CurrencyPills from "../components/YourAccount/CurrencyPills";
import FundingOptions from "../components/YourAccount/FundingOptions";

export default function YourAccount() {
  return (
    <div>
      <Banner
        title="Account Funding"
        description="IC Markets Global offers over 15 flexible funding options in 10 different base currencies. Deposit instantly and for free using a range of methods."
        buttonText="Fund your Account"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <CurrencyPills />
      <FundingOptions />
    </div>
  );
}
