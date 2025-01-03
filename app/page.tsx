"use client";

import vtc1 from '@/public/screen-dbvtc/1.png';
import vtc2 from '@/public/screen-dbvtc/2.png';
import vtc3 from '@/public/screen-dbvtc/3.png';
import vtc4 from '@/public/screen-dbvtc/4.png';
import vtc5 from '@/public/screen-dbvtc/5.png';
import vtc6 from '@/public/screen-dbvtc/6.png';
import vtc7 from '@/public/screen-dbvtc/7.png';
import vtc8 from '@/public/screen-dbvtc/8.png';
import vtc9 from '@/public/screen-dbvtc/9.png';

import { Eye, Github, Link, Share, Watch } from 'lucide-react';

const data = [
  {
    title: "OCT. 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Mon père étant VTC autour de Belfort, j’ai cherché un projet concret pour me lancer dans le développement web. L’idée m’est venue en observant son activité : pourquoi ne pas créer une solution digitale utile à son métier ? C’était une opportunité parfaite pour apprendre tout en travaillant sur un projet réaliste et concret.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          J’ai travaillé sur un design simple et épuré pour refléter le professionnalisme de son service, tout en mettant en valeur son expérience unique avec des photos et des textes adaptés. Ce projet m’a permis de développer mes compétences en développement web, notamment en création d’interfaces claires, intuitives et responsives.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc1}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc2}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc3}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc4}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          L’un des principaux atouts de notre site est son outil de calcul de tarifs interactif, basé sur l’API Google Maps. Ce calculateur permet aux utilisateurs d’obtenir une estimation rapide et précise de leurs trajets. Le processus est simple : il suffit de renseigner une adresse de départ et une adresse d’arrivée. Grâce à la fonctionnalité d’auto-complétion, la recherche des adresses est facilitée, avec des suggestions pertinentes qui limitent les erreurs de saisie. En complément, il est nécessaire de fournir une heure de départ et une heure d’arrivée. Selon la plage horaire indiquée, une majoration de nuit est automatiquement appliquée pour les trajets effectués entre certaines heures (par exemple, entre 22h et 6h). Cela permet de fournir un tarif réaliste, tenant compte des éventuels surcoûts nocturnes.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Une fois que toutes les informations sont renseignées et que l’itinéraire proposé ainsi que le tarif estimé conviennent, les utilisateurs n’ont plus qu’à remplir leurs coordonnées (nom, prénom et numéro de téléphone). Ces données sont ensuite envoyées par mail, permettant ainsi de finaliser la demande de réservation en toute simplicité.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc5}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc6}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc7}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc8}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Ce système permet une prise de contact rapide et efficace, simplifiant la gestion des réservations. Une fois le mail envoyé, un message de confirmation apparaît à l’écran, informant l’utilisateur que sa demande a bien été prise en compte.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc9}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    alert("Ce repository est privé.");
                  }}
                  >
                  <Github />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Repository Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  alert("Bientôt disponnible.");
                }}
              >
                <Eye />
            </Button>
            </TooltipTrigger>
            <TooltipContent>Se rendre sur le site</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        </div>
        

      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I usually run out of copy, but when I see content this big, I try to
          integrate lorem ipsum.
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Lorem ipsum is for people who are too lazy to write copy. But we are
          not. Here are some more example of beautiful designs I built.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />

          <Image
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  // {
  //   title: "Changelog",
  //   content: (
  //     <div>
  //       <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
  //         Deployed 5 new components on Aceternity today
  //       </p>
  //       <div className="mb-8">
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Card grid component
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Startup template Aceternity
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Random file upload lol
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Himesh Reshammiya Music CD
  //         </div>
  //         <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
  //           ✅ Salman Bhai Fan Club registrations open
  //         </div>
  //       </div>
  //       <div className="grid grid-cols-2 gap-4">
  //         <Image
  //           src="https://assets.aceternity.com/pro/hero-sections.png"
  //           alt="hero template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/features-section.png"
  //           alt="feature template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/pro/bento-grids.png"
  //           alt="bento template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //         <Image
  //           src="https://assets.aceternity.com/cards.png"
  //           alt="cards template"
  //           width={500}
  //           height={500}
  //           className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
];

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import ScrollSection from "@/components/horizontalSection/horizontalSection";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {


  return (
    <>
      <ScrollSection />
      <Timeline data={data} />
      <div style={{height: '100vh'}}></div>
    </>
  );
}