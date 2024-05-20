import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-b from-primary-1 to-secondary-1 dark:from-primary-2 dark:to-secondary-2 dark:text-font-1 text-black'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
