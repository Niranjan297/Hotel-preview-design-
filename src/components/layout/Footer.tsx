import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="py-20 border-t border-brand-charcoal/5 px-6 bg-brand-ivory">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-12">
      <div>
        <Link to="/" className="font-serif text-3xl font-bold tracking-tighter mb-4 block text-brand-charcoal">
          SILVERR<span className="text-brand-gold ml-1">OAK</span>
        </Link>
        <p className="text-brand-charcoal/40 text-sm max-w-xs font-light italic">
          Modern spiritual living at the heart of Kolhapur's heritage. Situated Near Mahalaxmi Temple.
        </p>
      </div>
      
      <div className="flex gap-20">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-black mb-6">Explore</p>
          <div className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold opacity-60">
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest font-black mb-6">Support</p>
          <div className="flex flex-col gap-3 text-xs uppercase tracking-widest font-semibold opacity-60">
            <Link to="/policies">Hotel Policies</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-brand-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-semibold opacity-40">
      <p>© 2026 Hotel Silverr Oak Kolhapur. All rights reserved.</p>
      <p>Heritage Excellence</p>
    </div>
  </footer>
);

export default Footer;
