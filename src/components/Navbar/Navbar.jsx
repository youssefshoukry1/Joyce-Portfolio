import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItem = [
    { name: "Home", id: "Home-section" },
    { name: "About", id: "About-section" },
    { name: "Services", id: "Services-section" },
    { name: "Contact", id: "Contact-section" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // 🔥 السكروول لحد السيكشن
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 هنا بنسمع للسكرول عشان نخفي/نظهر النافبار
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // نازل لتحت → اخفي
        setShow(false);
      } else {
        // طالع لفوق → اظهر
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <Motion.nav
        className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-500 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">
          <Motion.ul
            className="flex gap-8 md:gap-12 tracking-wide bg-transparent"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItem.map(({ name, id }) => (
              <Motion.li
                key={id}
                variants={itemVariants}
                className="relative group text-gray-100 text-sm md:text-lg font-medium cursor-pointer 
              hover:text-blue-400 transition-colors duration-300"
                onClick={() => handleScroll(id)}
              >
                <button>
                  {name}
                </button>
                
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Motion.li>
            ))}
          </Motion.ul>
        </div>
      </Motion.nav>
    </>
  );
}
