"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets, navItems } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Menu, X, Plus, Minus, ChevronDown } from "lucide-react";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.96,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.96,
    filter: "blur(4px)",
    transition: { duration: 0.25 },
  },
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(null);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const [flipUp, setFlipUp] = useState(false);

  const dropdownRef = useRef(null);

  /* ---------------- Scroll Hide / Show ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setShowNavbar(!(current > lastScrollY && current > 80));
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------------- Outside Click ---------------- */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDesktopIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ---------------- Mobile Scroll Lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [mobileMenuOpen]);

  const toggleExpandedItem = (index) => {
    setExpandedItems((p) => ({ ...p, [index]: !p[index] }));
  };

  /* ---------------- Smart Dropdown Position ---------------- */
  const toggleDesktopDropdown = (index, event) => {
    if (activeDesktopIndex === index) {
      setActiveDesktopIndex(null);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const width = Math.min(window.innerWidth * 0.95, 1152);
    const padding = 16;
    const height = 420;

    let left = rect.left + rect.width / 2 - width / 2;
    if (left < padding) left = padding;
    if (left + width > window.innerWidth - padding) {
      left = window.innerWidth - width - padding;
    }

    setFlipUp(window.innerHeight - rect.bottom < height);

    setDropdownStyle({ left, width });
    setActiveDesktopIndex(index);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 bg-black px-4 sm:px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          <NavLink to="/">
            <img src={assets.ellitefxLogoDark} className="h-7" alt="logo" />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={(e) => toggleDesktopDropdown(idx, e)}
                  className="flex items-center gap-1 text-white font-medium hover:text-gray-300 transition"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} />}
                </button>

                {/* ================= DROPDOWN ================= */}
                <AnimatePresence>
                  {item.dropdown && activeDesktopIndex === idx && (
                    <motion.div
                      ref={dropdownRef}
                      style={dropdownStyle}
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`
                        absolute z-40
                        bg-gray-100 shadow-2xl rounded-2xl
                        p-6 lg:p-8
                        ${flipUp ? "bottom-[72px]" : "top-[72px]"}
                      `}
                    >
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Promo */}
                        <div className="w-full lg:w-1/3">
                          <h3 className="text-xl lg:text-2xl font-bold mb-4">
                            Trade with an award-winning broker
                          </h3>
                          <div className="flex gap-3 flex-wrap">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="bg-[#00bafa] text-white px-4 py-2 rounded-full"
                            >
                              START TRADING
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              className="bg-white border px-4 py-2 rounded-full"
                            >
                              TRY DEMO
                            </motion.button>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                          {item.dropdown.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h4 className="font-bold mb-3 text-sm uppercase">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.links.map((link, lIdx) => (
                                  <li key={lIdx}>
                                    <NavLink
                                      to={link.href}
                                      onClick={() =>
                                        setActiveDesktopIndex(null)
                                      }
                                      className="text-sm font-medium hover:text-gray-600 transition"
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex gap-4">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-green-600 px-6 py-3 text-black font-bold rounded-md cursor-pointer"
            >
              Start Trading
            </motion.span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-green-600 text-white px-6 py-3 rounded-md font-bold"
            >
              Client Login
            </motion.button>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 z-40 bg-white"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <img src={assets.ellitefxLogoDark} className="h-8" alt="logo" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="p-4 space-y-2">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b">
                <button
                  className="w-full flex justify-between py-4 text-lg font-semibold"
                  onClick={() => toggleExpandedItem(idx)}
                >
                  {item.label}
                  {item.dropdown &&
                    (expandedItems[idx] ? <Minus /> : <Plus />)}
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
