"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { CiInstagram } from "react-icons/ci";
import Image from 'next/image';
import vapehood from "../public/vapehood.png";
import { Link as ScrollLink } from 'react-scroll';
import { FaCartShopping } from "react-icons/fa6";
import { PulseLoader } from 'react-spinners';
import './Navbar.css';

const links = [
    { url: "Cart", title: "Cart", link: "/pages/Cart" }
];

const mobileLinks = [
    { url: "Home", title: "Accueil", linkk: "/", image: "/Home.png", size: 30 },
    { url: "E-cigarettes", title: "E-cigarettes", linkk: "/pages/E-cigarettes", image: "/aa.webp", size: 30 },
    { url: "Box", title: "Box", linkk: "/pages/Box", image: "/box.png", size: 20 },
    { url: "Attomissseurs", title: "Attomissseurs", linkk: "/pages/Attomissseurs", image: "/bb.webp", size: 30 },
    { url: "Accessoires", title: "Accessoires", linkk: "/pages/Accessoires", image: "/cc.png", size: 30 },
    { url: "E-liquides", title: "E-liquides", linkk: "/pages/E-liquides", image: "/ddd.png", size: 30 },
    { url: "Puffs", title: "Puffs", linkk: "/pages/Puffs", image: "/vv.png", size: 30 },
    { url: "Cart", title: "Cart", linkk: "/pages/Cart", image: "/cart.png", size: 30 },
    { url: "About", title: "À propos", linkk: "/pages/About", image: "/about.png", size: 20 },
    { url: "Contact", title: "Contactez-nous", linkk: "/pages/Contact", image: "/contact.png", size: 20 },

];

const links2 = [
    { url: "Hero", title: "Accueil", link: "/" },
    { url: "aboutUS", title: "À propos", link: "/pages/About" },
    { url: "contact", title: "Contactez-nous", link: "/pages/Contact" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('#000000');
    const [textColor, setTextColor] = useState('white');
    const [loading, setLoading] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(count);
    }, []);

    const handleNav = () => {
        setNav(!nav);
    };

    const handleLinkClick = (url) => {
        setLoading(true);
        setTimeout(() => {
            window.location.href = url;
        }, 2000);
    };

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [nav]);

    return (
        <div style={{ backgroundColor: `${color}` }} className="shadow-lg w-full h-20 z-[100] ease-in-out duration-300">
            <div className='flex justify-between items-center w-full h-full px-2 cursor-pointer'>
                <Link href="/" passHref>
                    <div className='flex items-center -ml-5 cursor-pointer'>
                        <Image src={vapehood} alt='Vapehood Logo' width={100} />
                        <h1 style={{ color: `${textColor}` }} className='font-bold text-3xl -ml-5'>
                            VapeHood
                        </h1>
                    </div>
                </Link>

                <div className="hidden md:flex -ml-48">
                    <ul style={{ color: `${textColor}` }} className='flex space-x-6'>
                        {links2.map((link) => (
                            <li key={link.url} className='relative group'>
                                <button onClick={() => handleLinkClick(link.link)} className='py-4 text-sm font-bold uppercase tracking-widest leading-none transition-all duration-300 group-hover:scale-105'>
                                    {link.title}
                                </button>
                                <span className='absolute bottom-[10px] left-0 w-0 h-0.5 bg-[#5651e5] transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:flex items-center ">
                    <ul style={{ color: `${textColor}` }} className='flex items-center space-x-6'>
                        {links.map((link) => (
                            <li key={link.url} className='relative group'>
                                {link.title === "Cart" ? (
                                    <Link href={link.link} className='py-4 text-sm font-bold uppercase tracking-widest group-hover:scale-110 transition-transform duration-300 leading-none flex items-center relative'>
                                        <div className="relative">
                                            {cartCount > 0 && (
                                                <span className="absolute -top-3 right-3 bg-red-500 text-white text-xs font-bold rounded-full px-1 -py-4 ">
                                                    {cartCount}
                                                </span>
                                            )}
                                            <FaCartShopping size={25} className='-ml-11' />
                                        </div>
                                    </Link>
                                ) : (
                                    <ScrollLink to={link.url} smooth={true} duration={500} spy={true} exact='true' offset={-70} className='group-hover:underline leading-none'>
                                        {link.title}
                                    </ScrollLink>
                                )}
                                <span className='absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#5651e5] transition-all duration-300 group-hover:w-full'></span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ color: `${textColor}` }} onClick={handleNav} className='md:hidden'>
                    {nav ? <></> : <AiOutlineMenu size={25} className='cursor-pointer' />}
                </div>
            </div>

            {loading && (
                <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
                    <PulseLoader color='#ffffff' size={15} />
                </div>
            )}

            <div className={nav ? 'md:hidden fixed left-0 top-0 bottom-0 w-full h-[100hv] bg-black/70 z-50 ' : ''}>
                <div className={nav ? 'fixed left-0 top-0 bottom-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen no-doc-scroll overflow-y-scroll bg-[#ecf0f3] p-10  duration-500 ' : 'fixed left-[-100%] top-0 p-10  duration-500'}>
                    <div>
                        <div className='flex justify-between items-center '>
                            <Link href="/" passHref>
                                <div className='flex items-center cursor-pointer'>
                                    <Image src={vapehood} className='-ml-8' alt='Vapehood Logo' width={100} />
                                    <h1 className='-ml-5 font-extrabold text-3xl font-sans'>VapeHood</h1>
                                </div>
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 '>
                            <p className='py-4'>Bienvenue chez VapeHood.</p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {mobileLinks.map((link) => (
                                <li key={link.url} className='py-4 text-sm flex items-center cursor-pointer relative'>
                                    <div className="relative">
                                        {link.title === "Cart" && cartCount > 0 && (
                                            <span className="absolute -top-2 -right-0 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                                                {cartCount}
                                            </span>
                                        )}
                                        <Image src={link.image} alt={link.title} width={link.size} height={link.size} className='mr-2' />
                                    </div>
                                    <Link href={link.linkk} onClick={() => setNav(false)} className='text-sm font-bold font-sans'>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className=' mt-7'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>Suivez-nous</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <Link href='https://www.facebook.com/vape.hood.kef' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <FaFacebook />
                                    </div>
                                </Link>
                                <Link href='https://www.instagram.com/vape.hood.kef/' target='_blank'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <CiInstagram />
                                    </div>
                                </Link>
                                <Link href="https://wa.me/96877429" target="_blank">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <FaWhatsapp />
                                    </div>
                                </Link>
                                <Link href="mailto:aziztouati102@gmail.com">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 transition-transform duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
