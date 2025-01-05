"use client"
import React from "react";
import { ModeToggle } from "../theme-provider";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-[9999999]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold text-foreground flex items-center gap-2">
          Nolhan BILYJ
        </div>

        {/* Menu principal */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-foreground">
          <li className="hover:text-primary cursor-pointer">Accueil</li>
          <li className="hover:text-primary cursor-pointer">Qui suis-je ?</li>
          <li className="hover:text-primary cursor-pointer">Mes compétences</li>
          <li className="hover:text-primary cursor-pointer">Ma chronologie</li>
          <li className="hover:text-primary cursor-pointer">Me contacter</li>
        </ul>

        <div className="flex items-center z-[999999999999] space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="z-10 md:hidden"> <Menu className="h-[1.2rem] w-[1.2rem]" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 z-[9999]">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Accueil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Qui suis-je ?
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Mes compétences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Ma chronologie
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Me contacter
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;