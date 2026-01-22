import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import CustomerSupport from "../components/CustomerSupport";
import SendMessage from "../components/SendMessage";
import OfficeLocations from "../components/OfficeLocations";

const ContactUs = () => {
  return (
    <div>
      <Banner
        title="We are here for you, 24/7. "
        description=""
        buttonText="Start Connecting"
        onButtonClick={() => console.log("CTA clicked")}
        backgroundImage={assets.kitefx20}
      />
      <CustomerSupport />
      <OfficeLocations />
    </div>
  );
};

export default ContactUs;
