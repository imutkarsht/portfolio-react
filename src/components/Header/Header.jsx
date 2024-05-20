import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom'; 
import { FaTimes } from 'react-icons/fa';
import { RiMenu2Fill } from 'react-icons/ri';
import MenuItems from './MenuItems';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); 

  return (
    <>
      <div className="flex items-center justify-between px-2 py-2  dark:text-white text-black">
        <h1 className="md:text-3xl text-2xl uppercase font-semibold">Utkarsh <span className='text-accent-1 dark:text-accent-2'>Tiwari</span> </h1>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={40} /> : <RiMenu2Fill size={40} />}
        </div>
        <ul className="hidden md:flex items-center justify-center gap-5  text-xl">
          <MenuItems currentPath={location.pathname} />
        </ul>
      </div>

      <div
        className={`fixed top-14 right-0 h-[calc(100%-3.5rem)]  w-3/6 bg-gradient-to-b from-primary-1 to-secondary-1 dark:from-primary-2 dark:to-secondary-2  bg-opacity-60 dark:bg-opacity-60 text-black z-20 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-end justify-center gap-5 p-5 text-2xl">
          <MenuItems onClick={() => setMenuOpen(false)} currentPath={location.pathname} />
        </ul>
      </div>
    </>
  );
};

export default Header;
