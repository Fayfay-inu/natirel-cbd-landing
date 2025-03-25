// components/BenefitsSection.js
import { motion } from 'framer-motion';

const benefits = [
  {
    id: 1,
    title: "100% Naturel",
    description: "Tous nos produits sont fabriqués à partir d'ingrédients naturels, sans additifs ni conservateurs.",
    icon: "🌿"
  },
  {
    id: 2,
    title: "Cultivé en France",
    description: "Notre chanvre est cultivé par des agriculteurs français selon des méthodes respectueuses de l'environnement.",
    icon: "🇫🇷"
  },
  {
    id: 3,
    title: "Testé en laboratoire",
    description: "Tous nos lots sont analysés par des laboratoires indépendants pour garantir leur pureté et leur qualité.",
    icon: "🔬"
  },
  {
    id: 4,
    title: "Sans THC",
    description: "Nos produits contiennent moins de 0,3% de THC, conformément à la législation en vigueur.",
    icon: "✓"
  },
];

const BenefitsSection = () => {
  return (
    <section id="avantages" className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Pourquoi choisir Natirèl CBD</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Notre engagement est de vous offrir des produits CBD de la plus haute qualité, respectueux de votre santé et de l'environnement.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;