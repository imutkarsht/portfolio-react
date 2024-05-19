import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen dark:bg-primary-2 bg-primary-1 dark:text-font-1 text-black'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
