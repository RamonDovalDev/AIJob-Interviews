import React from "react";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const NavBar = () => {
  return (
    <nav className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 z-20 flex items-center justify-between px-6 py-3 bg-purple-500/30 backdrop-blur-md rounded-full shadow-lg border-purple-400/20">
      <div className="flex items-center gap-2">
        <h1 className="text-4xl leading-tight font-extrabold whitespace-pre-line text-center text-white">
          <span className="text-purple-600">AIJob</span>-Interviews
        </h1>
      </div>

      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
};

export default NavBar;
