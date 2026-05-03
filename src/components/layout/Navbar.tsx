import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tighter text-brand-charcoal">
          SILVERR<span className="text-brand-gold ml-1">OAK</span>
        </Link>
      </div>
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
            className="text-xs uppercase tracking-widest font-medium hover:text-brand-gold transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <a 
        href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-brand-charcoal text-brand-ivory px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-brand-gold transition-all"
      >
        Book Now
      </a>
    </div>
  </nav>
);

export default Navbar;
