import React from "react";
import CareersIntro from "../components/CareersIntro";
import CareersOpenings from "../components/CareersOpenings";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Careers = () => {
  return (
    <div>
      {" "}
      <Banner
        title="Careers"
        description="At KiteFX Global we are always looking for the best talent to further our global growth and expansion."
        backgroundImage={assets.kitefx20}
      />
      <CareersIntro />
      <CareersOpenings />
    </div>
  );
};

export default Careers;
