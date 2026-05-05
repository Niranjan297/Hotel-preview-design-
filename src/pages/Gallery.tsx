import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import MasonryGallery, { type MasonryItem } from '../components/MasonryGallery';

const GALLERY_ITEMS: MasonryItem[] = [
  { id: '1', img: 'https://www.asilverroak.in/images/gallery/1.jpg', height: 380, title: 'Reception & Lobby' },
  { id: '2', img: 'https://www.asilverroak.in/images/gallery/2.jpg', height: 280, title: 'Deluxe Room' },
  { id: '3', img: 'https://www.asilverroak.in/images/gallery/3.jpg', height: 520, title: 'Suite Accommodations' },
  { id: '4', img: 'https://www.asilverroak.in/images/gallery/4.jpg', height: 320, title: 'Pure Veg Restaurant' },
  { id: '5', img: 'https://www.asilverroak.in/images/gallery/5.jpg', height: 460, title: 'Temple Proximity' },
  { id: '6', img: 'https://www.asilverroak.in/images/gallery/6.jpg', height: 300, title: 'Exterior View' },
  { id: '7', img: 'https://www.asilverroak.in/images/gallery/7.jpg', height: 440, title: 'Room Amenities' },
  { id: '8', img: 'https://www.asilverroak.in/images/gallery/8.jpg', height: 260, title: 'Modern Bathrooms' },
  { id: '9', img: 'https://www.asilverroak.in/images/gallery/9.jpg', height: 500, title: 'Dining Area' },
];

const Gallery = () => {
  const [items, setItems] = useState(GALLERY_ITEMS);
  const [galleryKey, setGalleryKey] = useState(0);

  const handleShuffle = () => {
    const shuffled = [...GALLERY_ITEMS].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setGalleryKey(prev => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen"
    >
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-6 block">
            Visual Journey
          </span>
          <h1 className="text-4xl md:text-8xl italic font-serif text-brand-charcoal">The Gallery.</h1>
          <p className="text-brand-charcoal/50 text-sm font-light italic mt-4 max-w-md mx-auto">
            Every corner of Hotel Silverr Oak, curated for your preview.
          </p>
        </div>

        <MasonryGallery
          key={galleryKey}
          items={items}
          animateFrom="bottom"
          blurToFocus={true}
          stagger={0.07}
          scaleOnHover={true}
          hoverScale={0.97}
          colorShiftOnHover={true}
        />
      </section>

      {/* Shuffle Button */}
      <button
        onClick={handleShuffle}
        title="Shuffle Gallery"
        className="fixed bottom-28 right-4 md:right-6 z-50 p-3 md:p-4 bg-brand-charcoal text-brand-ivory rounded-full shadow-2xl hover:bg-brand-gold hover:text-brand-charcoal transition-all group"
      >
        <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
      </button>

      <section className="bg-brand-charcoal py-16 md:py-24 px-4 md:px-6 text-center text-brand-ivory">
        <h2 className="text-3xl md:text-5xl italic font-serif mb-8">Experience it in person.</h2>
        <p className="text-brand-ivory/60 max-w-xl mx-auto mb-10 italic text-sm md:text-base">
          We are waiting to welcome you to the heart of Kolhapur.
        </p>
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
