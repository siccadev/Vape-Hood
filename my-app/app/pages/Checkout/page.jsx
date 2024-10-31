"use client";
import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Image from "next/image";


const Checkout = () => {
      const [formData, setFormData] = useState({
            gender: "",
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            birthDate: "",
            address: "",
            ville: "",
            codepostal: "",
            offers: false,
            privacyMessage: false,
            newsletter: false,
            termsAccepted: false,
      });

      const [showModal, setShowModal] = useState(false);
      const [errors, setErrors] = useState({});
      const [activeSection, setActiveSection] = useState(1);
      const [cartItems, setCartItems] = useState([]);

      useEffect(() => {
            if (typeof window !== 'undefined') {

                  const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
                  setCartItems(storedCartItems);
            }
      }, []);

      const handleChange = (e) => {
            const { name, value, id, checked } = e.target;

            if (name === "number" && !/^\d*$/.test(value)) {
                  return; // Ignore non-numeric input
            }
            if (name === "codepostal" && (!/^\d*$/.test(value) || value.length > 4)) {
                  return;
            }

            setFormData({
                  ...formData,
                  [name]: id === "checkbox" ? checked : value,
            });

            setErrors({ ...errors, [name]: "" });
      };


      const validateAge = (birthDate) => {
            const today = new Date();
            const birthDateObj = new Date(birthDate);
            const age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDifference = today.getMonth() - birthDateObj.getMonth();

            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
                  return age - 1;
            }
            return age;
      };

      const validateSection1 = () => {
            const { gender, firstName, lastName, number, birthDate } = formData;
            const newErrors = {};

            if (!gender) newErrors.gender = "Veuillez remplir ce champ.";
            if (!firstName) newErrors.firstName = "Veuillez remplir ce champ.";
            if (!lastName) newErrors.lastName = "Veuillez remplir ce champ.";
            if (!number) newErrors.number = "Veuillez remplir ce champ.";
            if (!birthDate) {
                  newErrors.birthDate = "Veuillez remplir ce champ.";
            } else if (validateAge(birthDate) < 21) {
                  newErrors.birthDate = "Vous devez avoir au moins 21 ans.";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
      };

      const validateSection2 = () => {
            const { address, ville, codepostal } = formData;
            const newErrors = {};

            if (!address) newErrors.address = "Veuillez remplir ce champ.";
            if (!ville) newErrors.ville = "Veuillez remplir ce champ.";
            if (!codepostal) newErrors.codepostal = "Veuillez remplir ce champ.";

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
      };

      const toggleSection = (nextSection) => {
            if (nextSection === 2 && !validateSection1()) return;
            if (nextSection === 3 && !validateSection2()) return;

            setActiveSection(nextSection);
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            const newErrors = {};
            if (!formData.firstName) newErrors.firstName = "Veuillez remplir ce champ.";
            if (!formData.lastName) newErrors.lastName = "Veuillez remplir ce champ.";
            if (!formData.number) newErrors.number = "Veuillez remplir ce champ.";
            if (!formData.birthDate) newErrors.birthDate = "Veuillez remplir ce champ.";
            if (!formData.address) newErrors.address = "Veuillez remplir ce champ.";
            if (!formData.ville) newErrors.ville = "Veuillez remplir ce champ.";
            if (!formData.codepostal) newErrors.codepostal = "Veuillez remplir ce champ.";
            if (!formData.gender) newErrors.gender = "Veuillez remplir ce champ.";

            if (Object.keys(newErrors).length > 0) {
                  setErrors(newErrors);
                  return;
            }

            const message = `Nouvelle commande de ${formData.firstName} ${formData.lastName}:
            - Genre: ${formData.gender}
            - Prénom: ${formData.firstName}
            - Nom: ${formData.lastName}
            - E-mail: ${formData.email}
            - Numéro: ${formData.number}
            - Date de naissance: ${formData.birthDate}
            - Adresse: ${formData.address}
            - Ville: ${formData.ville}
            - Codepostal: ${formData.codepostal}
            ------------------
            - Produits:
            ${cartItems.map((item) => `* ${item.name}, Quantité: ${item.quantity}, Prix: ${item.price}TND`).join("\n")}
            ------------------
            Total Produits: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(3)} TND
            ------------------
            Livraison: 8.000 TND
            ------------------
            TOTAL TTC: ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 8)).toFixed(3)} TND`;

            try {
                  const response = await fetch('http://localhost:4000/send-message', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ message })
                  });

                  const data = await response.json();

                  if (data.success) {
                        console.log("Message sent successfully:", data.sid);
                        setShowModal(true);  // Show popup on success
                  } else {
                        console.error("Error sending message:", data.error);
                  }
            } catch (error) {
                  console.error("Error:", error);
            }

            setErrors({});
      };

      return (
            <div className="main-form">
                  <div className="info_form">
                        {/* First Section Header */}
                        <div className="section-header">
                              <span className="step-number">1</span>
                              <span className="step-title">INFORMATIONS PERSONNELLES</span>
                        </div>

                        {/* First Section Content */}
                        {activeSection === 1 && (
                              <form onSubmit={handleSubmit} className="checkout-form">
                                    <h2 className="form-title">Commander en tant qu’invité</h2>

                                    {/* Civilité */}
                                    <div className="form_group">
                                          <label className="form_label">Civilité</label>
                                          <div className="form-radio-group">
                                                <label className="radio-label">
                                                      <input
                                                            type="radio"
                                                            name="gender"
                                                            value="M."
                                                            onChange={handleChange}
                                                            className="form-radio"
                                                      />
                                                      <span>M.</span>
                                                </label>
                                                <label className="radio-label">
                                                      <input
                                                            type="radio"
                                                            name="gender"
                                                            value="Mme"
                                                            onChange={handleChange}
                                                            className="form-radio"
                                                      />
                                                      <span>Mme</span>
                                                </label>
                                          </div>
                                          {errors.gender && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.gender}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Prénom */}
                                    <div className="form_group">
                                          <label htmlFor="firstName" className="form_label">
                                                Prénom <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className={`form_input ${errors.firstName ? "input-error" : ""}`}
                                                placeholder="Prénom"
                                                required
                                          />
                                          {errors.firstName && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.firstName}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Nom */}
                                    <div className="form_group">
                                          <label htmlFor="lastName" className="form_label">
                                                Nom de famille <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className={`form_input ${errors.lastName ? "input-error" : ""}`}
                                                placeholder="Nom de famille"
                                                required
                                          />
                                          {errors.lastName && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.lastName}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Email */}
                                    <div className="form_group">
                                          <label htmlFor="email" className="form_label">
                                                E-mail <span className="required">*</span>
                                          </label>
                                          <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form_input"
                                                placeholder="E-mail"
                                                required
                                          />
                                    </div>

                                    {/* Number */}
                                    <div className="form_group">
                                          <label className="form_label">
                                                Numéro <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="number"
                                                name="number"
                                                value={formData.number}
                                                onChange={handleChange}
                                                className={`form_input ${errors.number ? "input-error" : ""}`}
                                                placeholder="Numéro"
                                                required
                                          />
                                          {errors.number && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.number}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Date de naissance */}
                                    <div className="form_group">
                                          <label htmlFor="birthDate" className="form_label">
                                                Date de naissance
                                          </label>
                                          <input
                                                type="date"
                                                id="birthDate"
                                                name="birthDate"
                                                value={formData.birthDate}
                                                onChange={handleChange}
                                                className={`form_input ${errors.birthDate ? "input-error" : ""}`}
                                                required
                                          />
                                          {errors.birthDate && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.birthDate}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Continue Button */}
                                    <div className="form-group">
                                          <button className="submit-button" type="button" onClick={() => toggleSection(2)}>
                                                Continuer
                                          </button>
                                    </div>
                              </form>
                        )}

                        {/* Second Section Header */}
                        <div className="section-header">
                              <span className="step-number">2</span>
                              <span className="step-title">ADRESSE DE LIVRAISON</span>
                        </div>

                        {/* Second Section Content */}
                        {activeSection === 2 && (
                              <div className="checkout-form">
                                    <h2 className="form-title">Adresse de livraison</h2>

                                    {/* Adresse */}
                                    <div className="form_group">
                                          <label htmlFor="address" className="form_label">
                                                Adresse <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="address"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                placeholder="Adresse"
                                                className={`form_input_more ${errors.address ? "input-error" : ""}`}
                                                required
                                          />
                                          {errors.address && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.address}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Ville */}
                                    <div className="form_group">
                                          <label htmlFor="ville" className="form_label">
                                                Ville <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="ville"
                                                name="ville"
                                                value={formData.ville}
                                                onChange={handleChange}
                                                placeholder="Ville"
                                                className={`form_input_more ${errors.ville ? "input-error" : ""}`}
                                                required
                                          />
                                          {errors.ville && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.ville}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Code postal */}
                                    <div className="form_group">
                                          <label htmlFor="codepostal" className="form_label">
                                                Code postal <span className="required">*</span>
                                          </label>
                                          <input
                                                type="text"
                                                id="codepostal"
                                                name="codepostal"
                                                value={formData.codepostal}
                                                onChange={handleChange}
                                                placeholder="Code postal"
                                                className={`form_input_more ${errors.codepostal ? "input-error" : ""}`}
                                                required
                                          />
                                          {errors.codepostal && (
                                                <div className="error-tooltip">
                                                      <span className="error-message">{errors.codepostal}</span>
                                                </div>
                                          )}
                                    </div>

                                    {/* Continue Button */}
                                    <div className="form-group">
                                          <button className="submit-button" type="button" onClick={() => toggleSection(3)}>
                                                Continuer
                                          </button>
                                    </div>
                              </div>
                        )}



                        <div className="section-header">
                              <span className="step-number">3</span>
                              <span className="step-title">Paiement</span>
                        </div>

                        {/* Third Section Content */}
                        {activeSection === 3 && (
                              <div className="checkout-form">
                                    <h2 className="form-title">Paiement</h2>
                                    <label htmlFor="payment" className="form_label_payment">
                                          Payer comptant à la livraison <span className="required">*</span>
                                    </label>
                                    <div className="form-group">
                                          <button className="submit_button_payment" onClick={handleSubmit} type="button">
                                                Finalisez votre commande
                                          </button>
                                    </div>
                              </div>
                        )}
                  </div>




                  <div className="cart-summary">
                        <h2 className="cart-title">There are {cartItems.length} articles in your cart</h2>
                        {cartItems.length > 0 ? (
                              <div>
                                    <ul className="cart-items">
                                          {cartItems.map((item, index) => (
                                                <li key={index} className="cart-item">
                                                      <div className="cart-item-image">
                                                            <Image src={item.image}
                                                                  alt={item.name}
                                                                  width={250}
                                                                  height={250}
                                                                  quality={70}
                                                                  loading="lazy"
                                                            />
                                                      </div>
                                                      <div className="cart-item-details">
                                                            <p className="item-name">{item.name}</p>
                                                            <p className="item-subtext">{item.subtext}</p>
                                                      </div>
                                                      <div className="cart-item-price-details">
                                                            <p className="item-price">{(item.price).toFixed(3)}TND</p>
                                                            <p className="item-quantity">x{item.quantity}</p>
                                                      </div>
                                                </li>
                                          ))}
                                    </ul>
                                    <div className="cart-total">
                                          <p>Total produits: <span className="total-value">{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(3)} TND</span></p>

                                          <div className="livraison-value">
                                                <p>Total Livraison: <span className="total-value">8.000 TND</span></p>
                                          </div>
                                          <p className="cart-total-ttc">
                                                TOTAL TTC: <span className="total-value">{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 8).toFixed(3)} TND</span>
                                          </p>
                                    </div>
                              </div>
                        ) : (
                              <p>Votre panier est vide.</p>
                        )}
                  </div>



                  {showModal && (
                        <div className="modal-overlay">
                              <div className="modal-content">
                                    <h2>Commande confirmée</h2>
                                    <p>Nous vous contacterons pour confirmer la commande.</p>
                                    <button onClick={() => {
                                          if (typeof window !== 'undefined') {
                                                localStorage.clear();
                                                window.location.href = "/";
                                          }
                                          setShowModal(false);
                                    }}>
                                          Retour à l{"'"}accueil
                                    </button>
                              </div>
                        </div>
                  )}






            </div>
      );
};

export default Checkout;
