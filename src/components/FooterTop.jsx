import React from "react";
import { navItems } from "../assets/assets";
import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterTop = () => {
  return (
    <div className="w-full bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* ================= BRAND COLUMN ================= */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-white">
            ICMarkets <span className="text-green-500">Global</span>
          </h2>

          <p className="text-sm leading-relaxed max-w-md">
            IC Markets Global mission is to create the best trading experience
            for retail and institutional clients alike, allowing traders to
            focus more on their trading. Built by traders for traders IC Markets
            Global is dedicated to offering superior spreads, execution and
            service.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {[Twitter, Instagram, Facebook].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition cursor-pointer"
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= NAV COLUMNS ================= */}
        {navItems.map((nav) =>
          nav.dropdown.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>

              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li
                    key={link.label}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FooterTop;
