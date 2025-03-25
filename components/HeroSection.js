// components/HeroSection.js
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Fond avec effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Background de nature"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
      </div>
      
      {/* Éléments décoratifs animés */}
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 hidden md:block"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image
          src="/leaf-1.png"
          alt="Feuille décorative"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16 hidden md:block"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Image
          src="/leaf-2.png"
          alt="Feuille décorative"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-4 font-serif">
              La nature <span className="text-green-600">à l'état pur</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Découvrez notre gamme de produits CBD 100% naturels, cultivés avec soin et respect de l'environnement pour votre bien-être quotidien.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a 
                href="#produits" 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos produits
              </motion.a>
              <motion.a 
                href="#apropos" 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent z-10 rounded-2xl"></div>
            <Image
              src="/hero-product.jpg"
              alt="Produit CBD Natirèl"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500 hover:scale-105"
            />
            
            <motion.div 
              className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-green-800 text-sm">
                "Produits d'une qualité exceptionnelle, je ne peux plus m'en passer !"
              </p>
              <p className="text-gray-600 text-xs mt-1">Marie L., cliente fidèle</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;