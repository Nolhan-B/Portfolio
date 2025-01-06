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
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(window.scrollX, top, 1000); // 1000ms = 1 seconde de scroll
    }
  };
  
  // Fonction de scroll fluide personnalisée
  const smoothScrollTo = (startX: number, startY: number, duration: number) => {
    const startTime = performance.now();
  
    // Fonction d'interpolation ease-out
    const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);
  
    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
  
      // Application de l'ease-out
      const ease = easeOutSine(progress);
  
      window.scrollTo(
        startX,
        startY * ease + window.scrollY * (1 - ease)
      );
  
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };
  
    requestAnimationFrame(scrollStep);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-[9999999]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-lg font-bold text-foreground flex items-center gap-2">
          Nolhan BILYJ
        </div>

        {/* Menu principal */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-foreground">
          <li onClick={() => scrollToSection("accueil")} className="hover:text-primary cursor-pointer">
            Accueil
          </li>
          <li onClick={() => scrollToSection("qui-suis-je")} className="hover:text-primary cursor-pointer">
            Qui suis-je ?
          </li>
          <li onClick={() => scrollToSection("mes-competences")} className="hover:text-primary cursor-pointer">
            Mes compétences
          </li>
          <li onClick={() => scrollToSection("mes-projets")} className="hover:text-primary cursor-pointer">
            Mes projets
          </li>
          <li onClick={() => scrollToSection("mon-cv")} className="hover:text-primary cursor-pointer">
            Mon CV
          </li>
        </ul>

        {/* Dropdown Menu pour mobile */}
        <div className="flex items-center z-[999999999999] space-x-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="z-10 md:hidden">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 z-[9999]">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => scrollToSection("accueil")}>
                  Accueil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("qui-suis-je")}>
                    Qui suis-je ?
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("mes-competences")}>
                  Mes compétences
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("mes-projets")}>
                  Mes projets
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("mon-cv")}>
                  Mon CV
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