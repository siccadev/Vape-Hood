import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div id='contact' className='bg-gray-900 text-white mt-4'>
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4">
          {/* Follow Us Section */}
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">Suivez-nous</h2>
            <ul className="text-gray-300 font-medium space-y-2">
              <li className="flex items-center">
                <FaFacebook className="mr-2 text-gray-400 hover:text-white transition duration-300" />
                <Link href="https://www.facebook.com/vape.hood.kef" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="flex items-center">
                <FaInstagram className="mr-2 text-gray-400 hover:text-white transition duration-300" />
                <Link href="https://www.instagram.com/vape.hood.kef/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">Contact</h2>
            <ul className="text-gray-300 font-medium space-y-2">
              <li className="flex items-center">
                <AiOutlineMail className="mr-2 text-gray-400 hover:text-white transition duration-300" />
                <Link href="mailto:support@vapehood.com" className="hover:underline">aziztouati102@gmail.com </Link>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-gray-400 hover:text-white transition duration-300" />
                <Link href="https://wa.me/+21696877429" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</Link>
              </li>
            </ul>
          </div>

          {/* Store Location Section */}
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">Notre magasin</h2>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-400 hover:text-white transition duration-300" size={24} />
              <Link href="https://www.google.com/maps/place/Vape+hood+El+Kef/@36.1795641,8.710374,17z/data=!3m1!4b1!4m6!3m5!1s0x12fba5001e70c1b7:0x5630204ba4e8805d!8m2!3d36.1795641!4d8.7129489!16s%2Fg%2F11vq7qykzf?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                Trouvez-nous sur Google Maps
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">FAQ</h2>
            <ul className="text-gray-300 font-medium space-y-2">
              <li>
                <Link href="/pages/About" className="hover:underline">Qu{"'"}est-ce que Vapehood ??</Link>
              </li>
              <li>
                <Link href="/pages/Contact" className="hover:underline">Comment contacter le service client ??</Link>
              </li>
            </ul>
          </div>

          {/* Special Offers Section */}
          <div>
            <h2 className="mb-2 text-sm font-semibold text-gray-400 uppercase">Offres Spéciales</h2>
            <ul className="text-gray-300 font-medium space-y-2">
              <li>
                <Link href="/" className="hover:underline">Notre Offre</Link>
              </li>
              {/* <li>
                <a href="#offer2" className="hover:underline">Offre du jour 2</a>
              </li> */}
            </ul>
          </div>
        </div>

        <hr className="my-4 border-gray-700" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <div className="text-center text-sm text-gray-400">
            © 2024 <a href="/" className="hover:underline text-gray-300">Vapehood</a>. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="https://www.facebook.com/vape.hood.kef" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebook size={24} />
            </Link>
            <Link href="https://www.instagram.com/vape.hood.kef/" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram size={24} />
            </Link>
            <Link href="mailto:aziztouati102@gmail.com " className="text-gray-400 hover:text-white transition duration-300">
              <FaEnvelope size={24} />
            </Link>
            <Link href="https://wa.me/+21696877429" className="text-gray-400 hover:text-white transition duration-300">
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
