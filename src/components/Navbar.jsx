"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets, navItems } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { Menu, X, Plus, Minus, ChevronDown } from "lucide-react";
// import { kitefx26 } from "../assets/assets";

/* ---------------- Dropdown Animation ---------------- */
const dropdownVariants = {
  hidden: { opacity: 0, y: -20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.96,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});
  const [activeDesktopIndex, setActiveDesktopIndex] = useState(null);
  const [flipUp, setFlipUp] = useState(false);

  const activeItem =
    activeDesktopIndex !== null ? navItems[activeDesktopIndex] : null;

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

  /* ---------------- Mobile Scroll Lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  /* ---------------- Desktop Hover ---------------- */
  const openDesktopDropdown = (index, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setFlipUp(window.innerHeight - rect.bottom < 420);
    setActiveDesktopIndex(index);
  };

  const closeDesktopDropdown = () => setActiveDesktopIndex(null);

  /* ---------------- Mobile Expand ---------------- */
  const toggleExpandedItem = (index) => {
    setExpandedItems((p) => ({ ...p, [index]: !p[index] }));
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.35 }}
        className="
          fixed top-0 left-0 w-full z-50
          bg-black
          border-b border-white/10
          shadow-lg
        "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/">
            <img src={assets.kitefx26} className="h-15 w-15" alt="logo" />
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={(e) =>
                  item.dropdown && openDesktopDropdown(idx, e)
                }
                onMouseLeave={closeDesktopDropdown}
              >
                <span className="flex items-center gap-1 text-white font-medium cursor-pointer hover:text-gray-300 transition">
                  {item.label}
                  {item.dropdown && <ChevronDown size={16} />}
                </span>

                {/* ================= MEGA DROPDOWN ================= */}
                <AnimatePresence>
                  {item.dropdown && activeDesktopIndex === idx && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={`
                        fixed left-1/2 -translate-x-1/2 z-40
                        bg-white
                        rounded-3xl
                        px-10 py-12
                        w-[calc(100vw-2rem)]
                        max-w-7xl
                        border border-gray-200
                        shadow-[0_30px_70px_rgba(0,0,0,0.25)]
                        ${flipUp ? "bottom-24" : "top-20"}
                      `}
                    >
                      <div className="flex gap-12">
                        {/* ================= PROMO ================= */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4 }}
                          className="w-1/3 space-y-5"
                        >
                          <h3 className="text-2xl font-bold text-gray-900">
                            {activeItem?.promo?.title}
                          </h3>

                          <div className="flex gap-3">
                            <button className="
                              bg-[#00bafa] text-white px-6 py-3 rounded-full
                              shadow-md hover:shadow-lg
                              transition-all duration-300
                            ">
                              {activeItem?.promo?.ctaPrimary}
                            </button>

                            <button className="
                              bg-white border px-6 py-3 rounded-full
                              hover:bg-gray-100 transition
                            ">
                              {activeItem?.promo?.ctaSecondary}
                            </button>
                          </div>
                        </motion.div>

                        {/* ================= LINKS ================= */}
                        <div className="grid grid-cols-3 gap-10 w-full">
                          {item.dropdown.map((section, sIdx) => (
                            <div key={sIdx}>
                              <h4 className="
                                font-bold mb-4 uppercase text-xs tracking-widest
                                text-gray-500
                              ">
                                {section.title}
                              </h4>

                              <ul className="space-y-3">
                                {section.links.map((link, lIdx) => (
                                  <motion.li
                                    key={lIdx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: lIdx * 0.05 }}
                                    className="group"
                                  >
                                    <NavLink
                                      to={link.href}
                                      onClick={closeDesktopDropdown}
                                      className="
                                        flex items-center gap-2
                                        text-sm font-medium text-gray-800
                                        relative transition-all duration-300
                                        hover:text-black
                                      "
                                    >
                                      <span className="
                                        opacity-0 -translate-x-2
                                        group-hover:opacity-100 group-hover:translate-x-0
                                        transition-all duration-300
                                      ">
                                        →
                                      </span>

                                      {link.label}

                                      <span className="
                                        absolute left-0 -bottom-1 h-[2px] w-0
                                        bg-[#00bafa]
                                        group-hover:w-full
                                        transition-all duration-300
                                      " />
                                    </NavLink>
                                  </motion.li>
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

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden lg:flex gap-4">
            <button className="bg-green-600 px-6 py-3 font-bold rounded-md hover:scale-105 transition">
              Start Trading
            </button>
            <button className="border border-green-600 text-white px-6 py-3 rounded-md hover:bg-white/10 transition">
              Client Login
            </button>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="text-white" />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-white overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <img src={assets.ellitefxLogoDark} className="h-7" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X />
              </button>
            </div>

            <div className="p-4 space-y-5">
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <button
                    className="w-full flex justify-between text-lg font-semibold"
                    onClick={() => toggleExpandedItem(idx)}
                  >
                    {item.label}
                    {item.dropdown &&
                      (expandedItems[idx] ? <Minus /> : <Plus />)}
                  </button>

                  <AnimatePresence>
                    {expandedItems[idx] && item.dropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-3 space-y-4"
                      >
                        {item.dropdown.map((section, sIdx) => (
                          <div key={sIdx}>
                            <p className="font-bold text-sm mb-2">
                              {section.title}
                            </p>
                            {section.links.map((link, lIdx) => (
                              <NavLink
                                key={lIdx}
                                to={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1"
                              >
                                {link.label}
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="pt-6 space-y-3">
                <button className="w-full bg-green-600 py-3 rounded-md font-bold">
                  Start Trading
                </button>
                <button className="w-full border py-3 rounded-md">
                  Client Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
