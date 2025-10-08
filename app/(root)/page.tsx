import HeroBlock from "@/components/HeroBlock";
import NavBar from "@/components/NavBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavBar />

      <HeroBlock />
    </div>
  );
};

export default HomePage;
