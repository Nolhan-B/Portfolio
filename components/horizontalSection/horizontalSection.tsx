import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './horizontalSection.module.css';
import { motion } from "framer-motion";
import Image from "next/image";
import { BackgroundLines } from "@/components/ui/background-lines";
import moi from "@/public/moi.jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LinkPreview } from "../ui/link-preview";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animation = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "350% top",
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animation.kill();
    };
  }, []);

  return (
    <section className={styles.scrollSectionOuter}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={styles.scrollSectionInner}>
          <div className={styles.scrollSection}>
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
          <div className={styles.scrollSection}>
            <h1 className={styles.titre}>QUI SUIS-JE ?</h1>
            <div className="leading-7 mt-6">
              Je m&apos;appelle Nolhan BILYJ,{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="border-b">j&apos;ai 19 ans</TooltipTrigger>
                  <TooltipContent>
                    Né le 11/08/05 🎂
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              &nbsp;et suis actuellement étudiant en&nbsp;
              <LinkPreview url="https://dossier.parcoursup.fr/Candidats/public/fiches/afficherFicheFormation?g_ta_cod=18547&typeBac=0">
                <span className="border-b">1ère année de D.U D&apos;informatique à l&apos;UHA4.0 de Mulhouse</span>
              </LinkPreview>
            </div>
          </div>
          <div className={styles.scrollSection}>
            <h3>Section 3</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
