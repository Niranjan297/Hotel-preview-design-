import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-tighter text-brand-charcoal">
            SILVERR<span className="text-brand-gold ml-1">OAK</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Rooms', path: '/rooms' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Policies', path: '/policies' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`text-[10px] lg:text-xs uppercase tracking-widest font-bold transition-all hover:text-brand-gold ${
                location.pathname === item.path ? 'text-brand-gold' : 'text-brand-charcoal/60'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-charcoal text-brand-ivory px-4 md:px-8 py-2 md:py-3 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-black hover:bg-brand-gold transition-all shadow-lg"
          >
            {/* Shortened text for mobile */}
            <span className="md:hidden">Book</span>
            <span className="hidden md:inline">Book Stay</span>
          </a>

          {/* Hamburger Menu Toggler */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-charcoal hover:bg-brand-sand/50 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-ivory border-t border-brand-charcoal/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Rooms', path: '/rooms' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Policies', path: '/policies' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className="flex items-center justify-between group"
                >
                  <span className={`text-sm uppercase tracking-widest font-black ${
                    location.pathname === item.path ? 'text-brand-gold' : 'text-brand-charcoal'
                  }`}>
                    {item.name}
                  </span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-gold" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
