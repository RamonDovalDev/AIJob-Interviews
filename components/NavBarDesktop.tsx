import { links } from "@/constants";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBarDesktop = () => {
  return (
    <div className="hidden md:flex items-center gap-4 text-lg">
      {links.map((link) => (
        <Button key={link.name} asChild variant="ghost" className="text-white">
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavBarDesktop;
