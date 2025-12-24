import { assets } from "../assets/assets";
import Banner from "../components/Banner";
import WithdrawalInformation from "../components/YourAccount/WithdrawalInformation";

export default function YourAccount() {
  return (
    <div>
      <Banner
        title="Funds Withdrawal"
        description="For faster processing all account holders are now required to submit withdrawal requests from inside their Secure Client Area. If you do not yet have access to your Secure Client Area please follow the Access Instructions."
        buttonText="Withdrawal Form"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <WithdrawalInformation />
    </div>
  );
}
