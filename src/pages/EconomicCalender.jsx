import React from "react";
import ForexNewsAndSessions from "../components/ForexNewsAndSessions";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import TradingViewCalendarWidget from "../components/TradingViewCalenderWidget";

const EconomicCalender = () => {
  return (
    <div>
      <Banner
        title="Forex News and Calendar"
        description="View all upcoming global economic news events and their importance in this forex calendar."
        backgroundImage={assets.kitefx20}
      />
      {/* Widget Embed Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        <TradingViewCalendarWidget />
      </div>

      <ForexNewsAndSessions />
    </div>
  );
};

export default EconomicCalender;
