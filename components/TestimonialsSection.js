// components/TestimonialsSection.js
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sophie L.",
    comment: "Les produits Natirèl CBD ont complètement transformé ma routine bien-être. Je dors mieux et me sens plus détendue.",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas M.",
    comment: "Après des années de recherche pour soulager mes douleurs chroniques, j'ai enfin trouvé une solution naturelle efficace.",
    rating: 5
  },
  {
    id: 3,
    name: "Julie D.",
    comment: "J'apprécie particulièrement la transparence de Natirèl CBD sur l'origine et la qualité de leurs produits.",
    rating: 4
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="py-20 px-4 md:px-6 bg-green-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Ce que nos clients disent</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de nos clients avec les produits Natirèl CBD.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                    stroke={i < testimonial.rating ? "none" : "currentColor"}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">{testimonial.comment}</p>
              <p className="font-medium text-green-800">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;