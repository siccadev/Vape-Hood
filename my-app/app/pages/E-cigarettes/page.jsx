"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from 'next/image';
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";
import Link from "next/link";

const products = [
  { id: 0, name: 'Lost Vape CENTAURUS M200 Box Mod', image: '/nn.webp', originalPrice: '140,000TND', Catégories: "Lost Vape", Disponibilité: "En stock" },
  { id: 1, name: 'BOX G CLASS V2 COLORS AL + ABS VERSION - SX MINI', image: '/box-g-class-v2-colors-al-abs-version-sx-mini.webp', originalPrice: '680,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "La BOX G Class V2 New Colors AL + ABS Version de SX Mini est une version mise à jour de la box mod G Class. " },
  { id: 2, name: 'KITS AEGIS LEGEND 3 - GEEKVAPE', image: '/kit-aegis-l200-geekvape.webp', originalPrice: '329,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Lost Vape", Description: "GeekVape Aegis Legend 3 Kit 200W avec Z (Zeus) Fli Tank 5,5 ml est l'avenir du vapotage. Méticuleusement conçu, tant à l’intérieur qu’à l’extérieur, ce mod box innovant établit une nouvelle norme en matière d’intelligence. Dotée de la puce AS Chip 4.0 révolutionnaire, notre fonction de déverrouillage avancée révolutionne votre expérience de vapotage. Avec le mode MEMORY, personnaliser les styles de vapotage n'a jamais été aussi simple. GeekVape Aegis Legend V3 est une version améliorée du kit Geekvape L200 (Aegis Legend 2) 200W. GeekVape Aegis Legend 3 Kit Carrera Edition 230W est l'édition limitée GeekVape Aegis Legend 3. (*Toutes les autres éditions produisent à 200 W Max.)" },
  { id: 3, name: 'Kit Armour Max 220W - New colors - Vaporesso', image: '/kit-armour-max-220w-new-colors-vaporesso (1).webp', originalPrice: '309,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "SX mini", Description: "Le Kit Armour S Vaporesso est un kit box simple accu 18650/21700 pour une puissance de 100W" },
  { id: 4, name: 'Kit Armour Max Vaporesso', image: '/kit-armour-max-vaporesso.webp', originalPrice: '299,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le Kit Armour Max de Vaporesso représente un incontournable pour les amateurs de vape directe et de robustesse " },
  { id: 5, name: 'KIT AEGIS TOUCH T200 - GEEKVAPE', image: '/kit-aegis-touch-t200-geekvape.webp', originalPrice: '259,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le modèle Aegis TOUCH T200 combine spécifiquement un écran tactile élégant avec une puissance maximale de 200 watts" },
  { id: 6, name: 'Kit Armour S 100W - Vaporesso', image: '/kit-armour-s-100w-vaporesso.webp', originalPrice: '279,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le Kit Armour S Vaporesso est un kit box simple accu 18650/21700 pour une puissance de 100W" },
  { id: 7, name: 'Kit Armour S 100W - New colors - Vaporesso', image: '/kit-armour-s-100w-new-colors-vaporesso.webp', originalPrice: '279,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le Kit Armour S Vaporesso est un kit box simple accu 18650/21700 pour une puissance de 100W" },
  { id: 8, name: 'Box Armour Max 220W - New colors - Vaporesso', image: '/box-armour-max-220w-new-colors-vaporesso.webp', originalPrice: '259,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La box Armour Max 220W est une box double accus, résistante aux chocs grâce à ces matériaux TPU" },
  { id: 9, name: 'BOX AEGIS LEGEND 3 - GEEKVAPE', image: '/box-aegis-legend-3-geekvape (1) - Copy.webp', originalPrice: '269,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende. Et il continue de se surpasser avec des boxs toujours plus innovantes à l'image du mod Aegis L200 ! Fonctionnant avec 2 accus 18650, elle dispose d'une autonomie conséquente et peut monter jusqu'à 200 watts,La Aegis Legend 2 s'inspire de ses ainées. La robustesse est toujours au rendez-vous grâce à un revêtement composé d'aluminium et de silicone. Ces matériaux rendent le mod étanche et plus solide. Vous pouvez partir l'esprit serein avec votre box Aegis Legend 2 !" },
  { id: 10, name: 'KIT CENTAURUS M200 - LOST VAPE', image: '/kit-centaurus-m200-lost-vape.webp', originalPrice: '279,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "Ce kit Centaurus M200 associe la splendide et puissante box Centaurus M200 avec le clearomiseur Centaurus Sub Ohm Tank" },
  { id: 11, name: 'KIT Z200 200W - GEEKVAPE', image: '/kit-z200-200w-geekvape.webp', originalPrice: '249,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Geekvape", Description: "GEEKVAPE COMBINE LA BOX Z200 ET LE CLEAROMISEUR Z SUBOHM 2021 POUR OFFRIR UN KIT HORS NORME" },
  { id: 12, name: 'KIT DRAG 4 VOOPOO', image: '/kit-drag-4-voopoo.webp', originalPrice: '259,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "La Box Drag 4 de VOOPOO est un mod double accu qui nécessite la mise en place de deux accumulateurs au format 18650" },
  { id: 13, name: 'Box Armour Max Vaporesso', image: '/box-armour-max-vaporesso.webp', originalPrice: '249,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La box Armour Max, est alimentée par deux accus 18650 ou 21700, ce qui offre une autonomie généreuse" },
  { id: 14, name: 'KIT AEGIS L200 GEEKVAPE', image: '/kit-aegis-l200-geekvape.webp', originalPrice: '259,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Geekvape", Description: "Au sein du Kit Aegis Legend 2, on retrouve une box Aegis Legend 2 fonctionnant avec deux accus 18650 afin d'offrir le maximum d'autonomie" },
  { id: 15, name: 'BOX AEGIS TOUCH T200 - GEEKVAPE', image: '/box-aegis-touch-t200-geekvape (1).webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "GeekVape parvient toujours à surpasser nos attentes. Avec sa box Aegis Touch T200," },
  { id: 16, name: 'KIT GEN 200 ITANK 2 NEW COLOR - VAPORESSO', image: '/kit-gen-200-itank-2-new-color-vaporesso (1).webp', originalPrice: '249,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La Box Gen 200 de Vaporesso est un mod électronique de dernière génération qui nécessite la mise en place de deux accus 18650" },
  { id: 17, name: 'KIT TARGET 200 - VAPORESSO', image: '/kit-target-200-vaporesso.webp', originalPrice: '259,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso dévoile un kit double accu qui va faire le bonheur des vapoteurs adeptes de cloud chasing" },
  { id: 18, name: 'BOX Z200 GEEKVAPE', image: '/box-z200-geekvape.webp', originalPrice: '219,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "GEEKVAPE EST UN FABRICANT À L'IMAGINATION DÉBORDANTE QUI DÉVOILE LA NOUVELLE BOX Z200" },
  { id: 19, name: 'BOX AEGIS L200 CLASSIC GEEKVAPE', image: '/box-aegis-l200-classic-geekvape.webp', originalPrice: '249,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Geekvape revient en force avec la Box Aegis L200 Classic ! Présent dans le kit Aegis L200 CLassic" },
  { id: 20, name: 'Box Armour S 100W - New colors - Vaporesso', image: '/box-armour-s-100w-new-colors-vaporesso.webp', originalPrice: '229,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Plus petite en diamètre que l'Armour Max, la box Armour S Vaporesso est unebox simple acccu 18650/21700 pour une puissance de 100W." },
  { id: 21, name: 'Box Aegis Legend 2 L200 - New Colors - Geekvape', image: '/box-aegis-legend-2-l200-new-colors-geekvape.webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende." },
  { id: 22, name: 'Box Aegis Legend 2 L200 - Exclusive Colors - Geekvape', image: '/box-aegis-legend-2-l200-exclusive-colors-geekvape.webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende." },
  { id: 23, name: 'BOX G CLASS V2 COLORS AL + ABS VERSION - SX MINI', image: '/box-g-class-v2-colors-al-abs-version-sx-mini.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "La BOX G Class V2 New Colors AL + ABS Version de SX Mini est une version mise à jour de la box mod G Class. Elle marie l'aluminium et l'ABS pour un design sophistiqué et durable." },
  { id: 24, name: 'BOX CENTAURUS M200 - LOST VAPE', image: '/box-centaurus-m200-lost-vape (2).webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "La série Centaurus revient avec un mod haut en couleur. De sublimes gravures ornent cette box" },
  { id: 25, name: 'Box Armour S Vaporesso', image: '/box-armour-s-vaporesso.webp', originalPrice: '219,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le performant mod électronique Armour S fonctionne avec un accu 18650 ou 2170 ce qui qui garantit une autonomie phénoménale." },
  { id: 26, name: 'Box Aegis Solo 2 - S100 - Geekvape', image: '/box-aegis-solo-2-s100-geekvape.webp', originalPrice: '199,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "La box S100 Aegis Solo 2 est un mod électronique fonctionnant avec un accu 18650." },
  { id: 27, name: 'POD Aegis Boost Pro 2 - B100 - Geekvape', image: '/pod-aegis-boost-pro-2-b100-geekvape.webp', originalPrice: '219,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Geekvape", Description: "pod Aegis Poost Pro 2 B100, Geekvape creuse encore l'écart et se place au rang de numéro 1 dans le domaine des pods robustes et puissants. Avec sa certification..." },
  { id: 28, name: 'KIT ARGUS XT VOOPOO', image: '/kit-argus-xt-voopoo.webp', originalPrice: '219,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Kit Argus XT 100W Vendu avec le tank Maat 6,5ml Fonctionne avec un accu 18650 ou 21700 Puissance de 5 à 100W avec un accu 21700 et de 5 à 80W avec un accu 18650 Certification IP68 (résistant à l'eau, à la poussière et aux..." },
  { id: 29, name: 'BOX AEGIS L200 GEEKVAPE', image: '/box-aegis-l200-geekvape (1).webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende. Et il continue de se surpasser avec des boxs toujours plus innovantes à l'image du mod Aegis L200" },
  { id: 30, name: 'BOX DRAG 4 VOOPOO', image: '/vaporesso (7).webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Présente dans le kit Drag 4, la Box Drag 4 de VOOPOO se singularise par sa générosité. " },
  { id: 31, name: 'BOX TARGET 200 VAPORESSO', image: '/box-target-200-vaporesso.webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La Box Target 200 est la toute dernière nouveauté de Vaporesso au design sobre et raffiné. " },
  { id: 33, name: 'kit argus mt voopoo', image: '/kit-argus-mt-voopoo.webp', originalPrice: '219,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le Kit Argus MT regroupe la box Argus MT et le clearomiseur Maat." },
  { id: 34, name: 'KIT DRAG M100S - VOOPOO', image: '/kit-drag-m100s-voopoo.webp', originalPrice: '249,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "VOOPOO propose le kit Drag M100S qui combine la box du même nom et le clearomiseur UForce L. " },
  { id: 35, name: 'BOX THELEMA QUEST 200W', image: '/box-thelema-quest-200w.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "X-BAR", Description: "La Thelema Quest est une box à double accu 18650 équipée de la puce Quest 2.0 conçue par Lost vape. " },
  { id: 36, name: 'KIT POD Luxe XR Max - Leather Version - Vaporesso', image: '/kit-pod-luxe-xr-max-leather-version-vaporesso.webp', originalPrice: '189,000 TND', Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso livre un pod futuriste aux performances impressionnantes." },
  { id: 37, name: 'BOX ARGUS XT - VOOPOO', image: '/box-argus-xt-voopoo.webp', originalPrice: '189,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "VOOPOO", Description: "La Argus XT est un mod électronique au corps aussi moderne qu'élégant qui embarque un écran très lisible. " },
  { id: 38, name: 'BOX THELEMA SOLO 100W NEW COLORS - LOST VAPE', image: '/box-thelema-solo-100w-new-colors-lost-vape.webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "Taille: 28.5*39*97.5mm Batterie: batterie unique 21700/18650 (non incluse) " },
  { id: 39, name: 'KIT POD DRAG H80S NEW COLORS VOOPOO', image: '/kit-pod-drag-e60-voopoo.webp', originalPrice: '189,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "La Drag H80 S renferme une puce électronique Gen TT 2.0 qui permet de profiter d'une puissance maximale de 80 watts" },
  { id: 40, name: 'KIT DRAG X PLUS 100W - VOOPOO', image: '/kit-drag-x-plus-100w-voopoo.webp', originalPrice: '229,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "La Nouvelle Drag X Plus PRO Edition se dote d'un nouveau Tank TPP 2.0." },
  { id: 41, name: 'KIT POD Luxe XR Max - New Colors - Vaporesso', image: '/kit-pod-luxe-xr-max-new-colors-vaporesso.webp', originalPrice: '179,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso livre un pod futuriste aux performances impressionnantes. Le Luxe XR Max est un Pod qui intègre une généreuse batterie de 2800 mah." },
  { id: 42, name: 'KIT POD DRAG X2 PNP X DTL - VOOPOO', image: '/kit-pod-drag-x2-pnp-x-dtl-voopoo.webp', originalPrice: '189,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "VOOPOO fait le bonheur des amateurs de cigarettes électroniques et propose le Drag X2." },
  { id: 43, name: 'KIT POD DRAG X PNP X VOOPOO', image: '/kit-pod-drag-x-voopoo.webp', originalPrice: '189,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "VOOPOO propose une nouvelle version de son fameux kit Drag X. Le kit Drag X PnP X révolutionne l'univers de la cigarette électronique" },
  { id: 44, name: ' ', image: '/kit-pod-luxe-x-pro-vaporesso.webp', originalPrice: '169,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "" },
  { id: 45, name: 'KIT POD ARGUS PRO 80W VOOPOO', image: '/kit-pod-argus-pro-80w-voopoo.webp', originalPrice: '189,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le Argus Pro 80W s'équipe d'une batterie intégrée de 3000 mah qui offre une autonomie énorme et permet d'alimenter le chipset Gene.TT." },
  { id: 46, name: 'KIT POD LUXE XR MAX 2800MAH - VAPORESSO', image: '/kit-pod-luxe-xr-max-2800mah-vaporesso.webp', originalPrice: '169,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso livre un pod futuriste aux performances impressionnantes. Le Luxe XR Max est un Pod qui intègre une généreuse batterie de 2800 mah." },
  { id: 47, name: 'KIT POD LUXE PM40 1800MAH - VAPORESSO', image: '/kit-pod-luxe-pm40-1800mah-vaporesso.webp', originalPrice: '139,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le KIT POD LUXE PM40 1800mAh est un appareil de vape fabriqué par Vaporesso. Il fait partie de la série Vaporesso Luxe PM40, connue pour sa taille compacte, sa conception conviviale et ses performances." },
  { id: 48, name: 'BOX MVP 220W - DOVPO', image: '/box-mvp-220w-dovpo.webp', originalPrice: '209,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "DOVPO", Description: "La nouvelle Box MVP de Dovpo s'adresse sans détours aux vapoteurs les plus exigeants, qu'ils soient ou non adeptes du reconstructible. " },
  { id: 49, name: 'KIT POD LUXE Q2 - VAPORESSO', image: '/kit-pod-luxe-q2-se-vaporesso.webp', originalPrice: '159,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso présente sa dernière création le Luxe Q2. Ergonomique et peu encombrant, le Luxe Q2 propose une batterie intégrée de 1000 mah qui se recharge rapidement par USB-C. Avec une charge qui culmine à 2A, remplir la batterie ne prendra que..." },
  { id: 50, name: 'KIT POD DRAG X VOOPOO', image: '/kit-pod-drag-x-voopoo.webp', originalPrice: '159,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le pod Drag X fonctionne avec un seul accu au format 18650 (disponible à l'achat séparément) : l'autonomie en mAh est donc phénoménale et la légèreté est conservée. Élégant et racé, le pod renferme un chipset Gene TT qui permet..." },
  { id: 51, name: 'KIT POD DRAG S VOOPOO', image: '/kit-pod-drag-s2-pnp-x-mtl-voopoo.webp', originalPrice: '169,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Ce Pod de dernière génération se pare d'une batterie intégrée de 2500 mah à la recharge ultra-rapide. Grâce à sa cartouche PnP Tank de 4.5 ml de contenance capable de recevoir toutes les résistances PnP et le plateau PNP RBA,..." },
  { id: 52, name: 'KIT POD Luxe XR - Vaporesso', image: '/kit-pod-luxe-xr-max-2800mah-vaporesso.webp', originalPrice: '149,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "5ml 1500mAh 40W Compatible résistances GTX Compatible avec les cartouches Luxe X / XR avec résistances intégrées" },
  { id: 53, name: 'KIT POD VINCI 3 - VOOPOO', image: '/kit-pod-vinci-3-voopoo.webp', originalPrice: '159,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le Vinci 3 de VOOPOO est un pod innovant et polyvalent qui offre une expérience de vape exceptionnelle. Doté d'une batterie intégrée puissante de 1800 mAh, il garantit des sessions de vape prolongées pour les utilisateurs de..." },
  { id: 54, name: 'KIT POD DORIC 60 - VOOPOO', image: '/kit-pod-doric-60-voopoo.webp', originalPrice: '139,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Cigarette Électronique Doric 60 VOOPOO Batterie : Batterie intégrée de 2500 mAh pour une autonomie généreuse. Connectivité : Port USB-C pour une charge rapide et une connectivité facilitée. Design : Forme tubulaire pour un..." },
  { id: 55, name: 'KIT POD ARGUS 40W VOOPOO', image: '/kit-pod-argus-40w-voopoo.webp', originalPrice: '159,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le Pod Argus de VOOPOO renferme une conséquente batterie intégrée de 1500 mah qui se recharge rapidement via le port USB-C installé sur la face avant. Mi-box, mi-tube, cette eigarette aux innombrables possibilités se singularise par son..." },
  { id: 56, name: 'KIT POD DRAG S2 PNP X MTL - VOOPOO', image: '/kit-pod-drag-s2-pnp-x-mtl-voopoo.webp', originalPrice: '179,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "VOOPOO s'adresse aux adeptes de vape indirecte et livre le Drag S2 PNP X MTL ! Le pod Drag S2 est un mod électronique qui s'accompagne d'un chipset Gene TT 2.0 et d'une batterie de 2500 mah. Grâce à ces..." },
  { id: 57, name: 'DRAG S PNP X VOOPOO', image: '/drag-s-pnp-x-voopoo.webp', originalPrice: '179,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le pod Drag S imaginé par VOOPOO est un mod électronique qui embarque une batterie intégrée de 2500 mah et un chipset Gene TT. Grâce à ce dernier, le Drag S peut envoyer une puissance maximale de 60 watts et garantir une..." },
  { id: 58, name: 'KIT POD LUXE Q2 SE - VAPORESSO', image: '/kit-pod-luxe-q2-se-vaporesso.webp', originalPrice: '119,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso met à disposition de tous les vapoteurs un pod aussi compact que performant ! Le Luxe Q2 SE renferme une batterie de 1000 mah qui se recharge par USB-C. Grâce à cette dernière, les utilisateurs de cigarettes..." },
  { id: 59, name: 'KIT POD GTX GO 80 3000MAH VAPORESSO', image: '/kit-pod-sky-solo-plus-8ml-vaporesso (1).webp', originalPrice: '129,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le Pod GTX Go 80 offre une généreuse autonomie grâce à une batterie intégrée de 3000 mah ! Terriblement intuitif, le GTX Go 80 de Vaporesso se charge d'ajuster automatiquement la puissance selon la résistance mise en place. Sur..." },
  { id: 60, name: 'KIT POD ARGUS AIR NEW COLORS VOOPOO', image: '/kit-argus-air-new-colors-voopoo.webp', originalPrice: '149,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le Pod Argus Air de Voopoo embarque avec lui une batterie de 900 mAh qui permettra de vapoter toute la journée sans soucis particuliers. Compact, élégant et très pratique, le Pod Argus Air est l'allié parfait d'une vape simple..." },
  { id: 61, name: 'KIT POD DRAG H40 - VOOPOO', image: '/kit-drag-h40-voopoo.webp', originalPrice: '149,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Le kit comprend également un pod d’un volume supérieur à la norme de 5 ml. Le réservoir en plastique pratique est rempli par le trou inférieur caché derrière le couvercle en silicone et est fermement maintenu dans la batterie..." },
  { id: 62, name: 'KIT POD X MINI VAPORESSO MOTI', image: '/x-mini-vaporesso-moti.webp', originalPrice: '139,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Vaporesso s'est allié au fabricant Moti et propose le Pod X Mini ! Le X Mini est une cigarette électronique tubulaire qui renferme une batterie intégrée de 1150 mah. Cette dernière se recharge par USB-C et permet de donner vie..." },
  { id: 63, name: 'KITS URSA NANO 800MAH - LOST VAPE', image: '/kits-ursa-nano-800mah-lost-vape.webp', originalPrice: '139,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "SPLENDIDE, PERFORMANT, FACILE À UTILISER. UN DESIGN COMPLÈTEMENT MODERNE ! TAILLE : 100,56 X 24,1 X 14 MM. CAPACITÉ E-LIQUIDE : 2,5 ML. BATTERIE : 800 MAH (INTÉGRÉE). TENSION DE SORTIE : 3,0 V-3,9 V. PLAGE DE PUISSANCE : 5-18 W. AIRFLOW..." },
  { id: 64, name: 'KIT POD SKY SOLO PLUS 8ML VAPORESSO', image: '/kit-pod-sky-solo-plus-8ml-vaporesso (1).webp', originalPrice: '119,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Tout aussi efficace que le kit Sky Solo, le kit Sky Solo Plus de Vaporesso reprend la même formule mais ici tout est augmenté ! Le Sky Solo Plus dispose donc d'une batterie intégrée de 3000 mah... Ce Sky Solo Plus, ne dispose..." },
  { id: 65, name: 'KIT POD URSA NANO WINTER EDITION - LOST VAPE', image: '/kit-pod-ursa-nano-winter-edition-lost-vape.webp', originalPrice: '149,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "LOST VAPE", Description: "Lost Vape nous gâte avec cette édition hivernale tout simplement splendide du pod Ursa Nano. Un design moderne et élégant." },
  { id: 66, name: 'KIT POD GTX GO 40 1500MAH VAPORESSO', image: '/kit-pod-gtx-go-40-1500mah-vaporesso.webp', originalPrice: '109,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le GTX Go 40 se compose d'une batterie de 1500 mah qui assure une excellente autonomie et permet de conserver une taille restreinte. Le diamètre est de seulement 22 mm et la hauteur totale du kit s'élève à 110.3 mm. Le GTX Go..." },
  { id: 67, name: 'KIT POD SKY SOLO 3.5ML - VAPORESSO', image: '/kit-pod-sky-solo-35ml-vaporesso.webp', originalPrice: '119,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "Le Sky Solo de Vaporesso est un kit de démarrage ultra portable! Il comprend un réservoir d'une capacité de 3,5 ml et une batterie intégrée de 1 400 mAh. Sa puce avancée OMNI Board Mini lui permet de fournir des performances de..." },
  { id: 68, name: 'CARTOUCHES DE REMPLACEMENT TPP VOOPOO', image: '/cartouches-de-remplacement-tpp-voopoo.webp', originalPrice: '21,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "un cartouches de remplacement pour les pods Seal, Drag X, Drag S, Argus Pro, Argus, Argus X, Doric 60 et pour les clearomiseurs TPP Tank et PnP Tank 2 de Voopoo. Utilisées seules, les cartouches TPP s'adaptent parfaitement aux..." },
  { id: 69, name: 'CARTOUCHES DE REMPLACEMENT PNP VOOPOOO', image: '/cartouches-de-remplacement-tpp-voopoo.webp', originalPrice: '28,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO", Description: "un cartouches de remplacement pour les pods Seal, Drag X, Drag S, Argus Pro, Argus, Argus X, Doric 60 et pour les clearomiseurs PnP Tank et PnP Tank 2 de Voopoo. Utilisées seules, les cartouches PnP s'adaptent parfaitement aux..." },
  { id: 70, name: 'CARTOUCHES LUXE Q 2 ML VAPORESSO', image: '/cartouches-luxe-q-2-ml-vaporesso.webp', originalPrice: '22,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "cartouches Luxe Q mis sur le marché par Vaporesso est conçu pour être installé sur le Pod Luxe Q ! Robustes, ces cartouches Vaporesso peuvent accueillir jusqu'à 2 ml d'eliquide et possèdent un remplissage de type top-fill :..." },
  { id: 71, name: 'BOX G CLASS V2 COLORS AL + ZINC VERSION - SX MINI', image: '/box-g-class-v2-colors-al-abs-version-sx-mini.webp', originalPrice: '850,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "X-BAR", Description: "La BOX G Class V2, nouvelle version en alliage d'aluminium et zinc, est une création de SX Mini. Cette version propose de nouvelles couleurs attrayantes tout en offrant des fonctionnalités avancées, une prise en main..." },
  { id: 72, name: 'BOX SL CLASS V2 100W - SXMINI', image: '/box-g-class-v2-colors-al-abs-version-sx-mini.webp', originalPrice: '350,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "X-BAR", Description: "La BOX SL Class V2 100W de SXMini est un mod compact et puissant conçu pour les vapoteurs à la recherche de performances de haut niveau. Elle offre une puissance de 100 watts, une construction de qualité supérieure et une gamme..." },
  { id: 73, name: 'KIT AEGIS L200 CLASSIC GEEKVAPE', image: '/kit-aegis-l200-classic-geekvape.webp', originalPrice: '279,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Geekvape", Description: "Geekvape combine le clearomiseur Zeus max SubOhm et la box Aegis Legend 2 Classic pour offrir un kit impressionnant. Totalement waterproof le mod électronique de GeekVape supporte également la poussière et..." },
  { id: 74, name: 'KIT POD DRAG E60 VOOPOO', image: '/kit-pod-drag-e60-voopoo.webp', originalPrice: '190,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO", Description: "VOOPOO propose un pod capable de répondre à vos moindres sollicitations ! La cigarette électronique Drag E60 renferme une batterie de 2550 mah qui active le chipset Gen TT 2.0. Cette puce électronique offre une..." },
  { id: 75, name: 'Gen Max', image: '/téléchargement.jpeg', originalPrice: '120,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Vaporesso", Description: "" },

  { id: 79, name: 'GTX80', image: '/mm.jpeg', originalPrice: '100,000TND', Disponibilité: "En stock", Marque: "VAPORESSO" }

];




const categories = [...new Set(products.map((product) => product.Catégories))];
const marques = [...new Set(products.map((product) => product.Marque))];
const disponibilites = [...new Set(products.map((product) => product.Disponibilité))];
const itemsPerPage = 9;
const ProductComponent = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const [priceRange, setPriceRange] = useState([28, 400]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedDisponibilite, setSelectedDisponibilite] = useState("");
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;


  const handlePageClick = (pageNumber) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    }, 800);
  };


  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageDisplay = 3; // Max number of page numbers to display before adding ellipsis

    // "Précédent" button
    if (currentPage > 1) {
      pageNumbers.push(
        <div key="prev" className="border-2 border-gray-300 p-1 sm:p-2 rounded-lg shadow-md bg-white mx-0.5 sm:mx-1">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
          >
            Précédent
          </button>
        </div>
      );
    }

    // Display the first few pages, then ellipsis if needed
    if (currentPage > maxPageDisplay) {
      for (let i = 1; i <= 2; i++) {
        pageNumbers.push(
          <div key={i} className="border-2 border-gray-300 p-1 sm:p-2 rounded-lg shadow-md bg-white mx-0.5 sm:mx-1">
            <button
              onClick={() => handlePageClick(i)}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded font-semibold ${currentPage === i ? "bg-gray-300 text-black" : "bg-white text-black"
                } hover:bg-gray-300 transition-all`}
            >
              {i}
            </button>
          </div>
        );
      }
      pageNumbers.push(
        <span key="start-ellipsis" className="px-2 sm:px-4 py-1 text-gray-700">...</span>
      );
    }

    // Pages around the current page
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = Math.min(currentPage + 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div key={i} className="border-2 border-gray-300 p-1 sm:p-2 rounded-lg shadow-md bg-white mx-0.5 sm:mx-1">
          <button
            onClick={() => handlePageClick(i)}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded font-semibold ${currentPage === i ? "bg-black text-white" : "bg-white text-black"
              } hover:bg-gray-300 transition-all`}
          >
            {i}
          </button>
        </div>
      );
    }

    // Display ellipsis and last pages if needed
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <span key="end-ellipsis" className="px-2 sm:px-4 py-1 text-gray-700">...</span>
      );
      pageNumbers.push(
        <div key={totalPages} className="border-2 border-gray-300 p-1 sm:p-2 rounded-lg shadow-md bg-white mx-0.5 sm:mx-1">
          <button
            onClick={() => handlePageClick(totalPages)}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded font-semibold ${currentPage === totalPages ? "bg-black text-white" : "bg-white text-black"
              } hover:bg-gray-300 transition-all`}
          >
            {totalPages}
          </button>
        </div>
      );
    }

    // "Suivant" button
    if (currentPage < totalPages) {
      pageNumbers.push(
        <div key="next" className="border-2 border-gray-300 p-1 sm:p-2 rounded-lg shadow-md bg-white mx-0.5 sm:mx-1">
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="px-2 sm:px-4 py-1 sm:py-2 rounded font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
          >
            Suivant
          </button>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap items-center justify-center space-x-1 sm:space-x-2 mt-4">
        {pageNumbers}
      </div>
    );
  };

  const handlePriceFilter = () => {
    const [min, max] = priceRange;
    return products.filter((product) => {
      const price = parseFloat(product.originalPrice.replace(",", ".")) || 0;
      return price >= min && price <= max;
    });
  };

  const handleAdvancedFilters = () => {
    return handlePriceFilter().filter((product) => {
      return (
        (selectedCategory === "" || product.Catégories === selectedCategory) &&
        (selectedMarque === "" || product.Marque === selectedMarque) &&
        (selectedDisponibilite === "" || product.Disponibilité === selectedDisponibilite)
      );
    });
  };


  const filteredProducts = handleAdvancedFilters();
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);


  return (
    <div className="flex full_container">
      {/* Filter Section */}
      <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-sm main_filter">
        <h3 className="text-lg font-semibold mb-4">Filtrer par prix</h3>
        <div className="mb-4">
          <label className="block mb-1">Prix (TND)</label>
          <Slider
            range
            min={29}
            max={400}
            step={1}
            value={priceRange}
            onChange={setPriceRange}
            className="mb-4"
          />
          <div className="flex justify-between text-sm">
            <span>{priceRange[0]} TND</span>
            <span>{priceRange[1]} TND</span>
          </div>
        </div>

        {/* Filter by Category */}
        <div className="mb-4">
          <label className="block mb-1">Catégories</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Toutes</option>
            {categories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Marque */}
        <div className="mb-4">
          <label className="block mb-1">Marque</label>
          <select
            value={selectedMarque}
            onChange={(e) => setSelectedMarque(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Toutes</option>
            {marques.map((marque, idx) => (
              <option key={idx} value={marque}>
                {marque}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Disponibilité */}
        <div className="mb-4">
          <label className="block mb-1">Disponibilité</label>
          <select
            value={selectedDisponibilite}
            onChange={(e) => setSelectedDisponibilite(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Toutes</option>
            {disponibilites.map((dispo, idx) => (
              <option key={idx} value={dispo}>
                {dispo}
              </option>
            ))}
          </select>
        </div>

        {/* <button
          onClick={() => setCurrentPage(1)}
          className="bg-green-600 text-white p-2 rounded w-full hover:bg-green-700 transition-colors"
        >
          Filtrer
        </button> */}
      </div>



      <div className="  py-8 px-2  main_width">
        <h2 className="font-extrabold text-3xl -ml-10 font-sans text-center mb-6" style={{ color: 'red' }}>
          E-cigarette en tunisie - Explorez la Liberté de Vapoter avec Style
        </h2>
        <p className="text-center text-gray-500 mb-8">Bienvenue dans notre catégorie E-cigarettes, où l{"'"}innovation et la liberté de vapoter se rencontrent pour créer une expérience de vapotage exceptionnelle. Découvrez notre vaste sélection d{"'"}e-cigarettes de haute qualité, conçues pour répondre aux besoins de tous les amateurs de vapotage, des débutants aux experts. Nous vous invitons à explorer notre collection diversifiée et à choisir l{"'"}e-cigarette qui correspond parfaitement à votre style de vie et à vos préférences.</p>

        {loading ? (
          <div className="flex justify-center items-center h-64 bg-white">
            <div className="advanced-loader">
              <div></div><div></div><div></div><div></div>
            </div>
          </div>
        ) : (
          <>
            <div className="Products grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mb">
              {currentProducts.map((product) => (
                <Link
                  key={product.id}
                  href={{
                    pathname: "/pages/SingleProduct",
                    query: { id: product.id, name: product.name, price: product.originalPrice, image: product.image, description: product.Description, categories: product.Catégories },
                  }}
                  className="single_products border-2 rounded-xl    transition-shadow duration-300 transform hover:scale-105 bg-white"
                  style={{ maxWidth: "320px" }}

                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    className="object-cover w-full rounded-t-lg mb-2"
                    quality={70}
                    loading="lazy"
                  />
                  <h3 className="text-sm font-bold text-black mb-1">{product.name}</h3>
                  <p className=" text-base font-bold">{product.originalPrice}</p>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-10 ">{renderPageNumbers()}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductComponent;