import React from "react";
import { NavLink } from "react-router-dom";

const Tabs = ({
  tabs = [],
  containerClass = "",
  activeColorClass = "text-green-500",
  inactiveColorClass = "text-gray-400",
  underlineColorClass = "bg-green-500",
}) => {
  return (
    <div
      className={`w-full bg-black border-b border-gray-800 ${containerClass}`}
    >
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
                    ? `${activeColorClass} after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:${underlineColorClass}`
                    : `${inactiveColorClass} hover:text-white`
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

export default Tabs;
