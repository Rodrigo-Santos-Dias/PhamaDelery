import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">Farmácia</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Sobre
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contato
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
           
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;