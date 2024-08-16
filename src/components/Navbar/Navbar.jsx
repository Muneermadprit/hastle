import React, { useState } from 'react';
import Logo from '../../assets/logo.jpeg';
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Track dropdown for "OUR SERVICES"
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Track dropdown in mobile menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleMobileServicesDropdown = () => {
        setIsMobileServicesOpen(!isMobileServicesOpen);
    };

    return (
        <div className="shadow-md bg-gray-50 absolute z-40 w-full opacity-80">
            {/* Upper section for tablets and desktops */}
            <div className="bg-white flex flex-wrap justify-between items-center px-4 py-2 sm:px-8 sm:py-4 rounded-full lg:flex hidden">
                {/* Logo */}
                <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                    <img src={Logo} alt='logo' className='w-16 h-8 sm:w-40 sm:h-[45px]' />
                </a>

                {/* Navigation Links */}
                <div className="hidden lg:flex flex-wrap gap-4">
                    <Link to='/hastle/' className='font-bold text-[#800080] text-[17px] group'>
                        HOME
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"></div>
                    </Link>
                    <Link to="/hastle/about" className="font-bold text-[#800080] text-[17px] group">
                        ABOUT US
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[80px] transition-all duration-500"></div>
                    </Link>

                    {/* OUR SERVICES with Dropdown */}
                    <div className="relative group">
                        <button onClick={toggleServicesDropdown} className="font-bold text-[#800080] text-[17px] flex items-center group">
                            OUR SERVICES
                        </button>
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[115px] transition-all duration-500"></div>
                        {isServicesOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-[#800080] shadow-md rounded-md py-2 z-50">
                                <Link to='/hastle/service1' className='block px-4 py-2 text-white text-[15px] hover:bg-white hover:text-[#800080]'>Daily Support/Visiting Care Services</Link>
                                <Link to='/hastle/service2' className='block px-4 py-2 text-white text-[15px] hover:bg-white hover:text-[#800080]'>Staying Active & Engaged</Link>
                                <Link to='/hastle/service3' className='block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#800080]'>Live-in Care</Link>
                                <Link to='/hastle/service4' className='block px-4 py-2 text-white text-[15px] hover:bg-gray-200 hover:text-[#800080]'>Specialised Care</Link>
                            </div>
                        )}
                    </div>

                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>
                        CAREERS
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[70px] transition-all duration-500"></div>
                    </a>
                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>
                        BLOGS
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[50px] transition-all duration-500"></div>
                    </a>
                    <a href='#' className='font-bold text-[#800080] text-[17px] group'>
                        CONTACT US
                        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-[110px] transition-all duration-500"></div>
                    </a>
                </div>

                {/* Subscribe Button */}
                <button className="group relative min-h-[50px] w-40 overflow-hidden border border-white bg-[#800080] text-white shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 hover:text-[#800080] hover:bg-white hover:before:h-full hover:after:h-full rounded-full">
                    <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-white before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-white after:duration-500 group-hover:before:h-full group-hover:after:h-full"></span>
                    <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-[#800080]">Subscribe</span>
                </button>
            </div>

            {/* Mobile Menu for tablets and below */}
            <div className="lg:hidden m-4 flex justify-between items-center px-4 py-2 bg-white shadow-md rounded-full">
                <a href="#" className="font-bold text-xl flex items-center">
                    <img src={Logo} alt='logo' className='w-14 h-7' />
                </a>
                <button onClick={toggleMenu} className="text-[#800080]">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaCaretDown size={24} />}
                </button>
            </div>

            {/* Dropdown Menu for tablets and below */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white shadow-md rounded-xl p-4 mt-2 absolute w-full z-30">
                    <Link to='/hastle/' className='block py-2 text-[#800080] text-[17px] font-bold'>HOME</Link>
                    <Link to='/hastle/about' className='block py-2 text-[#800080] text-[17px] font-bold'>ABOUT US</Link>
                    
                    {/* OUR SERVICES with Submenu in Mobile */}
                    <div className="block py-2 text-[#800080] text-[17px] font-bold flex justify-between items-center" onClick={toggleMobileServicesDropdown}>
                        OUR SERVICES
                        {isMobileServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    {isMobileServicesOpen && (
                        <div className="ml-4">
                            <Link to='/hastle/service1' className='block py-2 text-[#800080] text-[15px]'>Daily Support/Visiting Care Services</Link>
                            <Link to='/hastle/service2' className='block py-2 text-[#800080] text-[15px]'>Staying Active & Engaged</Link>
                            <Link to='/hastle/service3' className='block py-2 text-[#800080] text-[15px]'>Live-in Care</Link>
                            <Link to='/hastle/service4' className='block py-2 text-[#800080] text-[15px]'>Specialised Care</Link>
                        </div>
                    )}
                    
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>CAREERS</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>BLOGS</a>
                    <a href='#' className='block py-2 text-[#800080] text-[17px] font-bold'>CONTACT US</a>
                </div>
            )}
        </div>
    );
};

export default Navbar;
