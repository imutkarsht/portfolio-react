import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { RiMenu2Fill } from 'react-icons/ri';

const MenuItems = ({ onClick }) => (
  <>
    <Link to="/" onClick={onClick}>
      <li className="text-black dark:text-white">Home</li>
    </Link>
    <Link to="/education" onClick={onClick}>
      <li className="text-black dark:text-white">Education</li>
    </Link>
    <Link to="/skills" onClick={onClick}>
      <li className="text-black dark:text-white">Skills</li>
    </Link>
    <Link to="/projects" onClick={onClick}>
      <li className="text-black dark:text-white">Projects</li>
    </Link>
    <Link to="/contact" onClick={onClick}>
      <li className="text-black dark:text-white">Contact</li>
    </Link>
  </>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-2 dark:bg-slate-900 bg-slate-300 dark:text-white text-black py-3">
        <h1 className="md:text-4xl text-2xl uppercase font-semibold">Utkarsh Tiwari</h1>
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={40} /> : <RiMenu2Fill size={40} />}
        </div>
        <ul className="hidden md:flex items-center justify-center gap-5 text-xl">
          <MenuItems />
        </ul>
      </div>

      
      <div
        className={`fixed top-16 right-0 h-[calc(100%-4rem)] w-3/6 bg-slate-300 dark:bg-slate-900 bg-opacity-95 dark:bg-opacity-95 text-black z-20 border-t-black dark:border-t-white transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col items-end justify-center gap-5 p-5 text-2xl">
          <MenuItems onClick={() => setMenuOpen(false)} />
        </ul>
      </div>
    </>
  );
};

export default Header;
