"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import moi from "@/public/moi.jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LinkPreview } from "@/components/ui/link-preview";
import styles from './horizontalSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const scrollAnimation = gsap.fromTo(
        targetRef.current,
        { x: "0%" },
        {
          x: "-100%",
          ease: "none",
          scrollTrigger: {
            trigger: targetRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: false, // Désactive l'espacement du pin
            onEnter: () => console.log("Pinned"), // Logs when pin is triggered
          },
        }
      );
      return () => {
        scrollAnimation.kill();
      };
    }
  }, []);

  return (
    <section ref={targetRef} style={{ height: "fit-content" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-visible"> {/* Modification ici */}
        <div className="flex gap-0">
          <div className="relative h-screen w-screen">
            <BackgroundLines data-scroll data-scroll-speed="0.25" className={styles.backgroundLines}>
              <div className={styles.moiWrapper}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 10 }}
                >
                  <Image alt="Photo de moi-même, Nolhan" className={styles.moi} src={moi} />
                </motion.div>
              </div>
            </BackgroundLines>
          </div>
          <div className={`${styles.pres} ${styles.pinSection}`}>
            <h1 className={styles.titre}>01 - À PROPOS</h1>
            <p className="leading-7 mt-6">
              Je m&apos;appelle Nolhan BILYJ,{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="border-b">j&apos;ai 19 ans</TooltipTrigger>
                  <TooltipContent>
                    <p> Né le 11/08/05 🎂</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              &nbsp;et suis actuellement étudiant en&nbsp;
              <LinkPreview url="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=18547&typeBac=0">
                <span className="border-b">1ère année de D.U D&apos;informatique à l&apos;UHA4.0 de Mulhouse</span>
              </LinkPreview>
            </p>
          </div>
          <div className={styles.pres}>
            <h1 className={styles.titre}>02. Mes compétences</h1>
          </div>
        </div>
      </div>
    </section>
  );
}