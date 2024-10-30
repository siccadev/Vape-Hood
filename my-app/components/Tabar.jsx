"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faShoppingCart,
  faEnvelope,
  faInfoCircle,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Tabar.css'; // Import the CSS file for styling

const TabBar = () => {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="tab-bar">
      <div className="tab-bar-content">
        {/* Home */}
        <Link
          href="/"
          className={`flex flex-col items-center text-center transition-colors duration-300 ${pathname === '/' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          aria-label="Home"
        >
          <FontAwesomeIcon icon={faHome} className="tab-icon" />
          <span className="tab-text">Home</span>
        </Link>

        {/* Cart */}
        <Link
          href="/pages/Cart"
          className={`flex flex-col items-center text-center transition-colors duration-300 ${pathname === '/pages/Cart' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          aria-label="Cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="tab-icon" />
          <span className="tab-text">Cart</span>
        </Link>

        {/* Contact */}
        <Link
          href="/pages/Contact"
          className={`flex flex-col items-center text-center transition-colors duration-300 ${pathname === '/pages/Contact' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          aria-label="Contact"
        >
          <FontAwesomeIcon icon={faEnvelope} className="tab-icon" />
          <span className="tab-text">Contact</span>
        </Link>

        {/* About */}
        <Link
          href="/pages/About"
          className={`flex flex-col items-center text-center transition-colors duration-300 ${pathname === '/pages/About' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          aria-label="About"
        >
          <FontAwesomeIcon icon={faInfoCircle} className="tab-icon" />
          <span className="tab-text">About</span>
        </Link>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="tab-item"
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} className="tab-icon" />
          <span className="tab-text">Top</span>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
