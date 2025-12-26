import React from "react";
import FooterTop from "./FooterTop";
import InstantAccountCTA from "./InstantAccountCTA";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400">
      <InstantAccountCTA />
      <FooterTop />
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* TOP DIVIDER */}
        <div className="border-t border-gray-800 mb-10" />

        {/* CONTENT */}
        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            KiteFX Global is the trading name of Raw Trading Ltd, which is
            regulated by the Seychelles Financial Services Authority (FSA) with
            Securities Dealer&apos;s license number SD018.
          </p>

          <p>
            <span className="font-semibold text-gray-300">Risk Warning:</span>{" "}
            Trading Forex and CFDs carries a high level of risk to your capital
            and you should only trade with money you can afford to lose. Trading
            Forex and CFDs may not be suitable for all investors, so please
            ensure that you fully understand the risks involved and seek
            independent advice if necessary. Please read and ensure you fully
            understand our{" "}
            <a href="#" className="text-green-400 hover:underline">
              Risk Disclosure
            </a>
            .
          </p>

          <p>
            <span className="font-semibold text-gray-300">
              Restricted Countries:
            </span>{" "}
            Raw Trading Ltd does not provide services for residents of certain
            countries such as the United States of America, Canada, Israel, New
            Zealand, Iran and North Korea (Democratic People&apos;s Republic of
            Korea) or a country where such distribution or use would be contrary
            to local law or regulation.
          </p>

          <p>
            You must be 18 years old, or of legal age as determined in your
            country. Upon registering an account with Raw Trading Ltd, you
            acknowledge that you are registering at your own free will,{" "}
            <span className="underline">
              without solicitation on behalf of Raw Trading Ltd
            </span>
            .
          </p>

          <p>
            Raw Trading Ltd does not direct its website and services to any
            individual in any country in which the use of its website and
            services are prohibited by local laws or regulations. When accessing
            this website from a country in which its use may or may not be
            prohibited, it is the user&apos;s responsibility to ensure that any
            use of the website or services adheres to local laws or regulations.
            Raw Trading Ltd does not affirm that the information on its website
            is suitable for all jurisdictions.
          </p>

          <a
            href="#"
            className="block text-gray-300 hover:text-white font-medium"
          >
            Legal Documents
          </a>
        </div>

        {/* BOTTOM DIVIDER */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-xs text-gray-500">
            © 2025 Raw Trading Ltd | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
