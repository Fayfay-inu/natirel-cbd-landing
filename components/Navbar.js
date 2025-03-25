// components/Navbar.js
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image 
            src="/logo.png" 
            alt="Natirèl CBD Logo" 
            width={50} 
            height={50}
            className="mr-3"
          />
          <span className={`text-2xl font-bold ${scrolled ? 'text-green-800' : 'text-green-700'}`}>Natirèl CBD</span>
        </motion.div>
        
        {/* Menu mobile */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${scrolled ? 'text-green-800' : 'text-green-700'}`}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Produits', 'Pourquoi nous choisir', 'Témoignages', 'FAQ'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`${scrolled ? 'text-green-800' : 'text-white'} hover:text-green-500 transition`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className={`${scrolled ? 'bg-green-700 text-white' : 'bg-white text-green-700'} hover:bg-green-600 hover:text-white py-2 px-4 rounded-full transition shadow-md`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </nav>
      </div>
      
      {/* Menu mobile ouvert */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-100 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#produits" className="text-green-800 hover:text-green-600 transition">Produits</a>
            <a href="#avantages" className="text-green-800 hover:text-green-600 transition">Pourquoi nous choisir</a>
            <a href="#temoignages" className="text-green-800 hover:text-green-600 transition">Témoignages</a>
            <a href="#faq" className="text-green-800 hover:text-green-600 transition">FAQ</a>
            <a href="#contact" className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition text-center">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;