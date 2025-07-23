import logo from "../assets/GAMOTPH-LOGO-LIGHT-THEME.png";
import nulogo from "../assets/NUlogo.png";
import { TiThMenu } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ theme = "light" }) => {
  const [nav, setNav] = useState(false);
  const [top, setTop] = useState(true);
  const isDarkBg = !top || (theme || "").toLowerCase() === "dark";

  const handleNav = () => {
    setNav(!nav);
    document.body.style.overflow = !nav ? "hidden" : "scroll";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollHandler = () => {
      setTop(document.documentElement.scrollTop <= 20);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Articles", path: "/Articles" },
    { name: "People", path: "/People" },
    { name: "Contact Us", path: "/ContactUs" },
  ];

  return (
    <div
      className={`fixed top-0 z-50 w-full flex justify-between py-1 px-4 items-center transition-all duration-300 ${
        !top
          ? "bg-n-4 dark:bg-n-5 bg-opacity-75 dark:bg-opacity-50 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logos */}
      <div className="flex items-center gap-1">
        <Link onClick={scrollToTop} to="https://national-u.edu.ph/">
          <img
            className="cursor-pointer size-[4rem] md:size-[5rem] z-20 m-3"
            src={nulogo}
            alt="NU"
          />
        </Link>
        <Link onClick={scrollToTop} to="/">
          <img
            className="cursor-pointer h-[2rem] md:h-[3rem] w-auto z-20"
            src={logo}
            alt="GAMOTPH"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 items-center text-lg font-semibold">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link
              to={path}
              onClick={scrollToTop}
              className={`transition-colors duration-300 ${
                isDarkBg ? "text-white hover:text-gray-300" : "text-black hover:text-gray-600"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <TiThMenu
        onClick={handleNav}
        className={`z-30 md:hidden cursor-pointer transition-colors duration-500 ${
          isDarkBg ? "text-white" : "text-black"
        }`}
        size={25}
      />

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-n-5/75 px-4 py-7 flex flex-col z-40 transform transition-transform duration-300 text-white ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul
          className="flex flex-col w-full h-full items-center justify-center"
          onClick={handleNav}
        >
          {links.map(({ name, path }) => (
            <Link key={name} onClick={scrollToTop} to={path}>
              <li className="font-bold text-1xl p-4 cursor-pointer">{name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
