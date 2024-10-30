'use client';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'; 
import Link from 'next/link'; // Importing Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white text-gray-800 py-3 shadow-md font-bold uppercase tracking-widest">
      <div className="flex justify-center items-center space-x-6">
        {/* WhatsApp Icon */}
        <Link
          href="https://wa.me/21696877429" // WhatsApp link with country code
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-green-500 transition-transform duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" /> {/* WhatsApp icon */}
        </Link>

        {/* Location Icon */}
        <Link
          href="https://www.google.com/maps/place/Vape+hood+El+Kef/@36.1795641,8.710374,17z/data=!3m1!4b1!4m6!3m5!1s0x12fba5001e70c1b7:0x5630204ba4e8805d!8m2!3d36.1795641!4d8.7129489!16s%2Fg%2F11vq7qykzf?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500 transition-transform duration-300 hover:scale-110"
          aria-label="Location"
        >
          <FaMapMarkerAlt className="text-2xl" /> {/* Location icon */}
        </Link>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-red-500 transition-transform duration-300 hover:scale-110">
          <span className="font-semibold">TEL: +216 96 877 429</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Instagram */}
          <Link
            href="https://www.instagram.com/vape.hood.kef/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500 transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </Link>

          {/* Facebook */}
          <Link
            href="https://www.facebook.com/vape.hood.kef"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}
