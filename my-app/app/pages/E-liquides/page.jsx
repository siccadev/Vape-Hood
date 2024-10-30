"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";


const products = [

  { id: 4, name: 'NOM NOMZ - LEMON MACARON', image: '/nom-nomz-lemon-macaron.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "ECO VAPE" ,Description:"Lemon MacaronL’arôme concentré de Nom Nomz-Lemon Macaron vous invite à une dégustation sucrée. Laissez-vous séduire par des macarons aux bons goûts de citron jaune. Une crème onctueuse saupoudrée de zeste de citron apporte du pep's à cette gourmandise.Ne passez pas à côté de Lemon Macaron pour passer une journée sur un petit nuage sous le signe du macaron!Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 20%Temps de Steep : 15 jours."},
  { id: 5, name: 'CONCENTRÉ GREEN BANANA HIDDEN POTION A&L', image: '/concentre-green-banana-hidden-potion-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:"CONCENTRÉ GREEN BANANA HIDDEN POTIONAvec son concentré Green Banana, A&L nous propose un duo de fruits original, doux et saisissant à la fois ! Pour accompagner de tendres morceaux de bananes bien mûres, le fabricant a sélectionné des kiwis juteux et acidulés qu'il a mélangé à quelques glaçons ! Un mix parfaitement équilibré qui ravira les amateurs de recettes fruitées !Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 5%Temps de Steep : 15 jours." },
  { id: 6, name: 'CONCENTRÉ ALUCARD ULTIMATE SWEET EDITION A&L', image: '/concentre-alucard-ultimate-sweet-edition-al.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:"CONCENTRÉ ALUCARDA&L repart à l'assaut des saveurs gourmandes ! A travers son concentré Alucard Ultimate, le fabricant français A&L permet à tous les vapoteurs de déguster un onctueux et savoureux milkshake. Crémeux, ce dernier cache quelques grains de café, un soupçon de caramel et de sublimes gousses de vanille. Ce milkshake 100% français est accompagné d'un biscuit croquant... Ultimate livre une mixture riche en émotions et en saveurs : merci !Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 9%Temps de Steep : 15 jours." },
  { id: 7, name: 'CONCENTRÉ SHIVA SWEET EDITION 30ML ARÔMES ET LIQUIDES', image: '/concentre-shiva-sweet-edition-30ml-aromes-et-liquides (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:" concentré Shiva Sweet Édition Ultimate Intense, envoûtant ...le concentré Shiva Sweet Édition Ultimate d'A&L donne le ton d'entrée de jeu ! Elaborée avec passion, cette recette ô combien majestueuse nous propose une divine menthe à la fraîcheur saisissante. C'est un jeu d'équilibriste auquel s'est adonné A&L et il en sort vainqueur ! Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 5% Temps de Steep : 7 jours!." },
  { id: 8, name: 'CONCENTRÉ DARK SHIGERI FIGHTER FUEL', image: '/concentre-dark-shigeri-fighter-fuel (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel",Description:" Concentré Dark Shigeri Fighter Fuel Possédant l’âme et la puissance de Shigeri, d’où peut bien lui venir cette aura emplie de ténèbres qui lui donne autant de force? Il puise cette énergie obscure dans le Cassis de Pandémonium.Dosage conseillé : 9% Temps de Steep : 7 jours!." },
  { id: 9, name: 'CONCENTRÉ BLOODY SHIGERI FIGHTER FUEL', image: '/concentre-bloody-shigeri-fighter-fuel (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel" ,Description:" Concentré Bloody Shigeri Fighter Fuel Détenant lui aussi l’âme et la puissance de Shigeri, il possède quand à lui une aura différente… d’où lui vient cette force? Il puise cette énergie ardente dans le Fruit du Dragon cultivé près de Beppu, surnommée la ville des enfers.Dosage conseillé : 9% Temps de Steep : 7 jours!."},
  { id: 10, name: 'CONCENTRÉ ZAKARY FIGHTER FUEL', image: '/concentre-zakary-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel",Description:" Concentré Zakary Fighter Fuel Dans les mystiques montagnes, réside un guerrier sans égal, Zakary. Ce dernier protègerait un sérum rendant toute personne plus forte. Interdite lors des combats, cette concoction à base d’ananas et nectarine serait très bien gardée. Dosage conseillé : 9% Temps de Steep : 7 jours!." },
  { id: 11, name: 'CONCENTRÉ BARRAKO FIGHTER FUEL', image: '/concentre-barrako-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel",Description:"Concentré Barrako Fighter Fuel Une nouvelle mission vient de tomber dans l’agence ! Barrako doit retrouver la mystérieuse “Mentha”, une fiolle contenant des cristaux de menthe de Lakoutsk, qui lui fera vivre la plus givrée des aventures.Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 9% Temps de Steep : 7 jours!." },
  { id: 12, name: 'CONCENTRÉ RAGNAROK X SWEET EDITION ULTIMATE A&L', image: '/concentre-ragnarok-x-sweet-edition-ultimate-al (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate" ,Description:"Ragnarok X Sweet Edition Ultimate d'A&LLe concentré Ragnarok X d'A&L est un must have pour tous les aficionados de mixtures DIY aussi percutantes que réconfortantes ! Grâce à cet arôme, les plus exigeants pourront mettre au point un juice unique qui restitue une sublime barbe à papa. Réconfortante, cette dernière est composée de fruits rouges et de carambole. Ce fruit méconnu se démarque par ses notes sucrées et légèrement acidulées. A&L a ensuite ajouté une bonne dose de fraîcheur ! Le créateur français se montre toujours pus créatif et nous permet de vivre une expérience succulente. Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 9% Temps de Steep : 7 jours!." },
  { id: 13, name: 'CONCENTRÉ LUNA SWEET EDITION ULTIMATE A&L', image: '/concentre-ragnarok-x-sweet-edition-ultimate-al (2).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:"CONCENTRÉ LUNA Sweet Edition Ultimate d'A&L Le concentré Luna mis au point par A&L est une mixture DIY indispensable. Grâce à cet arôme français, tous les utilisateurs de cigarettes électroniques adeptes de DIY pourront profiter d'un mélange ultra-fruité composé de fraises sucrées et de cerises juteuses. Exquis, ces ingrédients sont mariés à une fraîcheur à la puissance renversante. A&L poursuit ses efforts et propose un concentré DIY exemplaire qui assure une aventure gustative fascinante. Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 9% Temps de Steep : 7 jours!." },
  { id: 14, name: 'CONCENTRÉ KAMI ULTIMATE SWEET EDITION ARÔMES ET LIQUIDES', image: '/concentre-kami-ultimate-sweet-edition-aromes-et-liquides.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:"CONCENTRÉ KAMI Sweet Edition Ultimate d'A&LA&L revient dans l'arène avec le succulent concentré DIY Kami de la gamme Ultimate. Adeptes de sensations fortes, les aromaticiens français ont une fois de plus eu recours à une fraîcheur surpuissante. Cette dernière met en valeur les saveurs ensorcelantes des fruits du dragon et des fraises charnues. Terriblement addictif, l'arôme DIY d'A&L offre une avalanche de goûts : un indispensable pour tous les amateurs de mixtures renversantes ! Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. .Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 5% Temps de Steep : 7 jours!." },
  { id: 15, name: 'CONCENTRÉ SPARTACUS SWEET EDITION ULTIMATE A&L', image: '/concentre-spartacus-sweet-edition-ultimate-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate" ,Description:"CONCENTRÉ SPARTACUS Sweet Edition Ultimate d'A&L Si la légende de Spartacus évoque ses nombreuses prouesses guerrières et son courage, personne ne connaît réellement le secret de sa force ! Sauf peut-être A&L qui aurait mis la main sur un manuscrit détaillant la recette d'une potion secrète... Cet élixir, le fabricant a tenté de le reproduire en mélangeant la pulpe de belles nectarines et le jus de quelques citrons. Il a ensuite ajouté l'ingrédient mystère : un souffle de fraîcheur destiné à terrasser les adversaires ! Gagnez en puissance avec le concentré Spartacus Ultimate d'A&L ! Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG.Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 5% Temps de Steep : 7 jours!."},
  { id: 16, name: 'CONCENTRÉ RAGNAROK LEGEND SWEET EDITION ULTIMATE A', image: '/concentre-ragnarok-legend-sweet-edition-ultimate-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "A&L Ultimate",Description:"Ragnarok Legend Sweet Edition Ultimate d'A&L est une potion miraculeuse au sein de laquelle les fruits rouges jouent le premier rôle ! A&L s'est appuyé sur une farandole de fruits rouges à l'acidité transperçante et a accompagné ces dernier de généreux morceaux d'ananas. Terriblement sucrés, ces fruits gorgés de soleil contrebalancent la puissance des petits fruits rouges. La mixture Ultimate d'A&L ne serait rien sans une fraîcheur extrême. Montez à bord du drakkar et partez vers un monde fascinant où les saveurs virevoltent au dessus de nos têtes. Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG.Ajoutez un peu d'arôme si votre taux de VG est plus élevé et inversement.Dosage conseillé : 5% Temps de Steep : 7 jours!." },
  { id: 17, name: 'MILFSMILK V2 ALMOND - 30ML CONCENTRÉ - ECO VAPE', image: '/milfsmilk-v2-almond-30ml-concentre-eco-vape (1).webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "ECO VAPE",Description:"Le Milfsmilk V2 Almond - Concentré 30ml offre une expérience gustative unique, combinant la douceur crémeuse du milkshake avec le croquant des amandes. Chaque bouchée vous transporte à travers un voyage culinaire, explorant les différentes nuances de saveur que peuvent offrir les amandes. Que ce soit les variantes rôties qui apportent une note torréfiée, ou celles simplement cueillies qui conservent leur saveur naturelle et délicate, chaque élément contribue à la richesse de ce concentré. De plus, l'ajout d'amandes aromatisées intensifie l'expérience en ajoutant des notes subtiles et surprenantes. En somme, le Milfsmilk V2 Almond - Concentré 30ml est plus qu'un simple jus : c'est une véritable symphonie de saveurs à savourer." },
  { id: 18, name: 'MILFSMILK V2 BLACKCURRANT - 30ML CONCENTRÉ - ECO VAPE', image: '/milfsmilk-v2-blackcurrant-30ml-concentre-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "ECO VAPE",Description:"Milfsmilk V2 Blackcurrant - Concentré 30ml est bien plus qu'un simple milkshake crémeux ; c'est une expérience gustative unique. Les notes de cassis délicatement équilibrées ajoutent une touche fruitée, apportant vivacité et caractère à chaque bouffée. Chaque goutte de ce concentré a été méticuleusement préparée pour garantir une saveur exceptionnelle et constante. Grâce à son contenant de 30ml, vous pouvez profiter de cette saveur exquise pendant longtemps. En somme, Milfsmilk V2 Blackcurrant - Concentré 30ml offre une combinaison parfaite d'onctuosité et de fraîcheur fruitée, pour un plaisir gustatif inégalé." },
  { id: 19, name: 'MILFSMILK V2 BUTTERSCOTCH - 30ML CONCENTRÉ - ECO VAPE', image: '/milfsmilk-v2-butterscotch-30ml-concentre-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "ECO VAPE",Description:"Le Milfsmilk V2 Butterscotch - Concentré 30ml est un délicieux milkshake combiné avec un doux caramel onctueux pour rehausser cet incroyable goût. Il offre une expérience gustative inégalée, satisfaire même les palais les plus exigeants. L'harmonie parfaite du milkshake crémeux et du caramel sucré dans ce concentré crée une explosion de saveurs à chaque bouffée. Élaboré avec des ingrédients de haute qualité, le Milfsmilk V2 Butterscotch apporte une touche d'élégance et de sophistication à votre pause vapeur quotidienne. C'est un véritable hommage au savoir-faire artisanal, encapsulé dans un flacon pratique de 30 ml." },
  { id: 20, name: 'MILFSMILK V2 PECAN - 30ML CONCENTRÉ - ECO VAPE', image: '/milfsmilk-v2-pecan-30ml-concentre-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "ECO VAPE",Description:"Le Milfsmilk V2 Pecan - Concentré 30ml offre une expérience gustative inoubliable, marquée par l'union harmonieuse du milkshake onctueux et des noix de pécan soigneusement sélectionnées. Chaque gorgée est un délice qui vous transporte dans un univers de saveurs exquises. Les notes de noisette apportent une touche d'originalité au mélange, en le rendant encore plus irrésistible. Ce concentré est parfait pour ceux qui cherchent à éveiller leurs papilles avec un goût riche et complexe. Finalement, le Milfsmilk V2 Pecan - Concentré 30ml est bien plus qu'un simple arôme, il représente l'équilibre parfait entre douceur et caractère." },
  { id: 21, name: 'KOBA CONCENTRE 30ML - KING', image: '/koba-concentre-30ml-king.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "KING",Description:"Plongez dans une aventure gustative avec Koba, le grand guerrier des saveurs qui vous emportera dans un tourbillon de sensations exquises. Ce concentré vous offre un mariage délicat entre la figue de barbarie, un fruit mystérieux aux multiples facettes, et le melon, ajoutant une pointe de fraîcheur à cette expérience gustative unique." },
  { id: 22, name: 'SERIAL CONCENTRÉ 30ML PSYCHO BUNNY', image: '/serial-concentre-30ml-psycho-bunny.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "PSYCHO BUNNY",Description:"Plongez dans l'univers délicieusement terrifiant de la Série Psycho Bunny avec le Concentré Eco Vape 30ML. Conçu par un animal terrifiant doué pour satisfaire même les gourmets les plus exigeants, cette création vous offre une expérience gustative unique. Imaginez un grand bol rempli de céréales rondes aux notes fruitées et acidulées, prêtes à être dévorées. Allez-y, savourez cette délicieuse friandise crémeuse du matin, élue meilleure saveur dessert lors du Vapeshow de Londres en 2017." },
  { id: 23, name: 'WELL BAKED CONCENTRÉ 30ML PSYCHO BUNNY', image: '/well-baked-concentre-30ml-psycho-bunny.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "PSYCHO BUNNY",Description:"Arôme Concentré Psycho Bunny - Saveur Amande CeriseDécouvrez le délicieux arôme concentré Psycho Bunny qui vous transporte dans l'univers gourmand de votre gâteau préféré à chaque bouffée. Une recette inventive et originale qui marie l'amertume douce des amandes, la note fruitée acidulée des cerises, et le goût inimitable d'un gâteau fraîchement sorti du four. Un arôme DIY généreux et gourmet digne des meilleures pâtisseries, le tout sans les calories ! En voulez-vous encore un peu plus ?" },
  { id: 24, name: 'LYCAN GREEN CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-green-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks",Description:"E-liquide Lycan Green - Monster LegendOsez affronter la nature avec l'e-liquide Lycan Green de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange intrépide d'ananas juteux, de coco frais et de kiwi combine sauvagement des arômes intenses pour une expérience de vape pleine de caractère." },
  { id: 25, name: 'LYCAN BLUE CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-blue-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks",Description:"E-liquide Lycan Blue - Monster LegendOsez affronter la nature avec l'e-liquide Lycan Blue de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange intrépide d'ananas juteux, de coco frais et de cassis combine sauvagement des arômes intenses pour une expérience de vape pleine de caractère. Elaboré avec soin, cet e-liquide sauvage est conçu pour satisfaire tous les vapoteurs, qu'ils préfèrent des sensations douces ou des saveurs fruitées fraîches." },
  { id: 26, name: 'LYCAN RED CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-red-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks",Description:"E-liquide Lycan Red - Monster LegendExplorez l'audace de la nature avec l'e-liquide Lycan Red de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange intrépide d'ananas juteux, de coco frais et de pastèque combine sauvagement des arômes intenses pour une expérience de vape pleine de caractère. Elaboré avec soin, cet e-liquide sauvage est conçu pour satisfaire tous les vapoteurs, qu'ils préfèrent des sensations douces ou des saveurs fruitées fraîches." },
  { id: 27, name: 'LYCAN PINK CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-pink-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks" ,Description:"E-liquide Lycan Pink - Monster LegendAffrontez la nature avec audace grâce à l'e-liquide Lycan Pink de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange intrépide d'ananas juteux, de coco frais et de litchi combine sauvagement des arômes intenses pour une expérience de vape pleine de caractère. Elaboré avec soin, cet e-liquide sauvage est conçu pour satisfaire tous les vapoteurs, qu'ils préfèrent des sensations douces ou des saveurs fruitées fraîches."},
  { id: 28, name: 'LYCAN GOLD CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-gold-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks" ,Description:"Osez affronter la nature avec l'e-liquide Lycan Gold de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange audacieux d'ananas juteux, de coco frais et de banane combine sauvagement des arômes intenses pour une vape."},
  { id: 29, name: 'LYCAN YELLOW CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-yellow-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks",Description:"Osez affronter la nature avec l'e-liquide Lycan yellow de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange audacieux d'ananas juteux, de coco frais et de citron combine sauvagement des arômes." },
  { id: 30, name: 'LYCAN ORIGINAL CONCENTRÉ 30ML - MONSTER FREAKS', image: '/lycan-original-concentre-30ml-monster-freaks.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Monster freaks",Description:"Découvrez le Lycan en version Originale de la gamme Monster Legend. Osez affronter la nature avec l'e-liquide Lycan Original de la gamme Monster Legend. Inspiré par la force mystique du loup-garou, ce mélange audacieux d'ananas" }, 
  { id: 31, name: 'COOKIE DOUGH CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/cookie-dough-creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE",Description:"Concentré Cookie Dough par Joe's Juice - Redécouvrez la Gourmandise en DIYExplorez de nouvelles dimensions gourmandes avec le concentré Cookie Dough de Joe's Juice, spécialement conçu pour les passionnés du DIY. Que vous préfériez des cookies au chocolat bien cuits ou moelleux, l'authenticité de ces saveurs fera de cet arôme votre all-day favori." }, 
  { id: 32, name: 'COOKIE DOUGH SALTED CARAMEL CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/cookie-dough-salted-caramel-creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE",Description:"Arôme Concentré Cookie Dough Salted Caramel - Pâte à Cookie et Caramel Salé par Joes JuiceIntroduction : Plongez dans une expérience de DIY divine avec l'arôme concentré Cookie Dough Salted Caramel de Joes Juice. Ce concentré britannique vous offre la fusion parfaite de la pâte à cookie et du caramel salé, une combinaison irrésistible pour une création personnalisée exquise." },
  { id: 33, name: 'STRAWBERRY CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/strawberry-creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE",Description:"Arôme Concentré Strawberry Creme Kong - Biscuit Gourmand, Custard Vanille et Fraise OnctueuseDécouvrez l'apogée de la gourmandise avec notre arôme concentré Strawberry Creme Kong. Ce délicieux mélange marie le croustillant d'un biscuit à la crémosité d'une custard à la vanille, sublimé par des fraises onctueuses parmi les meilleures. Une expérience de vapotage fruitée et gourmande vous attend." },
  { id: 34, name: 'BLUEBERRY CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/blueberry-creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE",Description:"Arôme Concentré Blueberry Creme Kong - Biscuit Gourmand, Custard Vanille et Myrtilles SublimesExplorez une expérience de vapotage exquise avec notre arôme concentré Blueberry Creme Kong. Ce succulent mélange marie le croustillant d'un biscuit à la crémosité d'une custard à la vanille, magnifiquement rehaussé par des myrtilles fraîches. Une symphonie de saveurs gourmandes vous attend." },
  { id: 35, name: 'CARAMEL CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/caramel-creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE",Description:"Arôme Concentré Caramel Creme Kong- Biscuit Gourmand, Custard Vanille et Caramel CoulantLaissez-vous tenter par l'ultime gourmandise avec notre arôme concentré Caramel Creme Kong. Ce délectable mélange marie le croustillant d'un biscuit à la crémosité d'une custard à la vanille, le tout sublimé par un caramel coulant. Une expérience de vape intensément gourmande." },
  { id: 36, name: 'CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/creme-kong-concentre-30ml-joe-s-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE" ,Description:"Arôme Concentré Creme Kong - Biscuit Gourmand et Custard VanillePlongez dans un monde de gourmandise avec notre arôme concentré Creme Kong. Ce délicieux mélange associe le croustillant d'un biscuit à l'onctuosité d'une généreuse custard à la vanille. Une expérience gustative raffinée pour les amateurs de saveurs gourmandes." },
  { id: 37, name: 'LEMON CREME KONG CONCENTRÉ 30ML -JOE-S JUICE', image: '/la-tarte-au-citron-meringuee-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "JOE'S JUICE" ,Description:"Arôme Concentré Lemon Creme Kong - Biscuit Gourmand, Custard Vanille et Zest de CitronDécouvrez une explosion de saveurs gourmandes avec notre arôme concentré Lemon Creme Kong. Un mélange exquis qui marie à la perfection le croustillant d'un biscuit, la richesse d'une custard à la vanille, et la fraîcheur acidulée des zestes de citron. Un véritable délice pour les amateurs de gourmandise."},
  
  { id: 38, name: 'LA TARTE AU CITRON MERINGUÉE CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/la-tarte-au-citron-meringuee-concentre-30ml-la-fabrique-francaise (1).webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"La Fabrique Française - La Tarte au Citron Meringuée 30ml offre une expérience gustative délicieusement acidulée, combinant un mélange de citron et de lime recouvert de meringue sur une superbe croûte sablée." },
  { id: 39, name: 'LÉCLAIR AU CAFÉ CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/l-eclair-au-cafe-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Délicieuse pâtisserie avec sa pâte à choux remplie d'une crème pâtissière accompagné d'extraits de café." },
  { id: 40, name: 'LÎLE FLOTTANTE CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/l-ile-flottante-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE" ,Description:"L'île flottante est un délicieux dessert à base de crème anglaise dans laquelle trempent des blancs d'œufs montés en neige avec un coulis exquis de caramel."},
  { id: 41, name: 'LE PARIS-BREST CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/le-paris-brest-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Pâtisserie traditionnelle française en forme de couronne et composée d'une pâte à choux fourrée d'une crème mousseline pralinée parsemée d'amandes effilées." },
  { id: 42, name: 'LE TIRAMISU CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/le-tiramisu-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Un délicieux dessert au cacao et au café recouvert de son onctueuse crème de mascarpone avec une touche de sucre roux et vanillé !" },
  { id: 43, name: 'CHARLOTTES AUX FRAISES CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/charlottes-aux-fraises-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"La Fabrique Française - La Charlotte aux Fraises 30ml offre une expérience gustative exquise avec son arôme de gâteau à la fraise, sa mousse de fraises fraîches et ses biscuits éponge imbibés de sirop de vanille." },
  { id: 44, name: 'LA PERLE DE COCO CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/la-perle-de-coco-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Délicieuse pâtisserie composée d'un bun de riz gluant, fourré à la crème pâtissière et saupoudré de copeaux de coco et de sucre glace. concentré Perle de Coco est un arôme DIY 30 ml pour faire son liquide cigarette électronique." },
  { id: 45, name: 'LE MILLE FEUILLE CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/le-mille-feuille-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Un mille-feuille percutant de réalisme à vapoter en all-day et sans modération. concentré Le Mille Feuille est un arôme DIY 30 ml pour faire son liquide cigarette électronique fabriqué en France par La Fabrique Française." },
  { id: 46, name: 'LE PTIT BEURRE CONCENTRÉ 30ML - LA FABRIQUE FRANÇAISE', image: '/le-p-tit-beurre-concentre-30ml-la-fabrique-francaise.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: "LA FABRIQUE FRANÇAISE",Description:"Le p’tit beurre est une saveur recréant en e-liquide le célèbre gâteau sec et sablé nanais à la recette simple mais délicieuse mêlant farine." },

  { id: 47, name: 'STRAWBERRY CONCENTRÉ 30ML - JAX CUSTARD', image: '/strawberry-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD" ,Description:"La saveur préférée de la nation; douceur de fraise triée sur le volet mélangée à une crème laitière traditionnelle. Concentré 30ML"},
  { id: 48, name: 'CEREAL CONCENTRÉ 30ML - JAX CUSTARD', image: '/cereal-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD",Description:"Une base de biscuit avec de l'amande, généreusement recouverts d'une crème anglaise. Bouteille de concentré 30ML" },
  { id: 49, name: 'BANANA CONCENTRÉ 30ML - JAX CUSTARD', image: '/banana-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD",Description:"Banane mûrie au soleil, brossée avec du miel doré, grillée à la perfection et étouffée dans une crème vanille moelleuse. Concentré 30ML" },
  { id: 50, name: 'BLUEBERRY CONCENTRÉ 30ML - JAX CUSTARD', image: '/blueberry-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD",Description:"Un arôme de fruits confits une poignée de bleuets naturellement acidulés tomba dans un bol fumant de crème à la vanille crémeuse. Concentré 30ML." },
  { id: 51, name: 'TOBACCO CONCENTRÉ 30ML - JAX CUSTARD', image: '/tobacco-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD" ,Description:"La qualité d'un bon gout de tabac en feuilles entières se marie avec une base de crème pâtissière à la vanille. Bouteille de concentré 30ML."},
  { id: 52, name: 'PEANUT BUTTER CONCENTRÉ 30ML - JAX CUSTARD', image: '/peanut-butter-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD",Description:"Une saveur pour rivaliser avec n'importe quelle tartinade américaine, ce beurre de cacahuète emballe le croquant et la douceur des cacahuète entières dans chaque coup. Concentré 30ML." },
  { id: 53, name: 'FUDGE CONCENTRÉ 30ML - JAX CUSTARD', image: '/fudge-concentre-30ml-jax-custard.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " JAX CUSTARD",Description:"Crémeux. Moelleux. Doux. Inspiré du fudge traditionnel fabriqué dans le Devon et les Cornouailles, ce régal est agrémenté d'une touche de crème pâtissière. Concentré 30ML." },
  { id: 54, name: 'CAPPUCCINO CONCENTRÉ 30ML PSYCHO BUNNY', image: '/cappuccino-concentre-30ml-psycho-bunny.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " PSYCHO BUNNY",Description:"L'Eco Vape Psycho Bunny Cappuccino Concentré 30ML est une version concentrée de cette boisson addictive. Avec son arôme intense de café fraîchement moulu et sa texture crémeuse, il offre une expérience gustative exceptionnelle. " },
  { id: 55, name: 'YELLOW MIRAGE CONCENTRÉ 30ML PSYCHO BUNNYFUDGE CONCENTRÉ 30ML - JAX CUSTARD', image: '/yellow-mirage-concentre-30ml-psycho-bunny.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " PSYCHO BUNNY",Description:"Psycho Bunny remet le couvert avec une recette d’arôme DIY gourmand toujours plus irrésistible ! Cette fois-ci, la fameuse tarte au citron meringuée est à l’honneur pour notre plus grand bonheur ! Alors, réalité ou mirage ? " },
  { id: 56, name: 'PROJET LENNY CONCENTRÉ 30ML - REVOLUTE', image: '/projet-lenny-concentre-30ml-revolute.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " REVOLUTE" ,Description:"Le concentré Projet Lenny de Vape or Diy. Une custard très gourmande avec, sur une base vanillée, des céréales façons corn flakes. Le best-seller de Vape or Diy." },
  { id: 57, name: 'BANANA MILKSHAKE CONCENTRE 30ML- ECO VAPE', image: '/banana-milkshake-concentre-30ml-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " ECO VAPE",Description:"Découvrez le concentré Banana Milkshake d'Eco Vape, un délicieux et onctueux milkshake à la banane pour une pause fruitée et gourmande." },

  { id: 58, name: 'BLUE CONCENTRÉ 30ML - FULL MOON', image: '/blue-concentre-30ml-full-moon.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Full moon" },
  { id: 59, name: 'GREEN CONCENTRÉ 30ML - FULL MOON', image: '/concentre-green-30ml-full-moon.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Full moon",Description:"Green de Full Moon est un juice au citron vert ultra frais , à l'ananas et avec une pointe de gingembre." },
  { id: 60, name: 'ENJOY CONCENTRÉ 30ML - FULL MOON', image: '/enjoy-concentre-30ml-full-moon.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Full moon",Description:"Enjoy de Full Moon est mi fruité mi gourmand avec une explosion de fraîcheur. C'est un mélange de barbe à papa et de fruits bien juteux composés de cerises, cassis, fraises et une touche de citron." },

  { id: 61, name: 'RED WEDDING - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/red-wedding-concentre-30ml-the-medusa-juice.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " The medusa juice" ,Description:"LA NOUVELLE GAMME DE MEDUSA JUICE EST ARRIVÉE ! ☀️ IDEAL POUR L'ÉTÉ ☀️ UN DÉLICIEUX MÉLANGE DE FRAISE & PASTEQUE LE TOUT AVEC LA FRAICHEUR MAGIQUE DE MEDUSA Les conseils de dosage ci-dessous concernent un dosage 50%."},
  { id: 62, name: 'MISTERY - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/mistery-concentre-30ml-the-medusa-juice.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " The medusa juice",Description:"LA NOUVELLE GAMME DE MEDUSA JUICE EST ARRIVÉE ! ☀️ IDEAL POUR L'ÉTÉ ☀️ UN DÉLICIEUX MÉLANGE DE FRAISE & PASTEQUE LE TOUT AVEC LA FRAICHEUR MAGIQUE DE MEDUSA Les conseils de dosage ci-dessous concernent un dosage 50%." },
  { id: 63, name: 'MOJITO - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/mojito-concentre-30ml-the-medusa-juice.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " The medusa juice",Description:"LA NOUVELLE GAMME DE MEDUSA JUICE EST ARRIVÉE ! ☀️ IDEAL POUR L'ÉTÉ ☀️ UN DÉLICIEUX MÉLANGE DE FRAISE & PASTEQUE LE TOUT AVEC LA FRAICHEUR MAGIQUE DE MEDUSA Les conseils de dosage ci-dessous concernent un dosage 50%." },
  { id: 64, name: 'DARK RAINBOW - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/dark-rainbow-concentre-30ml-the-medusa-juice (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " The medusa juice",Description:"LA NOUVELLE GAMME DE MEDUSA JUICE EST ARRIVÉE ! ☀️ IDEAL POUR L'ÉTÉ ☀️ UN DÉLICIEUX MÉLANGE DE FRAISE & PASTEQUE LE TOUT AVEC LA FRAICHEUR MAGIQUE DE MEDUSA Les conseils de dosage ci-dessous concernent un dosage 50%." },
  { id: 65, name: 'PURPLE VODKA - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/purple-vodka-concentre-30ml-the-medusa-juice.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " The medusa juice",Description:"LA NOUVELLE GAMME DE MEDUSA JUICE EST ARRIVÉE ! ☀️ IDEAL POUR L'ÉTÉ ☀️ UN DÉLICIEUX MÉLANGE DE FRAISE & PASTEQUE LE TOUT AVEC LA FRAICHEUR MAGIQUE DE MEDUSA Les conseils de dosage ci-dessous concernent un dosage 50%." },

  { id: 66, name: 'CINEMA V2 - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/cinema-v2-concentre-30ml-the-medusa-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " The medusa juice",Description:"Le Cinéma V2 regroupe de délicieux arômes de pain perdu beurré, de caramel riche et gourmand saupoudré de quelques noix de pécan ! Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG." },
  { id: 67, name: 'CINEMA - CONCENTRE 30ML - THE MEDUSA JUICE', image: '/cinema-30ml-concentre-30ml-the-medusa-juice.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " The medusa juice",Description:"INTENSES NOTES DE VANILLES ALLIÉE A UNE CREME BRÛLÉE, DE POPCORN CARAMELISÉ LE TOUT SUCRÉ A POINT CONCENTRATION 15% Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG." },

  { id: 68, name: 'BANANA MEDLEY CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-banana-medley-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"Profil de saveur: Pâte feuilletée garnie d'une crème crémeuse et de bananes mûres… nom nom. Type de produit: One Shot Transporteur: basé sur PG Variantes de taille: 30 ml Mélange recommandé: 15% Temps de Steep: 14 jours." },
  { id: 69, name: 'WAFFLE STACK CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-waffle-stack-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"NOM NOMZ - Waffle Stack est une délicieuse création de saveur qui capture le goût authentique des gaufres fraîchement préparées. Parfaitement équilibré, ce liquide offre une expérience de vapotage gourmande pour les amateurs." },
  { id: 70, name: 'STRAWBERRY CRUNCH CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-strawberry-crunch-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ" ,Description:"Le concentré Strawberry Crunch de Nom Nomz est une expérience de vapotage succulente. Il associe des saveurs de fraises fraîches à une touche croustillante pour évoquer le goût d'une délicieuse friandise."},
  { id: 71, name: 'OG COOKIE MILK CONCENTRÉ 30ML - NOM NOMZ', image: '/-concentre-og-cookie-milk-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"NOM NOMZ - OG Cookie Milk est une délicieuse création de saveur qui marie la douceur des biscuits avec la richesse du lait. C'est un choix parfait pour les amateurs de saveurs gourmandes et crémeuses." },
  { id: 72, name: 'NANA-S TREAT CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-nana-s-treat-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"Le Nana’s Treat est un e-liquide Anglais de la gamme Nom Nomz. Une crème anglaise accompagnée de citron et de quelques biscuits… que demander de plus ! Pour ce concentré Nana’s Treat, nous conseillons un dosage entre 15% et 20%." },
  { id: 73, name: 'MONKEY BREK CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-monkey-brek-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"Le concentré Monkey Brek de Nom Nomz est une expérience de vapotage exotique et sucrée. Il associe des saveurs de banane mûre et de noix caramélisées pour créer un mélange irrésistible. Une option parfaite pour les amateurs." },
  { id: 74, name: 'CRÉME ANGLAISE CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-creme-anglaise-nom-nomz.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"Crème Anglaise est une création gourmande délectable. Ce liquide offre une crème anglaise veloutée et riche, parfaitement équilibrée pour les amateurs de saveurs douces et onctueuses. " },
  { id: 75, name: 'NUTTER CUSTARD CONCENTRÉ 30ML - NOM NOMZ', image: '/concentre-nutter-custard-nom-nomz-.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " NOM NOMZ",Description:"Deux saveurs gourmandes se retrouvent entremêlées dans ce concentré de folie ! Retrouvez une crème anglaise et un beurre de cacahuètes, onctueux à souhait TEMPS DE STEEP RECOMMANDÉ : 14J." },

  { id: 76, name: 'CONCENTRÉ THE LOVELY OIL - FRUITY FUEL', image: '/concentre-the-lovely-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL" ,Description:"Toute la douceur du cassis et de la cerise dans un liquide... Préparez-vous à un torrent de saveur dans votre bouche ! Les conseils de dosage ci-dessous concernent un dosage 50% PG / 50% VG. "},
  { id: 77, name: 'CONCENTRÉ THE WHITE OIL - FRUITY FUELL', image: '/concentre-the-white-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"Fruity Fuel étanche la soif des vapoteurs et des amateurs de DIY en proposant une délicieuse limonade rafraîchissante." },
  { id: 78, name: 'CONCENTRÉ THE PINK OIL - FRUITY FUEL', image: '/concentre-the-pink-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"Fruity Fuel est un grand nostalgique qui ne perd pas une occasion pour retourner en enfance. Le créateur a mis au point le succulent concentré The Pink Oil : mâchez ce généreux bubble gum légèrement sucré." },
  { id: 79, name: 'CONCENTRÉ THE GREEN OIL - FRUITY FUEL', image: '/concentre-the-diabolo-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL" ,Description:"Fruity Fuel propose un arôme DIY qui débute en douceur. Le concentré The Green dévoile de délicats arômes de pastèques gorgées de soleil."},
  { id: 80, name: 'CONCENTRÉ THE DIABOLO OIL - FRUITY FUEL', image: '/concentre-the-diabolo-oil-fruity-fuel (1).webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"Fruity Fuel joue la carte de la douceur intense avec son concentré The Diabolo Oil. Conçu pour les aficionados de mixtures DIY, l'arôme français retranscrit avec précision une limonade légèrement sucrée à la fraise." },
  { id: 81, name: 'CONCENTRÉ THE WOOKY OIL - FRUITY FUELL', image: '/concentre-the-wooky-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"Fruity Fuel joue avec nos sens et propose un mélange envoûtant où les fruits sont rois. L'arôme concentré The Wooky Oil est une préparation DIY qui combine la délicatesse ensorcelante de la pastèque." },
  { id: 82, name: 'CONCENTRÉ THE YELLOW OIL - FRUITY FUEL', image: '/concentre-the-yellow-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL" ,Description:"L'arôme concentré The Yellow Oil de Fruity Fuel nous invite à croquer dans une délicieuse confiserie sucrée et fruitée. "},
  { id: 83, name: 'CONCENTRÉ THE PURPLE OIL - FRUITY FUEL', image: '/-concentre-the-purple-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"A travers son concentré DIY The Purple Oil, le créateur Fruity Fuel nous octroie une pause riche en émotions. " },
  { id: 84, name: 'CONCENTRÉ THE RED OIL - FRUITY FUEL', image: '/concentre-the-red-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL" ,Description:"Fruity Fuel a demandé à ses meilleurs aromaticiens de concevoir un arôme DIY aux saveurs ultra-réalistes. Le concentré The Red Oil nous plonge dans un monde fascinant et savoureux."},
  { id: 85, name: 'CONCENTRÉ THE BLUE OIL - FRUITY FUEL', image: '/concentre-the-blue-oil-fruity-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " FRUITY FUEL",Description:"Fruity Fuel va changer votre regard sur les fruits avec ce concentré The Blue Oil. Imaginez un grand bol empli de généreux morceaux de melon." },


  { id: 86, name: 'CONCENTRÉ MAWASHI - FIGHTER FUEL', image: '/concentre-mawashi-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Mawashi ne se laisse jamais impressionner, en revanche, c'est elle qui en impose ! La guerrière aux doigts de fée, envoyée par Fighter Fuel, concocte des mixtures addictives destinées à charmer ses adversaires. Avec le concentré Mawashi, qui porte son nom, elle présente une fraîche pitaya accompagnée d'un ingrédient secret qu'on vous laisse le soin de découvrir !" },
  { id: 89, name: 'CONCENTRÉ KUROKO - FIGHTER FUEL', image: '/concentre-kuroko-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Fighter Fuel propose un arôme concentré aux saveurs multiples et à la fraîcheur intense. La préparation DIY Kuroko débute en douceur avec des goûts délicats de fruit du dragon. " },
  { id: 90, name: 'CONCENTRÉ HOGANO - FIGHTER FUEL', image: '/concentre-hogano-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel" ,Description:"Fighter Fuel revient à la charge avec le concentré DIY Hogano. Spécialement conçu pour les amateurs de recettes fruitées fraîches, l'arôme français mélange un jus de grenade ensoleillé, de sublimes fraises charnues et quelques morceaux de mangues à la sucrosité addictive. Ces fruits aux saveurs renversantes sont accompagnés par une fraîcheur intense : Fighter Fuel propose un arôme concentré DIY sans faille !"},
  { id: 91, name: 'CONCENTRÉ MINASAWA - FIGHTER FUEL', image: '/concentre-minasawa-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Fighter Fuel est un fabricant français qui met au point des arômes concentrés exquis. Sa dernière création se nomme Minasawa et permet de retrouver de délicieuses poires croquantes et quelques pommes aux saveurs envoûtantes." },
  { id: 92, name: 'CONCENTRÉ HIZAGIRI - FIGHTER FUEL', image: '/concentre-hizagiri-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Fighter Fuel nous dévoile l'un des plus grands guerriers de la planète vape ! La légende raconte, qu'avant chaque duel, Hizagiri prend quelques gouttes d'un concentré DIY hypnotisant mêlant des fruits rouges, de la grenade." },
  { id: 93, name: 'CONCENTRÉ TOSHIMURA - FIGHTER FUEL', image: '/concentre-toshimura-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel" ,Description:"Fighter Fuel nous présente le grand défenseur des arômes ! Le redoutable Toshimura met tout en oeuvre pour protéger une succulente concoction DIY composée de poires croquantes, de melons sucrés et de grenades aux saveurs."},
  { id: 94, name: 'CONCENTRÉ SEIRYUTO - FIGHTER FUEL', image: '/concentre-seiryuto-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Défenseur de l'authenticité, Fighter Fuel dévoile un mix fruité élaboré dans la plus pure tradition. Pour sublimer ce que la forêt a fait de mieux." },
  { id: 95, name: 'CONCENTRÉ SHIGERI - FIGHTER FUEL', image: '/concentre-shigeri-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Le capitaine Fighter Fuel a ordonné à son équipage, la création d'une recette capable de lui remémorer leur dernière excursion. Sur le pied de guerre, la petite armée a finalement dévoilé le concentré Shigeri." },
  { id: 96, name: 'CONCENTRÉ NAGASHI - FIGHTER FUEL', image: '/concentre-nagashi-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel",Description:"Fighter Fuel propose une mixture DIY savoureuse où les fruits sont associés à une fraîcheur spectaculaire. Pour développer l'arôme concentré Nagashi, les aromaticiens français ont pris possession de fruits rouges au jus sucré." },
  { id: 97, name: 'CONCENTRÉ KANSETSU - FIGHTER FUEL', image: '/concentre-kansetsu-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: "Fighter fuel",Description:"Succombez au souffle givré du concentré Kansetsu ! La ligue Fighter Fuel présente un savoureux duo de fruits du verger, à la douceur apaisante, très vite chassée par une tempête de glace des plus surprenantes ! " },
  { id: 98, name: 'CONCENTRÉ SHAKEN - FIGHTER FUEL', image: '/concentre-shaken-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel",Description:"Combative, Shaken n'hésite pas à sortir les armes pour mettre chaos ses ennemis. Et pour cela elle dégaine le concentré Shaken Fighter Fuel, un trio déstabilisant de fruit du dragon jaune, de melon et de pastèque." },
  { id: 99, name: 'CONCENTRÉ KOBURA - FIGHTER FUELL', image: '/concentre-kobura-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel" ,Description:"Fighter Fuel permet à tous les amoureux du DIY de concevoir une potion succulente et rafraîchissante. L'arôme concentré Kobura est un mélange terriblement savoureux qui combine des myrtilles, des groseilles."},
  { id: 100, name: 'CONCENTRÉ URAKEN - FIGHTER FUEL', image: '/concentre-uraken-fighter-fuel.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " Fighter fuel" ,Description:"La force de Fighter Fuel ? Sa capacité à surgir, là où on ne l'attend pas ! Le combattant est un original et ne fait pas dans la demi-mesure. Avec son concentré Uraken, il nous foudroie les papilles d'un mélange acidulé de fraise."},

  { id: 101, name: 'MILFS MILK CONCENTRE 30ML- ECO VAPE', image: '/milfs-milk-concentre-30ml-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " ECO VAPE",Description:"Déguster un superbe milkshake à la fraise est déjà très plaisant, mais y rajouter des spéculoos, pour les faire tremper et marier les saveurs, c'est une pure gourmandise." },
  { id: 102, name: 'STRAWBERRY MILKSHAKE CONCENTRÉ 30ML - ECO VAPE', image: '/strawberry-milkshake-concentre-30ml-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " ECO VAPE",Description:"Le concentré Strawberry Milkshake 30ml d'ECO VAPE est une explosion de saveur. Un mélange succulent de fraises et de crémeux pour créer un délicieux milkshake à vapoter." },
  { id: 103, name: 'MILFMAN CONCENTRE 30ML- ECO VAPE', image: '/milfman-concentre-30ml-eco-vape.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " ECO VAPE",Description:"Le MILFMAN Concentré 30ml par ECO VAPE est une saveur captivante pour les vapoteurs. Ce concentré offre une expérience de vape intense avec une saveur mélangeant subtilement des notes douces et crémeuses pour une délicieuse satisfaction."  },

  { id: 104, name: 'CONCENTRÉ JIRAYA 30ML ARÔMES ET LIQUIDES', image: '/concentre-jiraya-30ml-aromes-et-liquides.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " A&L Ultimate" ,Description:"Une île flottante légère nappée d'un caramel fondant somptueux !" },
  { id: 105, name: 'CONCENTRÉ NAGATO 30ML ARÔMES ET LIQUIDES', image: '/concentre-nagato-30ml-aromes-et-liquides.webp', originalPrice: '15,000 TND', Catégories: "Arôme Concentré Gourmands", Disponibilité: "En stock", Marque: " A&L Ultimate",Description:"Un pop-corn caramélisé et une crème brûlée sensationnelle !"  },

  { id: 106, name: 'CONCENTRÉ FURY - 30 ML ULTIMATE', image: '/concentre-fury-30-ml-ultimate.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " A&L Ultimate",Description:"Concentré Fury Ultimate. Fury est une explosion de différentes mangues pour un moment rafraîchissant et de plaisir intense !"  },
  { id: 107, name: 'CONCENTRÉ ONI - 30ML ULTIMATE A&L', image: '/concentre-oni-30ml-ultimate-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " A&L Ultimate",Description:"Oni Sweet Edition Ultimate d'A&L est un arôme concentré tout en fraîcheur et en explosivité qui réveillera vos papilles. Un mélange intense aux notes d'agrumes sucrées avec une dominante puissante de citron vert. "  },
  { id: 108, name: 'CONCENTRÉ RAGNAROK - ULTIMATE A&L', image: '/concentre-ragnarok-ultimate-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " A&L Ultimate",Description:"Ragnarok Sweet Edition Ultimate d'A&L est un concentré DIY aux goûts francs et enivrants. Pour concevoir une mixture succulente où le réalisme prime, des fruits rouges ont été mixés pour extraire un jus parfois sucré."  },
  { id: 109, name: 'CONCENTRÉ PHOENIX - ULTIMATE A&L', image: '/concentre-phoenix-ultimate-al.webp', originalPrice: '12,000 TND', Catégories: "Arôme Concentré Fruités", Disponibilité: "En stock", Marque: " A&L Ultimate",Description:"Le phoenix renaît de ses cendres... A&L rend hommage à cet oiseau légendaire à travers son nouveau concentré Ultimate en version Green Edition. Les flammes se sont éteintes et seules les cendres restent."  },

  { id: 110, name: 'E-LIQUIDE DIY AME AME 30ML - LAVA', image: '/e-liquide-diy-ame-ame-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 111, name: 'E-LIQUIDE DIY PROJET LENNY 30ML - LAVA', image: '/e-liquide-diy-projet-lenny-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 112, name: 'E-LIQUIDE DIY STRAWBERRY MACAROON 30ML - LAVA', image: '/e-liquide-diy-strawberry-macaroon-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 113, name: 'E-LIQUIDE DIY LEMON TART 30ML - LAVA', image: '/e-liquide-diy-lemon-tart-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 114, name: 'E-LIQUIDE DIY BLUEBERRY CREME KONG 30ML - LAVA', image: '/e-liquide-diy-blueberry-creme-kong-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 115, name: 'E-LIQUIDE DIY CARAMEL CREME KONG 30ML - LAVA', image: '/e-liquide-diy-caramel-creme-kong-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 116, name: 'E-LIQUIDE DIY CINEMA V2 30ML - LAVA', image: '/e-liquide-diy-cinema-v2-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes." },
  { id: 117, name: 'E-LIQUIDE DIY STRAWBERRY MILKSHAKE 30ML - LAVA', image: '/e-liquide-diy-strawberry-milkshake-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 118, name: 'E-LIQUIDE DIY MILFS MILK 30ML- LAVA', image: '/e-liquide-diy-milfs-milk-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 119, name: 'E-LIQUIDE DIY LE MILLE FEUILLE 30ML - LAVA', image: '/e-liquide-diy-le-mille-feuille-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 120, name: 'E-LIQUIDE DIY LE TIRAMISU 30ML - LAVA', image: '/e-liquide-diy-le-tiramisu-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 121, name: 'E-LIQUIDE DIYLE P-TIT BEURRE 30ML - LAVA', image: '/e-liquide-diyle-p-tit-beurre-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 122, name: 'E-LIQUIDE DIY OG COOKIE MILK 30ML - LAVAL', image: '/e-liquide-diy-og-cookie-milk-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes." },
  { id: 123, name: 'E-LIQUIDE DIY WAFFLE STACK 30ML - LAVA', image: '/e-liquide-diy-waffle-stack-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes." },
  { id: 124, name: 'E-LIQUIDE DIY BANANA MEDLEY 30ML - LAVAL', image: '/e-liquide-diy-banana-medley-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 125, name: 'E-LIQUIDE DIY BANANA MILKSHAKE 30ML- LAVA', image: '/e-liquide-diy-banana-milkshake-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes." },
  { id: 126, name: 'E-LIQUIDE DIY NUTTER CUSTARD 30ML - LAVA', image: '/e-liquide-diy-nutter-custard-30ml-lava.webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes."  },
  { id: 127, name: 'E-LIQUIDE DIY BLUEBERRY CREME KONG 30ML - LAVA', image: '/e-liquide-diy-blueberry-creme-kong-30ml-lava (1).webp', originalPrice: '15,000 TND', Catégories: "DIY Gourmands ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA Une custard triple vanille avec sa crème anglaise, un soupçon de céréales et une fraise extrêmement juteuse. Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs gourmandes." },

  { id: 128, name: 'E-LIQUIDE DIY PURPLE VODKA 30ML - LAVA', image: '/e-liquide-diy-purple-vodka-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 129, name: 'E-LIQUIDE DIY PURPLE 30ML - LAVA', image: '/e-liquide-diy-purple-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 130, name: 'E-LIQUIDE DIY ENJOY 30ML - LAVA', image: '/enjoy-concentre-30ml-full-moon (1).webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA", Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 131, name: 'E-LIQUIDE DIY SHAKEN 30ML - LAVA', image: '/e-liquide-diy-shaken-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA", Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 132, name: 'E-LIQUIDE DIY SHIGERI 30ML - LAVA', image: '/e-liquide-diy-shigeri-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA", Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 133, name: 'E-LIQUIDE DIY Piña Colada 30ML - LAVA', image: '/e-liquide-diy-pina-colada-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA", Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 134, name: 'E-LIQUIDE DIY FURY 30ML - LAVA', image: '/e-liquide-diy-fury-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ."  },
  { id: 135, name: 'E-LIQUIDE DIY ONI 30ML - LAVA', image: '/e-liquide-diy-oni-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ."  },
  { id: 136, name: 'E-LIQUIDE DIY PHOENIX 30ML - LAVA', image: '/e-liquide-diy-phoenix-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA" ,Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ." },
  { id: 137, name: 'E-LIQUIDE DIY RAGNAROK 30ML - LAVA', image: '/e-liquide-diy-ragnarok-30ml-lava.webp', originalPrice: '12,000 TND', Catégories: "DIY Fruités ", Disponibilité: "En stock", Marque: " LAVA",Description:"Laissez-vous tenter par l'ultime gourmandise avec notre E-LIQUIDE DIY LAVA  vous fera voyager à travers une vapeur fraîche et fruitée ! Adopter le DIY Full Moon, c'est choisir l'originalité car leurs recettes sont étonnantes Ce liquide, dosé et stéppé avec soin par Lava, offre une expérience de vapotage raffinée et complexe, idéale pour les amateurs de saveurs fruité ."  },

  { id: 138, name: 'boosters FRAIS 19.90mg 50/50 - NicoFreaks', image: '/boosters-frais-1990mg-5050-nicofreaks.webp', originalPrice: '15,000 TND', Catégories: "boosters ", Disponibilité: "En stock", Marque: " DIY FREAKS" ,Description:"Le Booster 100% Végétal Curieux apporte la nicotine nécessaire à vos e liquides et préparations en DIY. Le booster frais Curieux bénéficie d'une composition 100 % végétale avec un dosage équilibré en 50/50 de propylène glycol et glycérine végétale. Il contient 20 mg/ml de nicotine dans un flacon de 10 ml."},
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
  const [priceRange, setPriceRange] = useState([10, 400]);
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
            min={10}
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
      <h2 className="font-extrabold text-3xl font-sans text-center mb-6" style={{ color: 'red' }}>
          Tous Les Liquides Pour Les Cigarettes Electroniques à Bas Prix en tunisie
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Bienvenue dans notre sélection d{"'"}E-liquides, soigneusement choisie pour satisfaire les passionnés de la vape en Tunisie. Découvrez une gamme diversifiée de saveurs exquises et de marques renommées, conçues pour offrir une expérience de vape unique.
        </p>

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