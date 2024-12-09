"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from 'next/image';
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";
import Link from "next/link";

const products = [
 
 
  { id: 2, name: 'KITS AEGIS LEGEND 3 - GEEKVAPE', image: '/kit-aegis-l200-geekvape.webp', originalPrice: '329,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "Lost Vape",Description:"GeekVape Aegis Legend 3 Kit 200W avec Z (Zeus) Fli Tank 5,5 ml est l'avenir du vapotage. Méticuleusement conçu, tant à l’intérieur qu’à l’extérieur, ce mod box innovant établit une nouvelle norme en matière d’intelligence. Dotée de la puce AS Chip 4.0 révolutionnaire, notre fonction de déverrouillage avancée révolutionne votre expérience de vapotage. Avec le mode MEMORY, personnaliser les styles de vapotage n'a jamais été aussi simple. GeekVape Aegis Legend V3 est une version améliorée du kit Geekvape L200 (Aegis Legend 2) 200W. GeekVape Aegis Legend 3 Kit Carrera Edition 230W est l'édition limitée GeekVape Aegis Legend 3. (*Toutes les autres éditions produisent à 200 W Max.)" },
  { id: 3, name: 'Kit Armour Max 220W - New colors - Vaporesso', image: '/kit-armour-max-220w-new-colors-vaporesso (1).webp', originalPrice: '329,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "SX mini",Description:"Le Kit Armour S Vaporesso est un kit box simple accu 18650/21700 pour une puissance de 100W" },
 
  { id: 5, name: 'KIT AEGIS TOUCH T200 - GEEKVAPE', image: '/kit-aegis-touch-t200-geekvape.webp', originalPrice: '329,000 TND', Catégories: "Kit Box", Disponibilité: "En stock", Marque: "VOOPOO",Description:"Le modèle Aegis TOUCH T200 combine spécifiquement un écran tactile élégant avec une puissance maximale de 200 watts" },
  
  { id: 7, name: 'Kit Armour S 100W - New colors - Vaporesso', image: '/kit-armour-s-100w-new-colors-vaporesso.webp', originalPrice: '269,000 TND', Catégories: "Kit Box", Disponibilité: "En stock" , Marque: "Vaporesso",Description:"Le Kit Armour S Vaporesso est un kit box simple accu 18650/21700 pour une puissance de 100W"},

  { id: 10, name: 'KIT CENTAURUS M200 - LOST VAPE', image: '/kit-centaurus-m200-lost-vape.webp', originalPrice: '329,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "LOST VAPE",Description:"Ce kit Centaurus M200 associe la splendide et puissante box Centaurus M200 avec le clearomiseur Centaurus Sub Ohm Tank" },
  { id: 11, name: 'KIT Z200 200W - GEEKVAPE', image: '/kit-z200-200w-geekvape.webp', originalPrice: '299,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "Geekvape",Description:"GEEKVAPE COMBINE LA BOX Z200 ET LE CLEAROMISEUR Z SUBOHM 2021 POUR OFFRIR UN KIT HORS NORME"},
  { id: 12, name: 'KIT DRAG 4 VOOPOO', image: '/kit-drag-4-voopoo.webp', originalPrice: '309,000 TND', Catégories: "Pod", Disponibilité: "En stock", Marque: "VOOPOO",Description:"La Box Drag 4 de VOOPOO est un mod double accu qui nécessite la mise en place de deux accumulateurs au format 18650" },
 
  { id: 14, name: 'KIT AEGIS L200 GEEKVAPE', image: '/kit-aegis-l200-geekvape.webp', originalPrice: '279,000 TND',Catégories: "Pod",Disponibilité: "En stock", Marque: "Geekvape",Description:"Au sein du Kit Aegis Legend 2, on retrouve une box Aegis Legend 2 fonctionnant avec deux accus 18650 afin d'offrir le maximum d'autonomie" },
 
  { id: 16, name: 'KIT GEN 200 ITANK 2 NEW COLOR - VAPORESSO', image: '/kit-gen-200-itank-2-new-color-vaporesso (1).webp', originalPrice: '249,000 TND',Catégories: "Pod",Disponibilité: "En stock" , Marque: "Vaporesso",Description:"La Box Gen 200 de Vaporesso est un mod électronique de dernière génération qui nécessite la mise en place de deux accus 18650"},
  { id: 17, name: 'KIT TARGET 200 - VAPORESSO', image: '/kit-target-200-vaporesso.webp', originalPrice: '279,000 TND',Catégories: "Pod",Disponibilité: "En stock", Marque: "Vaporesso",Description:"Vaporesso dévoile un kit double accu qui va faire le bonheur des vapoteurs adeptes de cloud chasing" },

 

 
 
 
  { id: 42, name: 'KIT POD DRAG X2 PNP X DTL - VOOPOO', image: '/kit-pod-drag-x2-pnp-x-dtl-voopoo.webp', originalPrice: '229,000 TND',Catégories: "Pod",Disponibilité: "En stock" , Marque: "VOOPOO",Description:"VOOPOO fait le bonheur des amateurs de cigarettes électroniques et propose le Drag X2."},
  { id: 43, name: 'KIT POD DRAG X PNP X VOOPOO', image: '/kit-pod-drag-x-voopoo.webp', originalPrice: '210,000 TND',Catégories: "Pod",Disponibilité: "En stock", Marque: "VOOPOO",Description:"VOOPOO propose une nouvelle version de son fameux kit Drag X. Le kit Drag X PnP X révolutionne l'univers de la cigarette électronique" },
 
  { id: 45, name: 'KIT POD ARGUS PRO 80W VOOPOO', image: '/kit-pod-argus-pro-80w-voopoo.webp', originalPrice: '189,000 TND',Catégories: "Pod",Disponibilité: "En stock", Marque: "VOOPOO",Description:"Le Argus Pro 80W s'équipe d'une batterie intégrée de 3000 mah qui offre une autonomie énorme et permet d'alimenter le chipset Gene.TT." },
  { id: 46, name: 'KIT POD LUXE XR MAX 2800MAH - VAPORESSO', image: '/kit-pod-luxe-xr-max-2800mah-vaporesso.webp', originalPrice: '189,000 TND',Catégories: "Pod",Disponibilité: "En stock", Marque: "Vaporesso",Description:"Vaporesso livre un pod futuriste aux performances impressionnantes. Le Luxe XR Max est un Pod qui intègre une généreuse batterie de 2800 mah." },
 
 
  
 
 
 
 
  { id: 54, name: 'KIT POD DORIC 60 - VOOPOO', image: '/kit-pod-doric-60-voopoo.webp', originalPrice: '119,000 TND'  ,Catégories: "Pod",Disponibilité: "En stock", Marque: "VOOPOO",Description:"Cigarette Électronique Doric 60 VOOPOO Batterie : Batterie intégrée de 2500 mAh pour une autonomie généreuse. Connectivité : Port USB-C pour une charge rapide et une connectivité facilitée. Design : Forme tubulaire pour un..."},
 
  
  { id: 59, name: 'SKY SOLO PLUS', image: '/kit-pod-sky-solo-plus-8ml-vaporesso (1).webp', originalPrice: '139,000 TND' ,Catégories: "Pod",Disponibilité: "En stock", Marque: "Vaporesso",Description:"Le Pod GTX Go 80 offre une généreuse autonomie grâce à une batterie intégrée de 3000 mah ! Terriblement intuitif, le GTX Go 80 de Vaporesso se charge d'ajuster automatiquement la puissance selon la résistance mise en place. Sur..." },
 

  
  { id: 63, name: 'KITS URSA NANO 800MAH - LOST VAPE', image: '/kits-ursa-nano-800mah-lost-vape.webp', originalPrice: '139,000 TND' ,Catégories: "Kit Box",Disponibilité: "En stock", Marque: "LOST VAPE",Description:"SPLENDIDE, PERFORMANT, FACILE À UTILISER. UN DESIGN COMPLÈTEMENT MODERNE ! TAILLE : 100,56 X 24,1 X 14 MM. CAPACITÉ E-LIQUIDE : 2,5 ML. BATTERIE : 800 MAH (INTÉGRÉE). TENSION DE SORTIE : 3,0 V-3,9 V. PLAGE DE PUISSANCE : 5-18 W. AIRFLOW..." },

 
 
  

  
 
  
 
  
 

  { id: 79, name: 'GTX80', image: '/mm.jpeg', originalPrice: '139,000TND', Disponibilité: "En stock", Marque: "VAPORESSO" }

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
                    loading="lazy"
                    quality={70}
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