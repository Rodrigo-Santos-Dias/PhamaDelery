import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React from 'react';

interface FooterProps {
    year: number;
  }

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; year ={new Date().getFullYear()} Nome da Farmácia. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          <a href="/" className="text-gray-400 hover:text-white mx-2">
            Home
          </a>
          <a href="/about" className="text-gray-400 hover:text-white mx-2">
            Sobre
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">
            Contato
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FacebookLogo size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <InstagramLogo size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <LinkedinLogo size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;