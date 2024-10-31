import React, {  Suspense } from "react"; // Import Suspense
import "@/styles/globals.css";
import Product from "@/components/Product";
import ProductHero from "@/components/ProductHero";
import Bnner from "@/components/Bnner"
import Banner from "@/components/Banner"
import Banner1 from '@/components/Banner1'
import Banner2 from '@/components/Banner2'
import Slider from "@/components/Slider";
import Age from "@/components/Age"
import Feedback from '@/components/Feedbacks'
import ie from '../public/vozol-vista-20k-puffs-vanicreame-tobacco.webp';
import ie1 from '../public/vozol-vista-20k-puffs-strawberry-raspberry-cherry.webp'
import ie2 from '../public/vozol-vista-20k-puffs-strawberry-mango.webp'
import ie3 from '../public/vozol-vista-20k-puffs-sour-apple-ice.webp'
import ie4 from '../public/vozol-vista-20k-puffs-raspberry-watermelon.webp'
import ie5 from '../public/vozol-vista-20k-puffs-peach-mango-watermelon.webp'
import ie6 from '../public/ice-collection-essential-rda-limited-edition-reload-vapor.webp'
import ie7 from '../public/reload-s-ice-collection-le-rda-reload-vapor.webp'
import ie8 from '../public/atomiseur-reload-24-rta-reload-vapor.webp'
import ie9 from '../public/blotto-singel-coil-rta-5ml-dovpo.webp'
import ie10 from '../public/cartouche-2ml-rba-pour-aegis-boost-geekvape-contenance-2ml.webp'
import ie11 from '../public/fat-rabbit-rta-hellvape.webp'
import ie12 from '../public/kits-aegis-legend-3-geekvape.webp'
import ie13 from '../public/kit-armour-max-220w-new-colors-vaporesso.webp'
import ie14 from '../public/kit-armour-s-100w-new-colors-vaporesso.webp'
import ie15 from '../public/kit-centaurus-m200-lost-vape.webp'
import ie16 from '../public/box-aegis-touch-t200-geekvape.webp'
import ie17 from '../public/kit-gen-200-itank-2-new-color-vaporesso.webp'
import ie18 from '../public/base-5050-vape-or-diy-.webp'
import ie19 from '../public/concentre-dark-shigeri-fighter-fuel.webp'
import ie20 from '../public/concentre-bloody-shigeri-fighter-fuel.webp'
import ie21 from '../public/milfsmilk-v2-almond-30ml-concentre-eco-vape.webp'
import ie22 from '../public/concentre-ragnarok-x-sweet-edition-ultimate-al.webp'
import ie23 from '../public/concentre-shiva-sweet-edition-30ml-aromes-et-liquides.webp'
import ie24 from '../public/chargeur-power-bank-pb2s-xtar.webp'
import ie25 from '../public/resistances-tpp-serie-dm-voopoo-x3.webp'
import ie26 from '../public/resistances-gti-vaporesso-x5.webp'
import ie27 from '../public/sony-18650-vtc6-3000mah.webp'
import ie28 from '../public/coils-a1-mtl-clapton-par-10-e-cig-power.webp'
import ie29 from '../public/pyrex-sky-solo-plus-vaporesso.webp'

import Offre from '../components/Offre'
import Part from '../components/Part'

const Home = () => {


  return (
    <Suspense>

    <div>
      <Age />
      <Offre />
      <Slider />
      <Product  vapedata={[
        
        {
          image: ie,
          title: "VOZOL VISTA 20k PUFFS Vanicreame Tobacco ",

        },
        {
          image: ie1,
          title: "VOZOL VISTA 20k PUFFS Strawberry Raspberry Cherry ",

        },
        {
          image: ie2,
          title: "VOZOL VISTA 20k PUFFS Strawberry Mango ",

        },
        {
          image: ie3,
          title: "VOZOL VISTA 20k PUFFS Sour Apple Ice ",

        },
        {
          image: ie4,
          title: "VOZOL VISTA 20k PUFFS Raspberry Watermelon ",

        },
        {
          image: ie5,
          title: "VOZOL VISTA 20k PUFFS Peach Mango Watermelon ",

        },

      ]} 
      />


      <Banner videoLink="/featured-page" />
      <ProductHero Heroheading="découvrez notre" linkurl='pages/Puffs' SubHeroheading="PUFFS" vapedata={[
        {
          image: ie,
          title: "VOZOL VISTA 20k PUFFS Vanicreame Tobacco ",

        },
        {
          image: ie1,
          title: "VOZOL VISTA 20k PUFFS Strawberry Raspberry Cherry ",

        },
        {
          image: ie2,
          title: "VOZOL VISTA 20k PUFFS Strawberry Mango ",

        },
        {
          image: ie3,
          title: "VOZOL VISTA 20k PUFFS Sour Apple Ice ",

        },
        {
          image: ie4,
          title: "VOZOL VISTA 20k PUFFS Raspberry Watermelon ",

        },
        {
          image: ie5,
          title: "VOZOL VISTA 20k PUFFS Peach Mango Watermelon ",

        },

      ]}
      />


      {/* <Banner2 videoLink="/featured-page" /> */}
      <ProductHero Heroheading="découvrez notre" linkurl='pages/Attomissseurs' SubHeroheading="ATOMISEURS" vapedata={[
        {
          image: ie6,
          title: "ICE Collection Essential RDA Limited Edition- RELOAD VAPOR ",

        },
        {
          image: ie7,
          title: "RELOAD S ICE COLLECTION LE RDA - RELOAD VAPOR ",

        },
        {
          image: ie8,
          title: "Atomiseur Reload 24 RTA - Reload Vapor",

        },
        {
          image: ie9,
          title: "BLOTTO SINGEL COIL RTA 5ML - DOVPO ",

        },
        {
          image: ie10,
          title: "Cartouche 2ml RBA pour Aegis Boost - GeekVape - Contenance : 2ml ",

        },
        {
          image: ie11,
          title: "FAT RABBIT RTA - HELLVAPEa ",

        },

      ]} />

      {/* <Bnner videoLink="/featured-page" /> */}
      <ProductHero Heroheading="découvrez notre" linkurl='pages/E-cigarettes' SubHeroheading="E-CIGARETTES" vapedata={[
        {
          image: ie12,
          title: "KITS AEGIS LEGEND 3 - GEEKVAPE ",

        },
        {
          image: ie13,
          title: "Kit Armour Max 220W - New colors - Vaporesso ",

        },
        {
          image: ie14,
          title: "Kit Armour S 100W - New colors - Vaporesso ",

        },
        {
          image: ie15,
          title: "KIT CENTAURUS M200 - LOST VAPE ",

        },
        {
          image: ie16,
          title: "BOX AEGIS TOUCH T200 - GEEKVAPE ",

        },
        {
          image: ie17,
          title: "KIT GEN 200 ITANK 2 NEW COLOR - VAPORESSO ",

        },

      ]} />


      {/* <Banner1 videoLink="/featured-page" /> */}
      <ProductHero Heroheading="découvrez notre" linkurl='pages/E-liquides' SubHeroheading="E-LIQUIDES" vapedata={[
        {
          image: ie18,
          title: "BASE 50/50 VAPE OR DIY ",

        },
        {
          image: ie19,
          title: "CONCENTRÉ DARK SHIGERI FIGHTER FUEL ",

        },
        {
          image: ie20,
          title: "CONCENTRÉ BLOODY SHIGERI FIGHTER FUEL ",

        },
        {
          image: ie21,
          title: "MILFSMILK V2 ALMOND - 30ML CONCENTRÉ - ECO VAPE ",

        },
        {
          image: ie22,
          title: "CONCENTRÉ RAGNAROK X SWEET EDITION ULTIMATE A&L ",

        },
        {
          image: ie23,
          title: "CONCENTRÉ SHIVA SWEET EDITION 30ML ARÔMES ET LIQUIDES ",

        },

      ]} />


      <Part />
      <ProductHero Heroheading="découvrez notre" linkurl='pages/Accessoires' SubHeroheading="ACCESSOIRES" vapedata={[
        {
          image: ie24,
          title: "Chargeur - Power bank rapide PB2S - XTAR",

        },
        {
          image: ie25,
          title: "RÉSISTANCES TPP SERIE DM VOOPOO (x3) ",

        },
        {
          image: ie26,
          title: "RÉSISTANCES GTI VAPORESSO (x5) ",

        },
        {
          image: ie27,
          title: "ACCU SONY 18650 VTC6 - 3000MAH ",

        },
        {
          image: ie28,
          title: "Coils A1 MTL Clapton par 10 - E-Cig Power ",

        },
        {
          image: ie29,
          title: "PYREX SKY SOLO PLUS VAPORESSO ",

        },

      ]} />
      <Feedback />
    </div>
    </Suspense>

  );

};

export default Home;
