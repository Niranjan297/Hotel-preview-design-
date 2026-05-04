import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = [
    { url: 'https://www.asilverroak.in/images/gallery/1.jpg', title: 'Reception & Lobby' },
    { url: 'https://www.asilverroak.in/images/gallery/2.jpg', title: 'Deluxe Room' },
    { url: 'https://www.asilverroak.in/images/gallery/3.jpg', title: 'Suite Accommodations' },
    { url: 'https://www.asilverroak.in/images/gallery/4.jpg', title: 'Pure Veg Restaurant' },
    { url: 'https://www.asilverroak.in/images/gallery/5.jpg', title: 'Temple Proximity' },
    { url: 'https://www.asilverroak.in/images/gallery/6.jpg', title: 'Exterior View' },
    { url: 'https://www.asilverroak.in/images/gallery/7.jpg', title: 'Room Amenities' },
    { url: 'https://www.asilverroak.in/images/gallery/8.jpg', title: 'Modern Bathrooms' },
    { url: 'https://www.asilverroak.in/images/gallery/9.jpg', title: 'Dining Area' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-6 block">Visual Journey</span>
          <h1 className="text-4xl md:text-8xl italic font-serif text-brand-charcoal">The Gallery.</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative aspect-[4/5] rounded-3xl md:rounded-[3rem] overflow-hidden border border-brand-charcoal/5"
            >
              <img 
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                <p className="text-brand-ivory font-serif italic text-2xl md:text-3xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-brand-charcoal py-16 md:py-24 px-4 md:px-6 text-center text-brand-ivory">
         <h2 className="text-3xl md:text-5xl italic font-serif mb-8">Experience it in person.</h2>
         <p className="text-brand-ivory/60 max-w-xl mx-auto mb-10 italic text-sm md:text-base">We are waiting to welcome you to the heart of Kolhapur.</p>
         <Link 
            to="/contact"
            className="bg-brand-gold text-brand-charcoal px-10 md:px-12 py-4 md:py-5 rounded-full text-xs uppercase tracking-widest font-black hover:scale-105 active:scale-95 transition-transform inline-block"
          >
            Plan Your Visit
          </Link>
      </section>
    </motion.div>
  );
};

export default Gallery;
