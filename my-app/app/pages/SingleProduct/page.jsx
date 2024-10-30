"use client";
import React, { useRef, useState, useEffect } from "react";
import "./SingleProduct.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { throttle } from "lodash";
import Link from "next/link";

const ProductPage = () => {
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [cartTotal, setCartTotal] = useState(0);

    const params = useSearchParams();
    const id = params.get("id");
    const name = params.get("name");
    const price = params.get("price");
    const image = params.get("image");
    const description = params.get("description");
    const categories = params.get("categories");  // Updated to "categories"

    const lensRef = useRef(null);
    const resultRef = useRef(null);

    useEffect(() => {
        if (id && name && price && image && categories) {
            setProduct({
                id: String(id),
                name,
                price: parseFloat(price),
                image,
                description,
                categories, // Updated field name here
            });
        }
    }, [id, name, price, image, description, categories]);

    const handleMouseMove = throttle((e) => {
        const lens = lensRef.current;
        const result = resultRef.current;
        const img = e.target;

        if (!result || !lens || !img) {
            console.error("Missing elements for zoom functionality.");
            return;
        }

        result.style.display = "block";
        lens.style.display = "block";

        const pos = getCursorPos(e, img);
        let lensX = pos.x - lens.offsetWidth / 2;
        let lensY = pos.y - lens.offsetHeight / 2;

        if (lensX > img.width - lens.offsetWidth) lensX = img.width - lens.offsetWidth;
        if (lensX < 0) lensX = 0;
        if (lensY > img.height - lens.offsetHeight) lensY = img.height - lens.offsetHeight;
        if (lensY < 0) lensY = 0;

        lens.style.left = lensX + "px";
        lens.style.top = lensY + "px";

        const cx = result.offsetWidth / lens.offsetWidth;
        const cy = result.offsetHeight / lens.offsetHeight;

        result.style.backgroundImage = `url(${img.src})`;
        result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
        result.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
    }, 10);

    const handleMouseLeave = () => {
        if (lensRef.current && resultRef.current) {
            lensRef.current.style.display = "none";
            resultRef.current.style.display = "none";
        }
    };

    const getCursorPos = (e, img) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return { x: x, y: y };
    };

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleInputChange = (e) => {
        const value = Math.max(1, Number(e.target.value));
        setQuantity(value);
    };

    const addToCart = () => {
        if (!product) {
            console.error("Product data is missing.");
            return;
        }

        console.log("Adding to cart:", product, "Quantity:", quantity);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const newItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
        };

        const existingItemIndex = cart.findIndex((item) => item.name === product.name);

        if (existingItemIndex >= 0) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push(newItem);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="main_section">
            <div>
                <p className="main-title">{product?.name || "Produit"}</p>
                <hr className="hr_line" />
            </div>
            <div className="section1">
                <div className="section1_right">
                    <div
                        className="image-container"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src={product?.image || "/default-image.jpg"}
                            alt={product?.name || "Produit"}
                            width={760}
                            height={500}
                            className="product-image"
                        />
                        <div className="zoom-lens" ref={lensRef}></div>
                        <div className="zoom-result" ref={resultRef}></div>
                    </div>
                </div>

                <div className="section1_left">
                    <h1 className="product-title">{product?.name || "Produit"}</h1>
                    <div className="product-description">
                        <p>
                            Le modèle <span className="highlighted-text">{product?.name || "Produit"}</span> est l'une des séries les plus populaires...
                        </p>
                    </div>
                    <div className="categories">
                        <span className="category-label">Catégories:</span>
                        <span className="category-info">{product?.categories}</span> {/* Updated to categories */}
                    </div>
                    <div className="price-container">
                        <span className="current-price">{product?.price ? `${product.price.toFixed(2)} TND` : "Prix"}</span>
                        <span className="tax-info">TTC</span>
                    </div>
                    <div className="availability">
                        <span className="availability-label">Disponibilité:</span>
                        <span className="availability-status">En Stock</span>
                        <span className="availability-icon">✔️</span>
                    </div>
                    <div className="quantity-cart ">
                        <label className="quantity-label">Quantité:</label>
                        <div className="quantity-controls">
                            <button className="quantity-button" onClick={handleDecrease}>
                                -
                            </button>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleInputChange}
                                className="quantity-input"
                            />
                            <button className="quantity-button" onClick={handleIncrease}>
                                +
                            </button>
                        </div>

                        <button className="add-to-cart" onClick={addToCart}>
                            Ajouter Au Panier
                        </button>
                    </div>
                </div>
            </div>

            <div className="tabs_container">
                <div className="tabs">
                    <button
                        className={`tab-link ${activeTab === "description" ? "active" : ""}`}
                        onClick={() => openTab("description")}
                    >
                        Description
                    </button>
                </div>

                <div
                    id="description"
                    className={`tab-content ${activeTab === "description" ? "active" : ""}`}
                >
                    {product?.description || "description"}
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <div className="popup-header">
                            <span className="popup-title">
                                <i className="icon-check-circle"></i> Produit ajouté au panier avec succès
                            </span>
                            <button className="popup-close" onClick={closePopup}>
                                &times;
                            </button>
                        </div>
                        <div className="popup-content">
                            <div className="popup-product-info">
                                <img src={product?.image || "/default-image.jpg"} alt={product?.name || "Produit"} className="popup-product-image" />
                                <div className="popup-product-details">
                                    <h3>{product?.name || "Produit"}</h3>
                                    <p>Quantité: {quantity}</p>
                                    <p>{product?.price ? `${product.price.toFixed(2)} TND` : "Prix"}</p>
                                </div>
                            </div>
                            <div className="popup-cart-info">
                                <p>Il y a {quantity} articles dans votre panier.</p>
                                <p>Total produits: {cartTotal.toFixed(3)} TND</p>
                                <p>Frais de port: 8.000 TND</p>
                                <p>Total: {(cartTotal + 8).toFixed(3)} TND TTC</p>
                                <div className="popup-actions">
                                    <Link href="/pages/Cart" className="order-button">Commander</Link>
                                    <button className="continue-shopping-button" onClick={closePopup}>
                                        Continuer mes achats
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
