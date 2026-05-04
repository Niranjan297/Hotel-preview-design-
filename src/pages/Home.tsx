import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { 
  MapPin, ShieldCheck, Utensils, Clock, Car, ThermometerSun, Wifi, Star as StarIcon 
} from 'lucide-react';

const Hero = () => (
  <section className="relative min-h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
    <div className="absolute inset-0">
      <img 
        src="https://www.asilverroak.in/images/gallery/6.jpg"
        alt="Hotel Silverr Oak Exterior"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-charcoal/50 backdrop-blur-[1px]" />
    </div>
    
    <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-brand-gold text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold mb-4 md:mb-6 block drop-shadow-sm">
          The Heart of Kolhapur
        </span>
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] text-brand-ivory font-serif leading-[1.1] md:leading-[0.9] mb-6 md:mb-10 italic drop-shadow-xl text-center">
          Peace of Mind Meets <br className="hidden sm:block" /> Modern Luxury
        </h1>
        <p className="text-brand-ivory/90 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
          Experience the divine proximity of Ambabai Temple combined with 3-star comfort designed for the discerning traveler.
        </p>

        {/* Improved Booking Widget */}
        <div className="max-w-sm md:max-w-md mx-auto w-full mb-8 mt-6 md:mt-10">
          <a 
            href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-gold text-brand-charcoal py-4 md:py-5 rounded-xl md:rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-black hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_20px_40px_rgba(212,175,55,0.2)] border border-brand-gold/50"
          >
            Check Availability
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <a 
            href="https://www.easeroom.com/hotelbooking/cancellation.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-brand-ivory/60 hover:text-brand-gold transition-colors underline decoration-brand-gold/0 hover:decoration-brand-gold/100 underline-offset-4"
          >
            Amend / Cancel Booking
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-brand-sand py-8 md:py-12 px-4 md:px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="flex items-center gap-1 text-brand-gold">
          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="md:w-4 md:h-4" fill="currentColor" />)}
        </div>
        <p className="text-[10px] md:text-sm font-black uppercase tracking-widest text-brand-charcoal/80">9/10 Location Rating by Guests</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-40 grayscale">
        <span className="font-bold text-lg md:text-xl italic text-brand-charcoal">Agoda</span>
        <span className="font-bold text-lg md:text-xl text-brand-charcoal">ixigo</span>
        <span className="font-bold text-lg md:text-xl text-brand-charcoal">Booking.com</span>
        <span className="font-bold text-lg md:text-xl tracking-tighter text-brand-charcoal">TripAdvisor</span>
      </div>
      <div className="text-right hidden lg:block">
        <p className="text-[10px] uppercase tracking-widest font-black mb-1 text-brand-charcoal">Direct Booking Bonus</p>
        <p className="text-sm text-brand-gold font-bold">Complimentary High-Speed Wi-Fi</p>
      </div>
    </div>
  </div>
);

const Amenities = () => (
  <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
    <div className="mb-12 md:mb-20 text-center md:text-left">
      <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold mb-4 block">Unmatched Comfort</span>
      <h2 className="text-3xl md:text-6xl text-brand-charcoal leading-[1.2] md:leading-tight">Comprehensive facilities <br className="hidden md:block" /> for a perfect stay.</h2>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      <div className="bento-item sm:col-span-2 md:col-span-2 flex flex-col justify-between min-h-[250px] md:min-h-[300px] relative overflow-hidden group">
        <div className="relative z-10">
          <MapPin className="text-brand-gold mb-6" size={28} />
          <h3 className="text-2xl md:text-3xl mb-4 italic font-medium">Walking Distance to Ambabai</h3>
          <p className="text-sm md:text-base text-brand-charcoal/70 max-w-md leading-relaxed">Save time and avoid the transit rush. Just 3 minutes away from the main entrance of Mahalaxmi Temple, opposite Commerce College.</p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-[0.03] md:opacity-10 group-hover:scale-110 transition-transform duration-700">
           <MapPin size={220} className="md:w-[280px] md:h-[280px]" />
        </div>
      </div>
      
      <div className="bento-item flex flex-col justify-between">
        <ShieldCheck className="text-brand-gold mb-6" size={28} />
        <div>
          <h3 className="text-xl md:text-2xl mb-3 md:mb-4 font-medium italic">Safety First</h3>
          <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">Highly rated for security and welcoming atmosphere for families. 24-hour safe parking included.</p>
        </div>
      </div>
      
      <div className="bento-item flex flex-col">
        <Utensils className="text-brand-gold mb-6" size={28} />
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-medium italic">Pure Veg Dining</h3>
        <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">Authentic vegetarian delicacies with in-room dining services for your complete convenience.</p>
      </div>

      <div className="bento-item flex flex-col">
        <Clock className="text-brand-gold mb-4 md:mb-6" size={28} />
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-medium italic">Power Back Up</h3>
        <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">100% power back-up ensures your comfort remains uninterrupted during your spiritual journey.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <Car className="text-brand-gold mb-4 md:mb-6" size={28} />
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-medium italic">Secure Parking</h3>
        <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">Dedicated secure space for your vehicles, including guest driver accommodation facilities.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <ThermometerSun className="text-brand-gold mb-4 md:mb-6" size={28} />
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-medium italic">24-Hour Hot Water</h3>
        <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">Essential for early morning rituals and temple visits, ensuring you stay fresh and comfortable.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <Wifi className="text-brand-gold mb-4 md:mb-6" size={28} />
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-medium italic">High-Speed Fiber</h3>
        <p className="text-[13px] md:text-sm text-brand-charcoal/70 leading-relaxed">Complimentary high-speed Wi-Fi connectivity throughout the hotel to keep you connected.</p>
      </div>
    </div>
  </section>
);

const OrderOnline = () => (
  <section className="bg-brand-sand/30 py-16 md:py-24 border-y border-brand-charcoal/5 px-4 md:px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12 text-center lg:text-left">
      <div className="flex-1">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-brand-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-black mb-3 block">Gourmet Delivery</span>
          <h3 className="text-3xl md:text-5xl font-serif italic mb-6 text-brand-charcoal">Taste our delicacies at home.</h3>
          <p className="text-brand-charcoal/60 max-w-lg mb-0 font-light italic text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
            Experience our famous pure vegetarian cuisine from the comfort of your home. Delivering across Kolhapur via our trusted partners.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-row items-center justify-center gap-10 md:gap-16">
        <motion.a 
          href="https://www.zomato.com/kolhapur/hotel-silver-oak-shaniwar-peth/order" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-charcoal/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-rose-500 transition-all duration-500 overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.png" alt="Zomato" className="w-12 opacity-80 group-hover:opacity-100" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-black opacity-30 group-hover:opacity-100 group-hover:text-rose-600 transition-all">Zomato</span>
        </motion.a>
        <motion.a 
          href="https://www.swiggy.com/restaurants/hotel-silverr-oak-bindu-chowk-kolhapur-220023" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-brand-charcoal/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-orange-500 transition-all duration-500 overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="Swiggy" className="w-12 md:w-14 opacity-80 group-hover:opacity-100" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.2em] font-black opacity-30 group-hover:opacity-100 group-hover:text-orange-600 transition-all">Swiggy</span>
        </motion.a>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
    <div className="text-center mb-12 md:mb-16">
      <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-4 block">Testimonials</span>
      <h2 className="text-3xl md:text-6xl text-brand-charcoal font-serif italic mb-4">What Our Guests Say.</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {[
        { 
          name: "Mrs. Anjali Deshmukh", 
          text: "The hospitality was exceptional. Being so close to the temple made our visit stress-free. Manager Mr. Kedar personally ensured our family felt safe and welcome.", 
          rating: 5,
          source: "Verified Stay"
        },
        { 
          name: "Rajesh Kumar", 
          text: "Excellent service and very clean rooms. The location is perfect for temple visits. Highly recommended for families visiting Kolhapur for spiritual reasons.", 
          rating: 5,
          source: "Google Review"
        },
        { 
          name: "Amit Shah", 
          text: "Great stay! The staff is very cooperative and the pure veg restaurant serves delicious local specialties. Very secure parking facility which is rare in this area.", 
          rating: 4,
          source: "Booking.com"
        }
      ].map((review, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-brand-sand/10 p-6 md:p-8 rounded-[2rem] border border-brand-charcoal/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-1 text-brand-gold mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="md:w-3.5 md:h-3.5" fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
              ))}
            </div>
            <p className="text-sm md:text-base text-brand-charcoal/80 italic leading-relaxed mb-8">"{review.text}"</p>
          </div>
          <div>
            <p className="font-serif italic text-lg md:text-xl text-brand-charcoal">{review.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 mt-1 font-black">{review.source}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TrustStrip />
      <Amenities />
      <OrderOnline />
      <Reviews />
      
      <div className="bg-brand-charcoal text-brand-ivory py-16 md:py-24 px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-6xl italic font-serif mb-8 drop-shadow-lg">Ready for a spiritual experience?</h2>
        <a 
          href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-gold text-brand-charcoal px-10 md:px-12 py-4 md:py-5 rounded-full text-xs uppercase tracking-[0.2em] font-black hover:scale-105 active:scale-95 transition-transform inline-block shadow-2xl shadow-brand-gold/10"
        >
          Book Your Room
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
