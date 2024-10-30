"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";
const products = [
  { id: 1, name: 'RÉSISTANCES PNP-X - VOOPOO (x5)', image: '/resistances-pnp-x-voopoo-x5.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VOOPOO" ,Description:"Les résistances PnP X Voopoo sont le nouveau système de résistance compatible avec le réservoir PnP X Pod, le Kit DRAG S2 et DRAG X2, disponible en 0.15ohm, 0.2ohm, 0.3ohm et 0.6ohm VOOPOO " },
  { id: 2, name: 'RÉSISTANCES PNP SERIE VM - VOOPOO (x5)', image: '/resistances-pnp-serie-vm-voopoo-x5.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VOOPOO" ,Description:"Vendues par 5, les PNP SERIE VM sont des résistances développées par VOOPOORésistance VM1 de 0.30 ohm à utiliser entre 32 et 40 watts.Résistance VM4 de 0.60 ohm à utiliser entre 20 et 28 watts.Résistance VM5 de 0.20 ohm à utiliser entre 40 et 60 watts.Résistance VM6 de 0.15 ohm à utiliser entre 60 et 80 watts." },

  { id: 4, name: 'RÉSISTANCES SERIE Z geekvape (x5)', image: '/resistances-serie-z-geekvape-x5.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "Geekvape",Description:"Vendues par 5, les  SERIE Z sont des résistances développées par geekvapeRésistance Z de 0.2 ohm à utiliser entre 70 et 80 watts.Résistance Z de 0.4 ohm à utiliser entre 50 et 60 watts." },

  { id: 8, name: 'RÉSISTANCES GTX VAPORESSO (x5)', image: '/resistances-gtx-vaporesso-x5.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: " VAPORESSO" ,Description:"Vendues par 5, les GTX sont des résistances développées par Vaporesso. Ces dernières sont destinées à être mises en place dans les pods Luxe XR, Gen PT60, Gen PT80S, Target PM80, Target PM80 SE, Luxe PM40, Swag PX80, GTX Go 80, GTX Go 40, Luxe 80, Luxe 80 SE, Gen Air 40 et dans les clearomiseurs iTank X, GTX Pod, GTX 18 et GTX 22 de Vaporesso. Réputé pour proposer des produits de haut vol, Vaporesso n'a pas démérité avec ses résistances GTX. Ces coils offrent une capillarité optimale ! Les GTX garantissent une excellente restitution des saveurs et une production de vapeur phénoménale. Les résistances de Vaporesso se démarquent également par leur durée de vie impressionnante. Les résistances GTX allant de 0.15 à 0.80 ohm possèdent un joint supplémentaire qui réduit sensiblement les risques de fuites ! Vaporesso s'est surpassé et propose des résistances exemplaires : un indispensable pour tous les adeptes de cigarettes électroniques. Résistance GTX Mesh de 0.15 ohm à utiliser entre 60 et 75 watts. Résistance GTX-2 Mesh de 0.20 ohm à utiliser entre 45 et 60 watts. Résistance GTX-2 Mesh de 0.30 ohm à utiliser entre 32 et 45 watts. Résistance GTX-2 Mesh de 0.40 ohm à utiliser entre 26 et 32 watts Résistance GTX Mesh de 0.60 ohm à utiliser entre 20 et 26 watts. Résistance GTX-2 Mesh de 0.80 ohm à utiliser entre 12 et 16 watts. Résistance GTX Regular de 1.2 ohm à utiliser entre 8 et 12 watts." },
  { id: 9, name: 'RÉSISTANCES GTI VAPORESSO (x5)', image: '/resistances-gti-vaporesso-x5 (1).webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VAPORESSO",Description:"Quatre versions sont disponibles : Résistance GTI Mesh de 0.15 ohm à utiliser entre 75 et 90 watts. Résistance GTI Mesh de 0.20 ohm à utiliser entre 60 et 75 watts. Résistance GTI Mesh de 0.40 ohm à utiliser entre 50 et 60 watts. Résistance GTI Mesh de 0.50 ohm à utiliser entre 30 et 40 watts." },
 
  { id: 11, name: 'RÉSISTANCES TPP SERIE DM VOOPOO (x3)', image: '/resistances-tpp-serie-dm-voopoo-x3 (1).webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VOOPOO" ,Description:"Vendues par 5, les TPP SERIE DM sont des résistances développées par VOOPOO .DM1 : 0,15Ω 60-80WDM2 : 0,2Ω 40-60WDM4 : 0,2Ω MAX 40W Compatible Atomiseurs TPP" },
 
  { id: 13, name: 'RÉSISTANCES GT CCELL VAPORESSO (x3)', image: '/resistances-gt-ccell-vaporesso-x3.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VAPORESSO",Description:"Pack renfermant 3 résistances GT du célèbre fabricant Vaporesso. Ces résistances de haut vol sont destinées à être installées sur les clearomiseurs NRG PE, NRG SE ,NRG Tank, SKrr-S, SKrr-S Mini, Fat Rabbit et le kit Cascade One." },
  { id: 14, name: 'RÉSISTANCES GT CCELL2 VAPORESSO (x3)', image: '/resistances-gt-ccell2-vaporesso-x3.webp', originalPrice: '75,000 TND', Catégories: "Mesh", Disponibilité: "En stock", Marque: "VAPORESSO",Description:"Pack renfermant 3 résistances GT du célèbre fabricant Vaporesso. Ces résistances de haut vol sont destinées à être installées sur les clearomiseurs NRG PE, NRG SE ,NRG Tank, SKrr-S, SKrr-S Mini, Fat Rabbit et le kit Cascade One" },
 
 
  { id: 17, name: 'Accu 18650 3000mah / 35A - MXJO', image: '/accu-18650-3000mah-35a-mxjo.webp', originalPrice: '90,000 TND', Catégories: "Accu", Disponibilité: "En stock", Marque: "MXJO",Description:"Il semble que vous partagiez des informations détaillées sur les batteries MXJO 18650 3000 mAh, en mettant l'accent sur leur qualité, leurs performances et leurs caractéristiques techniques. Voici un résumé des points clés que vous avez mentionnés :Caractéristiques des batteries MXJO 18650 3000 mAh :Capacité : 3000 mAhType : IMR 18650Tension de charge : 3,7 +/-0,05 VCourant de décharge continu : 20 ACourant de décharge maximum : 35 ALongueur : 65 mm (+/-0,05) mmDiamètre : 18 mm (+/-0,05) mmCharge standard : CC/CV 1.50A, 4.20 ± 0.05 VPoids : 60 gFabricant : MXJO" },
  { id: 18, name: 'ACCU Efest Purple IMR 18650 - 3500mAh', image: '/dual-core-fused-clapton-prebuilt-coils-10pcs-028ohm-wotofo.webp', originalPrice: '45,000 TND', Catégories: "Accu", Disponibilité: "En stock", Marque: "Efest",Description:"Un accumulateur 18650 très grande capacité (3500 mAh) et pourvu d'une chimie stable (IMR). Idéal pour vos mods et box électroniques à accumulateur simple." },
  { id: 19, name: 'MESH COIL NEXMESH TURBO A1 - WOTOFO', image: '/nexmesh-turbo-a1-wotofo.webp', originalPrice: '39,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "WOTOFO" ,Description:"Les Mesh Style Coils sont des consommables pour l'atomiseur Profile Unity RTA de Wotofo. Ces feuilles de mesh sont fabriquées en Kanthal A1 et ont une vitesse de chauffe rapide et ne se déforment pas."},
  { id: 20, name: 'Coils Ni80 Dual Core Fused Clapton - Hellvape', image: '/coils-ni80-dual-core-fused-clapton-hellvape.webp', originalPrice: '30,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "Hellvape",Description:"Coils pré-faits Dual Core Fused Clapton 0.36Ω (0.18Ω en double) 26*2+36G" },
  { id: 21, name: 'Coils A1 MTL Clapton par 10 - E-Cig Power', image: '/coils-a1-mtl-clapton-par-10-e-cig-power (1).webp', originalPrice: '30,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "E-Cig Power",Description:"Voici l'A1 MTL Clapton X10 de E-Cig Power - votre clé pour réussir vos installations MTL à simple ou double coils. Ce pack de 10 coils préconstruits est conçu pour simplifier votre expérience de vapotage." },
  { id: 22, name: 'ACCU SONY 18650 VTC6 - 3000MAH', image: '/sony-18650-vtc6-3000mah (1).webp', originalPrice: '30,000 TND', Catégories: "Accu", Disponibilité: "En stock", Marque: "SONY",Description:"Sony 18650 VTC6 3000mAh High-drain Battery - 10C 30A 100% produits d'origine Sony. Longue durée de stockage, poids léger et densité d'énergie élevée, utilisés avec la plupart des MOD régulés et mécaniques 18650.Fiche Technique:Modèle: US18650VTC6 Dimensions: 18,2 mm x 64,9 mm Capacité nominale: 3000mAh Tension nominale: 3,6 V Tension de charge maximale: 4,25 V Couper la tension: 2 V Courant de charge maximum continu: 5A (continu); 6A (impulsion) Courant de décharge maximum continu: 30A (avec coupure de température de 80 ° C); 15A Positif: plat Protégé: Non Rechargeable: Oui" },
  { id: 23, name: 'TRI CORE FUSED CLAPTON PREBUILT COILS 0.17ohm 10PCS - WOTOFO', image: '/tri-core-fused-clapton-prebuilt-coils-017ohm-10pcs-wotofo.webp', originalPrice: '30,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "WOTOFO" ,Description:"TRI CORE FUSED CLAPTON PREBUILT COILS 0.17OHM 10PCS - WOTOFO"},
  { id: 24, name: 'FUSED CLAPTON 0,50OHM COILS 10PCS - WOTOFO', image: '/fused-clapton-050ohm-coils-10pcs-wotofo.webp', originalPrice: '30,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "WOTOFO",Description:"FUSED CLAPTON 0,50OHM COILS 10PCS - WOTOFO" },
  { id: 25, name: 'DUAL CORE FUSED CLAPTON PREBUILT COILS 10PCS 0.28OHM - WOTOFO', image: '/dual-core-fused-clapton-prebuilt-coils-10pcs-028ohm-wotofo (1).webp', originalPrice: '30,000 TND', Catégories: "Coil", Disponibilité: "En stock", Marque: "WOTOFO",Description:"DUAL CORE FUSED CLAPTON PREBUILT COILS 10PCS 0.28OHM - WOTOFO" },
 
  
  { id: 28, name: 'ORG - C - Organic Cotton 17g - E-Cig Power', image: '/fiber-n-cotton-v2-fiber-n-cotton.webp', originalPrice: '28,000 TND', Catégories: "Cotton", Disponibilité: "En stock", Marque: "E-Cig Power",Description:"" },
  { id: 29, name: 'Fiber nCotton V2 - Fiber n Cotton', image: '/fiber-n-cotton-v2-fiber-n-cotton (1).webp', originalPrice: '28,000 TND', Catégories: "Cotton", Disponibilité: "En stock", Marque: " N° COTTON" },
  
  { id: 30, name: 'ACCU 18650 25R+ SAMSUNG 2500MAH', image: '/accu-18650-25r-samsung-2500mah.webp', originalPrice: '28,000 TND', Catégories: "Accu", Disponibilité: "En stock", Marque: "SAMSUNG" },
  { id: 31, name: 'PYREX PROFILE RDTA 6.2ML - WOTOFO', image: '/pyrex-profile-rdta-62ml-wotofo.webp', originalPrice: '20,000 TND', Catégories: "PYREX", Disponibilité: "En stock", Marque: "WOTOFO" },
  { id: 32, name: 'PYREX SKY SOLO PLUS VAPORESSO', image: '/pyrex-sky-solo-plus-vaporesso (1).webp', originalPrice: '20,000 TND', Catégories: "RDA", Disponibilité: "En stock", Marque: "VAPORESSO" },
  { id: 33, name: 'Drip tip', image: '/hh.jpeg', originalPrice: '18,000 TND', Catégories: "RDA", Disponibilité: "En stock", Marque: "Drip tip" },
];

const categories = [...new Set(products .map((product) => product.Catégories))];
const marques = [...new Set(products .map((product) => product.Marque))];
const disponibilites = [...new Set(products .map((product) => product.Disponibilité))];

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
      <h2 className="font-extrabold text-3xl  font-sans text-center mb-6" style={{ color: 'red' }}>
          Achetez vos puffs avant qu'il ne soit trop tard
        </h2>
        <p className="text-center text-gray-500 mb-8">Explorez notre sélection soigneusement choisie de puffs, offrant une expérience unique de vapotage.</p>

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