// components/ProductCard.js
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { id, name, description, price, image, percentage } = product;

  return (
    <motion.div 
      className="product-card group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="product-image">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-all duration-300"
        />
        <div className="product-badge">
          CBD {percentage}
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="product-price">{price}</span>
          <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition text-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Ajouter
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;