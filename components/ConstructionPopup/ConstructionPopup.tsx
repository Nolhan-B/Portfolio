"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Cookies from "js-cookie";
import { Button } from "../ui/button";

const COOKIE_NAME = "construction-popup";
const COOKIE_EXPIRATION_TIME = 7 / 86400; // 20 secondes converties en jours

const ConstructionPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Vérifier si le cookie existe déjà
    const cookie = Cookies.get(COOKIE_NAME);
    if (!cookie) {
      const timer = setTimeout(() => {
        setOpen(true); // Afficher la popup après 3,5 secondes
      }, 3500); // Afficher la popup après 3,5 secondes (3500 ms)

      return () => clearTimeout(timer); // Nettoyer le timer si le composant est démonté avant que le délai ne soit écoulé
    }
  }, []);

  const handleClose = () => {
    Cookies.set(COOKIE_NAME, "seen", { expires: COOKIE_EXPIRATION_TIME }); // Cookie avec expiration de 20 secondes
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div />
      </DialogTrigger>
      <DialogContent className=" rounded-lg z-[9999999]">
        <DialogTitle>Site en construction</DialogTitle>
        <DialogDescription>
            Le site est en cours de construction. Certains éléments peuvent manquer ou être incomplets, mais c&apos;est normal. Si vous rencontrez des erreurs ou d&apos;autres problèmes, n&apos;hésitez pas à me les signaler. Vous pouvez me contacter ici :{" "}
            <a href="mailto:nolhanbil@gmail.com">nolhanbil@gmail.com</a>.
        </DialogDescription>
        <Button onClick={handleClose}>C'est noté.</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConstructionPopup;