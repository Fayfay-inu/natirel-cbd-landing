// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  // Produits CBD
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

  // Témoignages
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

  // Avantages
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

  // Changer de produit toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <Head>
        <title>Natirèl CBD | Produits CBD Naturels de Qualité</title>
        <meta name="description" content="Découvrez notre gamme de produits CBD 100% naturels. Huiles, fleurs, infusions et cosmétiques de qualité supérieure." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Natirèl CBD Logo" 
              width={50} 
              height={50}
              className="mr-3"
            />
            <span className="text-2xl font-bold text-green-800">Natirèl CBD</span>
          </div>
          
          {/* Menu mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800"
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
            <a href="#produits" className="text-green-800 hover:text-green-600 transition">Produits</a>
            <a href="#avantages" className="text-green-800 hover:text-green-600 transition">Pourquoi nous choisir</a>
            <a href="#temoignages" className="text-green-800 hover:text-green-600 transition">Témoignages</a>
            <a href="#faq" className="text-green-800 hover:text-green-600 transition">FAQ</a>
            <a href="#contact" className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition">Contact</a>
          </nav>
        </div>
        
        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#produits" className="text-green-800 hover:text-green-600 transition">Produits</a>
              <a href="#avantages" className="text-green-800 hover:text-green-600 transition">Pourquoi nous choisir</a>
              <a href="#temoignages" className="text-green-800 hover:text-green-600 transition">Témoignages</a>
              <a href="#faq" className="text-green-800 hover:text-green-600 transition">FAQ</a>
              <a href="#contact" className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition text-center">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
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
          
          <div className="container mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-900 mb-4">
                  La nature <span className="text-green-600">à l'état pur</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Découvrez notre gamme de produits CBD 100% naturels, cultivés avec soin et respect de l'environnement pour votre bien-être quotidien.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="#produits" 
                    className="bg-green-700 hover:bg-green-600 text-white py-3 px-8 rounded-full transition text-center text-lg font-medium shadow-lg hover:shadow-xl"
                  >
                    Découvrir nos produits
                  </a>
                  <a 
                    href="#apropos" 
                    className="bg-white hover:bg-gray-100 text-green-700 border border-green-700 py-3 px-8 rounded-full transition text-center text-lg font-medium"
                  >
                    En savoir plus
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-product.jpg"
                  alt="Produit CBD Natirèl"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section id="avantages" className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-4">Pourquoi choisir Natirèl CBD</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Notre engagement est de vous offrir des produits CBD de la plus haute qualité, respectueux de votre santé et de l'environnement.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Produits */}
        <section id="produits" className="py-20 px-4 md:px-6 bg-green-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-4">Nos produits CBD</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Des produits CBD de qualité supérieure, soigneusement sélectionnés pour leurs bienfaits et leur pureté.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      CBD {product.percentage}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-700">{product.price}</span>
                      <button className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-full transition text-sm">
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/produits" 
                className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
              >
                Voir tous nos produits
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* A propos */}
        <section id="apropos" className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-image.jpg"
                  alt="Culture de chanvre Natirèl CBD"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Notre histoire et notre engagement</h2>
                <p className="text-gray-600 mb-4">
                  Natirèl CBD est né d'une passion pour les bienfaits des plantes et d'une volonté de proposer des produits CBD d'exception, respectueux de la nature et de votre bien-être.
                </p>
                <p className="text-gray-600 mb-4">
                  Nous travaillons en étroite collaboration avec des agriculteurs français engagés dans une démarche éco-responsable, pour vous garantir des produits de la plus haute qualité.
                </p>
                <p className="text-gray-600 mb-6">
                  Notre mission est de démocratiser l'accès au CBD et ses bienfaits, tout en éduquant sur son utilisation responsable et ses atouts pour le bien-être quotidien.
                </p>
                <a 
                  href="/notre-histoire" 
                  className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
                >
                  En savoir plus sur notre histoire
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section id="temoignages" className="py-20 px-4 md:px-6 bg-green-50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-4">Ce que nos clients disent</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Découvrez les expériences de nos clients avec les produits Natirèl CBD.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Tout ce que vous devez savoir sur le CBD et nos produits.
            </p>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Qu'est-ce que le CBD ?</h3>
                <p className="text-gray-600">
                  Le CBD (cannabidiol) est un cannabinoïde naturellement présent dans le chanvre. Contrairement au THC, il n'a pas d'effet psychoactif et ne provoque pas de "high". Il est reconnu pour ses propriétés apaisantes et son potentiel à favoriser le bien-être.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Le CBD est-il légal en France ?</h3>
                <p className="text-gray-600">
                  Oui, le CBD est légal en France tant que le taux de THC est inférieur à 0,3%. Tous nos produits respectent strictement cette réglementation et sont régulièrement testés par des laboratoires indépendants.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Comment choisir le bon produit CBD ?</h3>
                <p className="text-gray-600">
                  Le choix dépend de vos préférences et de vos besoins. Les huiles offrent une absorption efficace, les fleurs permettent une expérience authentique, les infusions sont idéales pour la détente, et les produits topiques ciblent des zones spécifiques. N'hésitez pas à nous contacter pour un conseil personnalisé.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Combien de temps mettent les produits à faire effet ?</h3>
                <p className="text-gray-600">
                  Le temps d'action varie selon les produits et les personnes. Les huiles sublinguales agissent généralement en 15-30 minutes, les produits ingérés en 1-2 heures, et les applications topiques en 10-20 minutes. Nous recommandons de commencer par de petites doses et d'ajuster selon vos besoins.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/faq" 
                className="inline-flex items-center text-green-700 hover:text-green-600 font-medium"
              >
                Voir toutes les questions fréquentes
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4 md:px-6 bg-green-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez notre communauté</h2>
            <p className="text-green-100 max-w-2xl mx-auto mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos conseils, nos offres exclusives et nos nouveautés en avant-première.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                required 
              />
              <button 
                type="submit"
                className="bg-green-600 hover:bg-green-500 py-3 px-6 rounded-full transition font-medium shadow-lg hover:shadow-xl"
              >
                S'inscrire
              </button>
            </form>
            
            <p className="text-green-200 text-sm mt-4">
              En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 md:px-6 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">Contactez-nous</h2>
                <p className="text-gray-600 mb-8">
                  Une question sur nos produits ? Besoin d'un conseil personnalisé ? Notre équipe est à votre disposition pour vous accompagner dans votre découverte du CBD.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-700 mt-1 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-green-800">Email</h3>
                      <p className="text-gray-600">contact@natirel-cbd.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-700 mt-1 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-green-800">Téléphone</h3>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-green-700 mt-1 mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-green-800">Adresse</h3>
                      <p className="text-gray-600">123 Avenue de la Nature, 75001 Paris, France</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-200 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="bg-green-50 p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-6">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input 
                      type="text" 
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required 
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition font-medium shadow-lg hover:shadow-xl"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 py-12 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo-white.png" 
                  alt="Natirèl CBD Logo" 
                  width={40} 
                  height={40}
                  className="mr-3"
                />
                <span className="text-xl font-bold text-white">Natirèl CBD</span>
              </div>
              <p className="text-green-200 mb-4">
                Des produits CBD 100% naturels, pour votre bien-être au quotidien.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Produits</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Huiles CBD</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Fleurs CBD</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Infusions CBD</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Cosmétiques CBD</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Nouveautés</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Informations</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Notre histoire</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Livraison</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Légal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-200 hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Conditions générales de vente</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Politique de confidentialité</a></li>
                <li><a href="#" className="text-green-200 hover:text-white transition">Politique de cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-300 text-sm">
            <p>© {new Date().getFullYear()} Natirèl CBD. Tous droits réservés.</p>
            <p className="mt-2">Le CBD n'est pas un médicament et ne prétend pas guérir, traiter ou prévenir une maladie. Consultez un médecin avant usage.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}