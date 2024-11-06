import React from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-12">
      <div className="flex justify-between items-start w-10/12 lg:w-1/2 mx-auto">
        <div className="flex flex-col gap-2">
            <Link to="/privacy" className="font-thin text-md">Privacy Policy</Link>
            <p className="font-thin text-md">&copy; {new Date().getFullYear()} oleh <span className='text-amber-600'>Oemah</span> Studio</p>
        </div>
        <div className="flex gap-4">
            <FaFacebookF className="h-4 w-4 hover:text-blue-700 hover:cursor-pointer" />
            <FaTwitter className="h-4 w-4 hover:text-blue-400 hover:cursor-pointer" />
            <FaYoutube className="h-4 w-4 hover:text-red-600 hover:cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
