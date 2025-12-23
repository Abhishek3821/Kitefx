import React from "react";
import { NavLink } from "react-router-dom";

const tabs = [
  { label: "MetaTrader 4", path: "/metatrader-4" },
  { label: "MetaTrader 5", path: "/metatrader-5" },
  { label: "MetaTrader WebTrader", path: "/metatrader-webtrader" },
  { label: "MetaTrader iPhone/iPad", path: "/metatrader-iphone/ipad" },
  { label: "MetaTrader Android", path: "/metatrader-android" },
];

const MetaTraderTabs = () => {
  return (
    <div className="w-full bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center gap-10 overflow-x-auto whitespace-nowrap py-4 scrollbar-hide">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `
                relative text-sm font-medium transition pb-4
                ${
                  isActive
                    ? "text-green-500 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-green-500"
                    : "text-gray-400 hover:text-white"
                }
              `
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaTraderTabs;
