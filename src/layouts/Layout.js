import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <main className="flex-grow w-full mx-auto mt-32">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
