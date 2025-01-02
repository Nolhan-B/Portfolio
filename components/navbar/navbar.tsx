"use client"
import React from "react";
import { ModeToggle } from "../theme-provider";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-[999999]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold text-foreground flex items-center gap-2">
          Nolhan BILYJ
        </div>

        <ul className="flex items-center space-x-6 text-sm font-medium text-foreground">
          <li className="hover:text-primary cursor-pointer">Docs</li>
          <li className="hover:text-primary cursor-pointer">Components</li>
          <li className="hover:text-primary cursor-pointer">Blocks</li>
          <li className="hover:text-primary cursor-pointer">Charts</li>
          <li className="hover:text-primary cursor-pointer">Colors</li>
        </ul>

        <div className="flex items-center space-x-3">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;