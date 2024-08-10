import React, { useState } from 'react';
import Logo from '../../assets/logo.jpeg';
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="shadow-md bg-gray-50 absolute z-40 w-full opacity-80">
            {/* upper section */}
            <div className="bg-white flex flex-wrap justify-between items-center px-4 py-2 sm:px-8 sm:py-4 rounded-full sm:flex hidden">
                {/* Logo */}
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                    <img src={Logo} alt='logo' className='w-16 h-8 sm:w-40 sm:h-[45px]' />
                </a>

                {/* Navigation Links */}
                <div className="hidden sm:flex flex-wrap gap-4">
                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>HOME
                    <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"></div>
                    </a>
                    <Link to="/hastle/about" className="font-bold text-[#800080] text-[17px] group">
                     ABOUT US
                   <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[80px] transition-all duration-500"></div>
                    </Link>

                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>OUR SERVICES
                    <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[115px] transition-all duration-500"></div>
                    </a>
                    <a href='#' className='font-bold text-[#800080] text-[17px] group' >CAREERS
                    <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[70px] transition-all duration-500"></div>
                    </a>
                    <a href='#' className='font-bold text-[#800080] text-[17px] group' >BLOGS
                    <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"></div>
                    </a>
                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>CONTACT US
                    <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[110px] transition-all duration-500"></div>
                    </a>
                </div>

                {/* Subscribe Button */}
                <button className="group relative min-h-[50px] w-40 overflow-hidden border border-white bg-[#800080] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-[#800080] hover:bg-white hover:before:h-full hover:after:h-full rounded-full ">
                    <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 group-hover:before:h-full group-hover:after:h-full"></span>
                    <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-[#800080]">Subscribe</span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="sm:hidden m-4 flex justify-between items-center px-4 py-2 bg-white shadow-md rounded-full">
                <a href="#" className="font-bold text-xl flex items-center">
                    <img src={Logo} alt='logo' className='w-14 h-7' />
                </a>
                <button onClick={toggleMenu} className="text-[#800080]">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaCaretDown size={24} />}
                </button>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className="sm:hidden bg-white shadow-md rounded-xl p-4 mt-2 absolute w-full z-30">
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>HOME</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>ABOUT US</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>OUR SERVICES</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>CAREERS</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>BLOGS</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>CONTACT US</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;

