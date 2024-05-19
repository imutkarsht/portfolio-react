import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen dark:bg-slate-800 bg-slate-200'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
