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

import uha1 from '@/public/screen-criticlick/1.png';
import uha2 from '@/public/screen-criticlick/2.png';
import uha3 from '@/public/screen-criticlick/3.png';
import uha4 from '@/public/screen-criticlick/4.png';
import uha5 from '@/public/screen-criticlick/5.png';
import uha6 from '@/public/screen-criticlick/6.png';
import uha7 from '@/public/screen-criticlick/7.png';
import uha8 from '@/public/screen-criticlick/8.png';
import uha9 from '@/public/screen-criticlick/9.png';
import uha10 from '@/public/screen-criticlick/10.png';
import uha11 from '@/public/screen-criticlick/11.png';
import uha12 from '@/public/screen-criticlick/12.png';
import uha13 from '@/public/screen-criticlick/13.png';
import uha14 from '@/public/screen-criticlick/14.png';

import { Eye, Github, Info } from 'lucide-react';

const data = [
  {
    title: "OCT. 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Mon père étant VTC autour de Belfort, j’ai cherché un projet concret pour me lancer dans le développement web. L’idée m’est venue en observant son activité : pourquoi ne pas créer une solution digitale utile à son métier ? C’était une opportunité parfaite pour apprendre tout en travaillant sur un projet réaliste et concret.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          J’ai travaillé sur un design simple, épuré et 100% responsive pour refléter le professionnalisme de son service, tout en mettant en valeur son expérience unique avec des photos et des textes adaptés. Ce projet m’a permis de développer mes compétences en développement web, notamment en création d’interfaces claires, intuitives et responsives.
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
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Une fois que toutes les informations sont renseignées et que l’itinéraire proposé ainsi que le tarif estimé conviennent, les utilisateurs n’ont plus qu’à remplir leurs coordonnées (nom, prénom et numéro de téléphone). Ces données sont ensuite envoyées par mail, permettant ainsi de finaliser la demande de réservation en toute simplicité.
        </p>

        <div className="grid grid-cols-2 gap-4">
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

        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-2 items-center">

        <TooltipProvider>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>Informations</TooltipContent>
            </Tooltip>
            <PopoverContent>
              Le projet utilise HTML, CSS, JavaScript avec l&apos;API Google Maps. Également, il inclut un système
              d&apos;envoi d&apos;e-mails avec un fichier PHP, en utilisant AJAX pour la communication entre le frontend
              et le backend.
            </PopoverContent>
          </Popover>
        </TooltipProvider>



          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
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
            <TooltipTrigger asChild>
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
    title: "SEPT. 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Le site Criticlick a été créé dans le cadre de ma première année d’études en Diplôme Universitaire d’Informatique à l’UHA 4.0 de Mulhouse. Ce projet avait pour but nous aider à acquérir des compétences essentielles en développement web, telles que la maîtrise des langages HTML, CSS (+ reponsive), JavaScript, PHP, SQL et Bash, ainsi que l’utilisation de serveurs locaux (comme XAMPP), l’intégration d’API et la gestion de version avec Git. Il servait donc de projet pratique pour renforcer mes connaissances et compétences techniques.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={uha1}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha2}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha3}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
        Dans le cadre de ce projet, nous avions accès à deux API principales : une pour récupérer les produits et une autre pour gérer les catégories de produits. L’objectif principal était d’exploiter ces API de manière optimale pour extraire toutes les informations nécessaires et les intégrer de façon fluide dans le site. Ces données étaient cruciales pour structurer le site et fournir des informations pertinentes aux utilisateurs, comme la liste des produits disponibles, leurs caractéristiques et leurs catégories. En exploitant ces API, j’ai appris à manipuler des données externes tout en garantissant une intégration efficace dans le projet.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
              src={uha4}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={uha5}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={uha6}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Cela impliquait non seulement de récupérer ces données, mais aussi de les organiser dans une base de données relationnelle. J’ai dû créer des liens entre différentes tables, comme associer chaque produit à une catégorie via une relation entre les produits et les catégories. De plus, chaque produit pouvait être lié à plusieurs tags, et chaque tag à plusieurs produits, ce qui a introduit une relation many-to-many. Pour gérer cela, j’ai créé une table de jointure entre les produits et les tags. Cette organisation optimisait les recherches, facilitant l’accès aux produits par catégorie et la filtration par tags. Le défi a été d’utiliser efficacement les API tout en appliquant les principes des bases de données relationnelles, ce qui m’a permis de renforcer mes compétences en gestion de données complexes et en intégration d’API.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
              src={uha7}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha8}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
              src={uha9}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha10}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Le site inclut un système de connexion permettant aux utilisateurs de laisser des avis sur les produits, de soumettre des fiches produits manquantes et d’ajouter des catégories non présentes. Ces contributions, dans un esprit de participation communautaire, sont soumises à une vérification par les administrateurs avant leur publication. Les administrateurs disposent d’un espace de gestion pour effectuer des opérations CRUD (création, lecture, mise à jour, suppression) avec une gestion d&apos;erreur solide, sur les produits et les catégories, assurant ainsi une gestion efficace et la validation des contenus partagés par les utilisateurs.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
              src={uha11}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha12}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
              src={uha13}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha14}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
        
        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-2 items-center">

        <TooltipProvider>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>Informations</TooltipContent>
            </Tooltip>
            <PopoverContent>
              Le projet utilise HTML, CSS, JavaScript avec l&apos;API Google Maps. Également, il inclut un système
              d&apos;envoi d&apos;e-mails avec un fichier PHP, en utilisant AJAX pour la communication entre le frontend
              et le backend.
            </PopoverContent>
          </Popover>
        </TooltipProvider>



        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link target='_blank' href="https://github.com/Nolhan-B/FilRouge-401.git" passHref>
                <Button variant="outline" size="icon">
                  <Github />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Repository Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  alert("Déployer le projet en suivant la documentation pour visualiser.");
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Link from 'next/link';

export default function Home() {


  return (
    <>
      <ScrollSection />
      <Timeline data={data} />
        <MacbookScroll
          title={
            <span>
              Sur LinkedIn, c’est du classique… <br /> Ici, c’est du sur-mesure, fait à la main et livré avec un sourire !
            </span>
          }
          showGradient={false}
        />
      <div className='bg-background' style={{height: '300px', zIndex: '5', position: 'relative'}}>Footer</div>
      
    </>
  );
}