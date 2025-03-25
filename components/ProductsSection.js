// components/ProductsSection.js
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Huile CBD Premium",
    description: "Notre huile de CBD 100% naturelle, extraite des meilleures plantes de chanvre cultivées en agriculture biologique.",
    price: "39,90€",
    image: "/huile-cbd.jpg",
    percentage: "10%"
  },
  {
    id: 2,
    name: "Fleurs CBD Bio",
    description: "Fleurs de CBD cultivées naturellement sans pesticides ni produits chimiques, pour une expérience pure et authentique.",
    price: "12,90€",
    image: "/fleur-cbd.jpg",
    percentage: "6%"
  },
  {
    id: 3,
    name: "Infusions CBD Relaxantes",
    description: "Mélange de plantes et de CBD pour favoriser la détente et le bien-être au quotidien.",
    price: "15,90€",
    image: "/infusion-cbd.jpg",
    percentage: "2%"
  },
  {
    id: 4,
    name: "Baume CBD Apaisant",
    description: "Formulé pour soulager localement et hydrater la peau avec la puissance naturelle du CBD.",
    price: "24,90€",
    image: "/baume-cbd.jpg",
    percentage: "3%"
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 px-4 md:px-6 bg-green-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Nos produits CBD</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Des produits CBD de qualité supérieure, soigneusement sélectionnés pour leurs bienfaits et leur pureté.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/produits" 
            className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Voir tous nos produits
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;