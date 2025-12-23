import ExecutionAndPricingDetails from "../components/TrandingAcc/ExecutionAndPricingDetails";
import RawPricingSection from "../components/TrandingAcc/RawPricingSection";
import RawSpreadFeature from "../components/TrandingAcc/RawSpreadFeature";




export default function YourAccount() {
  return (
    <div>
      <RawSpreadFeature/>
      <RawPricingSection/>
      <ExecutionAndPricingDetails/>
    </div>
  );
}