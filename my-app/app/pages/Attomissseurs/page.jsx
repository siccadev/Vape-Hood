"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import Slider from 'rc-slider'; // Import slider
import 'rc-slider/assets/index.css';
import "./page.css";

const products = [

  { id: 4, name: 'DEAD RABBIT V3 RTA 6TH ANNIVERSARY - HELLVAPE', image: '/dead-rabbit-v3-rta-6th-anniversary-hellvape (1).webp', originalPrice: '180,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "Hellvape", Description: "Hellvape - Atomiseur Rebirth RTA (Edition Spéciale 6ème Anniversaire)Hellvape célèbre son 6ème anniversaire avec l'édition spéciale de l'Atomiseur Rebirth RTA. D'un diamètre de 25mm, cet atomiseur offre des fonctionnalités exceptionnelles pour une expérience de vape optimale.Caractéristiques du Rebirth RTA (Edition Spéciale) :Plateau Dual Coil Postless : Le Rebirth RTA dispose d'un plateau de construction postless conçu pour des montages en dual coil, offrant une grande flexibilité pour les amateurs de reconstruction. Capacité de Réservoir : Avec des réservoirs bubble de 3.5ml et 5.5ml inclus, le Rebirth RTA assure une capacité de liquide généreuse, minimisant les recharges fréquentes. Design Compact : Les dimensions de 50.5mm x 25.0mm confèrent à cet atomiseur une compacité idéale, assurant une intégration harmonieuse avec une variété de mods. Airflow Réglable : Profitez d'un contrôle total sur votre expérience de vape avec le système d'airflow réglable, vous permettant d'ajuster la quantité d'air pour un tirage personnalisé. Remplissage Par le Haut : Le Rebirth RTA propose un système de remplissage par le haut pratique, facilitant le rechargement du liquide sans nécessiter de démontage complexe. Système Anti-Fuites : Grâce à son système anti-fuites bien pensé, le Rebirth RTA garantit une expérience de vape propre et sans désagréments. Tirage Aérien Optimal : L'atomiseur est conçu pour offrir un tirage aérien permettant la production de nuages de vapeur denses et savoureux. Pourquoi Choisir le Rebirth RTA (Edition Spéciale) : Performance de Reconstruction : Le plateau postless permet une grande variété de montages, offrant aux amateurs de reconstruction la possibilité de personnaliser leur expérience de vape. Polyvalence et Capacité : Les réservoirs inclus offrent une capacité généreuse pour un usage prolongé sans avoir à se soucier des recharges fréquentes. Design Élégant : Avec son design compact et ses finitions de qualité, le Rebirth RTA s'adapte parfaitement à tous les setups. Contrôle de l'Airflow : L'airflow réglable permet une personnalisation précise du tirage, adaptant la vape à vos préférences individuelles. Simplicité d'Utilisation : Le remplissage par le haut et le système anti-fuites font du Rebirth RTA un choix pratique et convivial pour les utilisateurs de tous niveaux. Disponible en Édition Spéciale dès Maintenant : Célébrez le 6ème anniversaire de Hellvape avec l'édition spéciale du Rebirth RTA. Disponible dès maintenant pour les vapoteurs recherchant une performance de reconstruction exceptionnelle et une expérience de vape complète." },
  { id: 5, name: 'PROFILE RDTA - WOTOFO', image: '/profile-rdta-wotofo.webp', originalPrice: '170,000 TND', Catégories: "RDTA", Disponibilité: "En stock", Marque: "WOTOFO", Description: "Profile RDTA - WOTOFO Wotofo nous propose un atomiseur top-coil très polyvalent qui allie puissance et performance avec le Profile RDTA. Le coil se trouvant en haut de l'atomiseur (RDTA) permet une augmentation des saveurs" },
  { id: 6, name: 'PROFILE X RTA - WOTOFO', image: '/profile-x-rta-wotofo.webp', originalPrice: '170,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "WOTOFO", Description: "Wotofo propose un nouvel atomiseur, ultra performant et design. Découvrez le Profite RTA dans une nouvelle version plus polyvalente. Avec le Profile X RTA, vous avez la possibilité d'utiliser un simple ou un double coils." },

  { id: 7, name: 'DEAD RABBIT V3 RTA - HELLVAPE', image: '/dead-rabbit-v3-rta-hellvape.webp', originalPrice: '170,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "Hellvape", Description: "Diamètre de 25mm.Plateau Dual coil Postless.Remplissage simple: (3.5 & 5.5ml bubble).Dimensions: 50.5mm x 25.0mm.Airflow réglable.Remplissage par le haut.Système anti-fuites.Tirage bien large pour un beau nuage de vapeur." },
  { id: 8, name: 'BLOTTO SINGEL COIL RTA 5ML - DOVPO', image: '/blotto-singel-coil-rta-5ml-dovpo (1).webp', originalPrice: '170,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "DOVPO", Description: "Dovpo Blotto Single Coil RTA s'étend sur 23,5 mm de diamètre, fournissant un tube en verre droit de 2,8 ml et un grand tube en verre à bulles de 5 ml. Il est construit en acier inoxydable avec son corps." },


  { id: 11, name: 'ZEUS X RTA GEEKVAPE', image: '/vaporesso (3).webp', originalPrice: '28,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "Geekvape", Description: "Le Zeus X RTA de GeekVape évolue et apporte son lot de nouveauté. Fabuleuse machine à vapeur, cette version du Zeus offre une bien meilleure restitution des saveurs et peut être combiné au plateau Zeus X Mesh Version Build ! Livré en kit : 1 Zeus X RTA 1 tank pyrex de rechange de 5.5 ml 1 lot de joints et de vis de rechange 1 clé multifonctions 1 manuel d'utilisation.", },

  { id: 12, name: 'DEAD RABBIT M RTA - HELLVAPE', image: '/dead-rabbit-m-rta-hellvape.webp', originalPrice: '149,000 TND', Catégories: "RTA", Disponibilité: "En stock", Marque: "Hellvape", Description: "Diamètre de 25mm. Plateau pour mesh coil. Capacité : (3ml & 4.5ml bubble). Dimensions: 46.5mm x 25.0mm. Top airflow réglable. Remplissage par le haut. Système anti-fuites. Parfait pour le cloud chasing.", },


  { id: 15, name: 'ADAPTATEUR 510 POUR DRAG X/DRAG S VOOPOO', image: '/vaporesso (2).webp', Catégories: "RTA", originalPrice: '29,000 TND', Disponibilité: "En stock", Marque: "VOOPOO", Description: "ADAPTATEUR 510 POUR DRAG X/DRAG S VOOPOO" },
  { id: 16, name: 'CARTOUCHES DE REMPLACEMENT TPP VOOPOO', image: '/cartouches-de-remplacement-tpp-voopoo.webp', originalPrice: '28,000 TND', Catégories: "Cartouche de remplacement", Disponibilité: "En stock", Marque: "VOOPOO", Description: "un cartouches de remplacement pour les pods Seal, Drag X, Drag S, Argus Pro, Argus, Argus X, Doric 60 et pour les clearomiseurs TPP Tank et PnP Tank 2 de Voopoo. Utilisées seules" },


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
        <h2 className="font-extrabold text-3xl  font-sans text-center mb-6" style={{ color: 'red' }}>
          Atomiseurs reconstructibles, votre tank au meilleur prix en tunisie

        </h2>
        <p className="text-center text-gray-500 mb-8">Bienvenue dans notre collection d{"'"}atomiseurs, conçue pour les passionnés de la vape en Tunisie. Chez [Nom de votre Boutique], nous vous proposons une sélection soigneusement choisie d{"'"}atomiseurs de qualité, (Atomiseurs Sub-ohm ,RDTA ,RTA et Atomiseurs MTL).</p>

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