"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";

const products = [

  { id: 0, name: 'Lost Vape CENTAURUS M200 Box Mod', image: '/nn.webp', originalPrice: '239,000TND', Catégories: "Lost Vape", Disponibilité: "En stock" },
 
  { id: 8, name: 'Box Armour Max 220W - New colors - Vaporesso', image: '/box-armour-max-220w-new-colors-vaporesso.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La box Armour Max 220W est une box double accus, résistante aux chocs grâce à ces matériaux TPU" },
  { id: 9, name: 'BOX AEGIS LEGEND 3 - GEEKVAPE', image: '/box-aegis-legend-3-geekvape (1) - Copy.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende. Et il continue de se surpasser avec des boxs toujours plus innovantes à l'image du mod Aegis L200 ! Fonctionnant avec 2 accus 18650, elle dispose d'une autonomie conséquente et peut monter jusqu'à 200 watts,La Aegis Legend 2 s'inspire de ses ainées. La robustesse est toujours au rendez-vous grâce à un revêtement composé d'aluminium et de silicone. Ces matériaux rendent le mod étanche et plus solide. Vous pouvez partir l'esprit serein avec votre box Aegis Legend 2 !" },
 
  { id: 15, name: 'BOX AEGIS TOUCH T200 - GEEKVAPE', image: '/box-aegis-touch-t200-geekvape (1).webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "GeekVape parvient toujours à surpasser nos attentes. Avec sa box Aegis Touch T200," },
 
  { id: 73, name: 'GEN MAX', image: '/gen.jpeg', originalPrice: '239,000 TND', Disponibilité: "En stock", Marque: "Vaporesso", Catégories: "Box and Mod électronique", Description:"" },

  { id: 18, name: 'BOX Z200 GEEKVAPE', image: '/box-z200-geekvape.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "GEEKVAPE EST UN FABRICANT À L'IMAGINATION DÉBORDANTE QUI DÉVOILE LA NOUVELLE BOX Z200" },
  { id: 19, name: 'BOX AEGIS L200 CLASSIC GEEKVAPE', image: '/box-aegis-l200-classic-geekvape.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Geekvape revient en force avec la Box Aegis L200 Classic ! Présent dans le kit Aegis L200 CLassic" },

 
 
 
  
  { id: 29, name: 'BOX AEGIS L200 GEEKVAPE', image: '/box-aegis-l200-geekvape (1).webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Geekvape", Description: "Il y a bien longtemps que Geekvape est entré dans la légende. Et il continue de se surpasser avec des boxs toujours plus innovantes à l'image du mod Aegis L200" },
  { id: 30, name: 'BOX DRAG 4 VOOPOO', image: '/vaporesso (7).webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "VOOPOO", Description: "Présente dans le kit Drag 4, la Box Drag 4 de VOOPOO se singularise par sa générosité. " },
  { id: 31, name: 'BOX TARGET 200 VAPORESSO', image: '/box-target-200-vaporesso.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "Vaporesso", Description: "La Box Target 200 est la toute dernière nouveauté de Vaporesso au design sobre et raffiné. " },
  { id: 35, name: 'BOX THELEMA QUEST 200W', image: '/box-thelema-quest-200w.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "X-BAR", Description: "La Thelema Quest est une box à double accu 18650 équipée de la puce Quest 2.0 conçue par Lost vape. " },
 
 
  { id: 48, name: 'BOX MVP 220W - DOVPO', image: '/box-mvp-220w-dovpo.webp', originalPrice: '239,000 TND', Catégories: "Box and Mod électronique", Disponibilité: "En stock", Marque: "DOVPO", Description: "La nouvelle Box MVP de Dovpo s'adresse sans détours aux vapoteurs les plus exigeants, qu'ils soient ou non adeptes du reconstructible. " },
 
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
  const [priceRange, setPriceRange] = useState([28, 800]);
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
            max={800}
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
          Boxes votre tank au meilleur prix en tunisie

        </h2>
        <p className="text-center text-gray-500 mb-8">Bienvenue dans notre collection deBoxes, conçue pour les passionnés de la vape en Tunisie. Chez [VapeHood], nous vous proposons une sélection soigneusement choisie de Boxes de qualité.</p>

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