"use client";

import { useEffect, useState } from "react";
import { assets, navItems } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Menu, X, Plus, Minus, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      // Set "scrolled" state if scrolled down from top
      setScrolled(currentScrollY > 20);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const shouldBeDark = scrolled || isHovered;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setExpandedItems({}); // Reset expanded items when closing menu
  };

  const toggleExpandedItem = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          shouldBeDark ? "bg-black" : "bg-transparent"
        } font-medium text-sm tracking-widest px-4 sm:px-6 py-3 sm:py-4`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <NavLink className="z-[100] relative" to="/">
            <img
              src={shouldBeDark ? assets.ellitefxLogoDark : assets.ellitefxLogo}
              className="h-6 sm:h-8 z-[100] relative"
              alt="logo"
            />
          </NavLink>

          {/* Desktop Navigation items */}
          <div
            className="hidden lg:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="flex text-md z-60 relative">
              {navItems.map((item, idx) => (
                <li key={idx} className="group relative">
                  <span
                    className={`cursor-pointer px-4 py-1 rounded-full ${
                      shouldBeDark ? "text-black" : "text-white"
                    } hover:ring hover:ring-black z-50 relative`}
                  >
                    {item.label}
                  </span>

                  {item.dropdown && (
                    <div className="fixed top-0 left-0 right-0 pt-[100px] hidden group-hover:flex justify-start gap-2 pb-10 px-5 text-sm font-light z-30">
                      {/* Background that excludes logo */}
                      <div className="absolute inset-0 bg-gray-300 -z-10"></div>
                      <div className="absolute top-0 left-6 w-32 h-full bg-transparent z-50"></div>

                      <div className="pl-20 pr-10">
                        <h2 className="text-4xl pb-10 font-semibold">
                          Trade with an award-
                          <br />
                          winning broker
                        </h2>
                        <div className="font-semibold">
                          <button className="px-5 py-3 mx-2 bg-[#00bafa] text-white rounded-full hover:bg-black hover:text-white transition-colors">
                            START TRADING
                          </button>
                          <button className="px-5 py-3 mx-2 bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors">
                            TRY DEMO
                          </button>
                        </div>
                      </div>

                      {item.dropdown.map((section, secIdx) => (
                        <div key={secIdx}>
                          <h4 className="text-md mb-4 font-bold mx-5">
                            {section.title}
                          </h4>
                          <ul className="space-y-2 mx-5">
                            {section.links.map((link, linkIdx) => (
                              <li key={linkIdx}>
                                <NavLink
                                  to={link.href}
                                  className="text-sm font-semibold hover:text-gray-600"
                                >
                                  {link.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right-side buttons */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-4 z-60 relative">
            <span
              className={`bg-green-600  px-3 lg:px-6 py-3 lg:py-3 text-sm lg:text-md rounded-md cursor-pointer tracking-wider text-black font-bold`}
            >
              Start Trading
            </span>
            <button className="bg-transparent hover:bg-green-600 hover:text-black font-bold border border-green-600 text-white tracking-wider cursor-pointer text-xs lg:text-md px-3 lg:px-6 py-3 lg:py-3 rounded-md transition-colors">
              Client Login
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden z-[100] relative p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X
                size={24}
                className={shouldBeDark ? "text-black" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={shouldBeDark ? "text-black" : "text-white"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <img
              src={assets.ellitefxLogoDark || "/placeholder.svg"}
              className="h-8"
              alt="logo"
            />
            <button
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Close mobile menu"
            >
              <X size={24} className="text-black" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {/* Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item, idx) => (
                  <div key={idx} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleExpandedItem(idx)}
                      className="w-full flex justify-between items-center py-4 text-left"
                    >
                      <span className="text-lg font-semibold text-black">
                        {item.label}
                      </span>
                      {item.dropdown && (
                        <div className="text-black">
                          {expandedItems[idx] ? (
                            <Minus size={20} />
                          ) : (
                            <Plus size={20} />
                          )}
                        </div>
                      )}
                    </button>

                    {/* Expandable Content */}
                    {item.dropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedItems[idx]
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pb-4 pl-4 space-y-4">
                          {item.dropdown.map((section, secIdx) => (
                            <div key={secIdx}>
                              <h4 className="text-sm font-bold text-gray-600 mb-2 uppercase tracking-wide">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.links.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <NavLink
                                      to={link.href}
                                      className="text-blue-600 hover:text-blue-800 text-sm font-medium block py-1"
                                      onClick={toggleMobileMenu}
                                    >
                                      {link.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-200 space-y-4">
              {/* Additional Options */}
              <div className="flex justify-center gap-6 pt-2 text-sm">
                <span className="text-black cursor-pointer font-semibold">
                  LOGIN
                </span>
                <button className="bg-[#00bafa] text-white hover:bg-black font-semibold px-4 py-1 rounded-full transition-colors text-sm">
                  OPEN LIVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
