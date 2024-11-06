import { Button, Dialog, DialogPanel } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { SiGooglehome } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  let [isOpen, setIsOpen] = useState(true)

  const isActiveRoute = (route) => {
    return route === "/" ? location.pathname === route : location.pathname.startsWith(route);
  };

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="bg-gray-200 font-thin text-md p-12 px-16 fixed top-0 w-full z-20">
      <nav className="flex justify-between items-center mx-auto">
        <Link to="/" className="flex gap-4 items-center text-2xl font-semibold">
            <SiGooglehome className='text-amber-600' />
            <div className='hidden md:flex'><span className='text-amber-600'>Oemah</span> Studio</div>
        </Link>
        <div className="flex-row gap-4 hidden md:flex">
          <Link to="/" className={`hover:text-amber-600 ${isActiveRoute('/') ? 'text-amber-600' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-amber-600 ${isActiveRoute('/about') ? 'text-amber-600' : ''}`}>About</Link>
          <Link to="/service" className={`hover:text-amber-600 ${isActiveRoute('/service') ? 'text-amber-600' : ''}`}>Service</Link>
          <Link to="/contact" className={`hover:text-amber-600 ${isActiveRoute('/contact') ? 'text-amber-600' : ''}`}>Contact</Link>
          <p className="ml-10">021 - 2324812</p>
        </div>
        <IoMenu className='flex md:hidden w-8 h-8' onClick={open} />
      </nav>

      <Dialog open={isOpen} as="div" className="relative z-30" onClose={close}>
        <div className="fixed inset-0 z-30">
            <DialogPanel
              transition
              className="w-full h-screen justify-center items-center flex flex-col bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-4 text-center">
                <Link to="/" className={`text-xl font-semibold hover:text-amber-600 ${isActiveRoute('/') ? 'text-amber-600' : ''}`}>Home</Link>
                <Link to="/about" className={`text-xl font-semibold hover:text-amber-600 ${isActiveRoute('/about') ? 'text-amber-600' : ''}`}>About</Link>
                <Link to="/service" className={`text-xl font-semibold hover:text-amber-600 ${isActiveRoute('/service') ? 'text-amber-600' : ''}`}>Service</Link>
                <Link to="/contact" className={`text-xl font-semibold hover:text-amber-600 ${isActiveRoute('/contact') ? 'text-amber-600' : ''}`}>Contact</Link>
              </div>
              <div className="mt-16">
                <Button
                  className="inline-flex items-center gap-2 bg-black py-1.5 px-6 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-amber-600"
                  onClick={close}
                >
                  Back
                </Button>
              </div>
            </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
};

export default Header;
