import logoLight from "../assets/GAMOTPH-LOGO-LIGHT.png";
import logoDark from "../assets/GAMOTPH-LOGO-DARK.png";
import nulogo from "../assets/NUlogo-Light.png";
import nulogoDark from "../assets/NUlogo-Dark.png";
import { TiThMenu } from "react-icons/ti";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const NavBar = ({ theme = "light" }) => {
  const [nav, setNav] = useState(false);
  const [top, setTop] = useState(true);
  const isDarkBg = !top || (theme || "").toLowerCase() === "dark";
  const location = useLocation();


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
    { name: "Articles", path: "/articles" },
    { name: "Publications", path: "/publication" },
    { name: "People", path: "/People" },
    { name: "Partners", path: "/Partners" },
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
          <div className="relative w-[3.5rem] md:w-[5rem] h-[3.5rem] md:h-[5rem] flex items-center justify-center">
            {/* NU Logo Dark */}
            <img
              src={nulogoDark}
              alt="NU Dark"
              className={`absolute object-contain max-w-full max-h-full transition-opacity duration-500 ease-in-out ${
                isDarkBg ? "opacity-0" : "opacity-100 "
              }`}
            />
            {/* NU Logo Light */}
            <img
              src={nulogo}
              alt="NU Light"
              className={`absolute object-contain max-w-full max-h-full transition-opacity duration-500 ease-in-out ${
                isDarkBg ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </Link>

        <Link onClick={scrollToTop} to="/" className="relative h-[2rem] md:h-[3rem] w-auto">
          <div className="relative h-full w-[10rem] md:w-[20rem]">
            <img
              src={logoDark}
              alt="GAMOTPH Light"
              className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-500 ease-in-out ${
                isDarkBg ? "opacity-0" : "opacity-100 "
              }`}
            />
            <img
              src={logoLight}
              alt="GAMOTPH Dark"
              className={`absolute top-0 left-0 h-full w-auto transition-opacity duration-500 ease-in-out ${
                isDarkBg ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-8 items-center text-lg font-semibold">
  {links.map(({ name, path }) => {
    const isHome = path === "/";
  const isActive = isHome
    ? location.pathname === "/"
    : location.pathname.startsWith(path);

    return (
      <li key={name} className="relative group w-max">
        <Link
          to={path}
          onClick={scrollToTop}
          className={`transition-colors duration-300 ${
            isDarkBg ? "text-white" : "text-black"
          }`}
        >
          <span
            className={`inline-block transition-transform duration-200
              ${isActive ? "scale-125" : "hover:scale-125"}
            `}
          >
            {name}
          </span>

          {/* Underlines */}
          <span
            className={`absolute -bottom-1 left-1/2 transition-all h-0.5 bg-deepblue 
              ${isActive ? "w-3/6" : "w-0 group-hover:w-3/6"}
            `}
          />
          <span
            className={`absolute -bottom-1 right-1/2 transition-all h-0.5 bg-deepblue 
              ${isActive ? "w-3/6" : "w-0 group-hover:w-3/6"}
            `}
          />
        </Link>
      </li>
    );
  })}
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
