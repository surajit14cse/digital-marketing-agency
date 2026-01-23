import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
