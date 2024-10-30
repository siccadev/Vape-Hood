"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import "./contact.css"

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    prenom: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendWhatsApp = () => {
    const {prenom, email, message } = formData;
    const phoneNumber = "+21655331742";
    const text = `Nom: ${prenom}\nPrÃ©nom: ${email}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white text-center py-10 px-5 lg:px-20">
      {/* Contact Information */}
      <div className="info-section">
        <div className="info-box">
          <h3>CONTACTEZ-NOUS</h3>
          <p>+216 96 877 429 </p>
          <p>vape.hood.kef@gmail.com </p>
        </div>

        <div className="info-box">
          <h3>ADRESSE</h3>
          <p>Rue Ben Alaya, Le Kef, Tunisia</p>
          {/* <p>contact@gmail.com</p> */}
        </div>

        <div className="info-box">
          <h3>ÉTAIENT OUVERTS</h3>
          <p>Notre magasin a réouvert pour faire du shopping,</p>
          <p>8:00 - 00:00</p>
        </div>
      </div>


      {/* Embedded Google Map */}
      <div className="mt-10  overflow-hidden ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610.2326479843775!2d8.710567653179162!3d36.17956423925641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fba5001e70c1b7%3A0x5630204ba4e8805d!2sVape%20hood%20El%20Kef!5e0!3m2!1sen!2stn!4v1727178061739!5m2!1sen!2stn"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-100 shadow-lg transition-transform duration-300 transform "
        ></iframe>
      </div>

      {/* Contact Form */}



      <div className="mt-10">
        <form className="contact_form_unique bg-white p-6 mx-auto">
          {/* Form Title */}
          <h3 className="contact_form_title text-4xl font-bold text-center mb-16">Contactez Nous</h3>

          {/* Name and Email Row */}
          <div className="contact_form_row flex flex-col sm:flex-row sm:justify-between mb-6">
            {/* Name */}
            <div className="contact_form_name w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
              {/* <label className="contact_form_label block text-gray-700 mb-2">Votre Nom</label> */}
              <input
                placeholder='Votre Nom'
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                className="contact_form_input w-full px-4 py-2 border-b border-gray-800 focus:outline-none focus:border-black transition-all"
                required
              />
            </div>

            {/* Email */}
            <div className="contact_form_email w-full sm:w-1/2 sm:pl-4">
              {/* <label className="contact_form_label block text-gray-700 mb-2">Votre Email</label> */}
              <input
                placeholder='Votre Email'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact_form_input w-full px-4 py-2 border-b border-gray-800 focus:outline-none focus:border-black transition-all"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="contact_form_message mb-6">
            {/* <label className="contact_form_label block text-gray-700 mb-2">Message</label> */}
            <textarea
              placeholder='Message'
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="contact_form_textarea w-full h-32 px-4 py-2 border-b border-gray-800 focus:outline-none focus:border-black transition-all resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="contact_form_submit text-center">
            <button
              type="submit"
              onClick={handleSendWhatsApp}
              className="contact_form_button bg-black text-white py-4 px-8 font-semibold rounded-lg hover:bg-gray-800 transition-all"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>


    </div>
  );
};

export default Contact;