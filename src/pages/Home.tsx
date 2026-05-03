import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { 
  MapPin, ShieldCheck, Utensils, Clock, Car, ThermometerSun, Wifi, Star as StarIcon 
} from 'lucide-react';

const Hero = () => (
  <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://www.asilverroak.in/images/gallery/6.jpg"
        alt="Hotel Silverr Oak Exterior"
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-brand-charcoal/40 backdrop-blur-[2px]" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-brand-ivory/80 text-xs md:text-sm uppercase tracking-[0.3em] font-medium mb-6 block">
          The Heart of Kolhapur
        </span>
        <h1 className="text-5xl md:text-8xl text-brand-ivory font-serif leading-[0.9] mb-8 italic">
          Peace of Mind Meets <br /> Modern Luxury
        </h1>
        <p className="text-brand-ivory/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience the divine proximity of Ambabai Temple combined with 3-star comfort designed for the discerning traveler.
        </p>

        {/* Simplified Booking Widget */}
        <div className="bg-white/90 backdrop-blur-xl p-4 md:p-2 rounded-2xl md:rounded-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2 shadow-2xl mb-12">
          <div className="flex-1 w-full md:w-auto px-6 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-brand-charcoal/10">
            <label className="text-[10px] uppercase font-bold text-brand-charcoal/40 tracking-widest mb-1">Check-in</label>
            <input type="date" className="bg-transparent outline-none w-full text-sm font-medium" defaultValue={new Date().toISOString().split('T')[0]} />
          </div>
          <div className="flex-1 w-full md:w-auto px-6 py-3 flex flex-col items-start border-b md:border-b-0 md:border-r border-brand-charcoal/10">
            <label className="text-[10px] uppercase font-bold text-brand-charcoal/40 tracking-widest mb-1">Check-out</label>
            <input type="date" className="bg-transparent outline-none w-full text-sm font-medium" defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]} />
          </div>
          <a 
            href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-brand-gold text-brand-charcoal px-10 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Check Availability
          </a>
        </div>
        <a 
          href="https://www.easeroom.com/hotelbooking/cancellation.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-widest font-bold text-brand-ivory/60 hover:text-brand-gold transition-colors"
        >
          Amend / Cancel Booking
        </a>
      </motion.div>
    </div>
  </section>
);

const TrustStrip = () => (
  <div className="bg-brand-sand py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-brand-gold">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
        <p className="text-sm font-medium text-brand-charcoal">9/10 Location Rating by verified guests</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
        <span className="font-bold text-xl italic text-brand-charcoal">Agoda</span>
        <span className="font-bold text-xl text-brand-charcoal">ixigo</span>
        <span className="font-bold text-xl text-brand-charcoal">Booking.com</span>
        <span className="font-bold text-xl tracking-tighter text-brand-charcoal">TripAdvisor</span>
      </div>
      <div className="text-right hidden lg:block">
        <p className="text-xs uppercase tracking-widest font-semibold mb-1 text-brand-charcoal">Direct Booking Bonus</p>
        <p className="text-sm text-brand-gold font-medium">Complimentary High-Speed Wi-Fi</p>
      </div>
    </div>
  </div>
);

const Amenities = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="mb-20">
      <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">Unmatched Comfort</span>
      <h2 className="text-4xl md:text-6xl text-brand-charcoal leading-tight">Comprehensive facilities <br /> for a perfect stay.</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div className="bento-item md:col-span-2 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
        <div className="relative z-10">
          <MapPin className="text-brand-gold mb-6" size={32} />
          <h3 className="text-3xl mb-4 italic font-medium">Walking Distance to Ambabai</h3>
          <p className="text-brand-charcoal/70 max-w-md">Save time and avoid the rickshaw rush. We are situated in the center of the city, just 3 minutes away from the main entrance of the Mahalaxmi Temple, opposite Commerce College.</p>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-700">
           <MapPin size={280} />
        </div>
      </div>
      
      <div className="bento-item flex flex-col justify-between">
        <ShieldCheck className="text-brand-gold mb-6" size={32} />
        <div>
          <h3 className="text-2xl mb-4 font-medium italic">Safety First</h3>
          <p className="text-sm text-brand-charcoal/70">Highly rated for security and welcoming atmosphere for families and solo travelers. 24-hour safe parking included.</p>
        </div>
      </div>
      
      <div className="bento-item flex flex-col">
        <Utensils className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">Pure Veg Dining</h3>
        <p className="text-sm text-brand-charcoal/70">Authentic vegetarian delicacies with in-room dining services available for your convenience.</p>
      </div>

      <div className="bento-item flex flex-col">
        <Clock className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">Power Back Up</h3>
        <p className="text-sm text-brand-charcoal/70">100% power back-up ensures your comfort remains uninterrupted during your stay.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <Car className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">Secure Parking</h3>
        <p className="text-sm text-brand-charcoal/70">Dedicated secure space for your 4-wheelers, including guest driver accommodation facilities.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <ThermometerSun className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">24-Hour Hot Water</h3>
        <p className="text-sm text-brand-charcoal/70">Enjoy constant hot water supply, essential for your early morning rituals and temple visits.</p>
      </div>
      
      <div className="bento-item flex flex-col">
        <Wifi className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">Free Wi-Fi</h3>
        <p className="text-sm text-brand-charcoal/70">High-speed free Wi-Fi connectivity throughout the hotel to keep you connected.</p>
      </div>

      <div className="bento-item flex flex-col">
        <StarIcon className="text-brand-gold mb-6" size={32} />
        <h3 className="text-xl mb-3 font-medium italic">Travel Desk</h3>
        <p className="text-sm text-brand-charcoal/70">Expert travel assistance, doctor on request, and laundry services available for all guests.</p>
      </div>
    </div>
  </section>
);

const OrderOnline = () => (
  <section className="bg-brand-ivory py-24 border-y border-brand-charcoal/5 px-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-3 block">Gourmet Delivery</span>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-6 text-brand-charcoal">Taste our delicacies at home.</h3>
          <p className="text-brand-charcoal/60 max-w-lg mb-0 font-light italic text-lg leading-relaxed">
            Experience our famous pure vegetarian cuisine from the comfort of your home. Now delivering across Kolhapur via our trusted partners.
          </p>
        </motion.div>
      </div>
      <div className="flex items-center gap-8 md:gap-16">
        <motion.a 
          href="https://www.zomato.com/kolhapur/hotel-silver-oak-shaniwar-peth/order" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brand-charcoal/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-[#E23744] transition-all duration-500 overflow-hidden bg-white shadow-lg">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Zomato_Logo.png" alt="Zomato" className="w-12 opacity-80 group-hover:opacity-100" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30 group-hover:opacity-100 group-hover:text-[#E23744] transition-all">Order on Zomato</span>
        </motion.a>
        <motion.a 
          href="https://www.swiggy.com/restaurants/hotel-silverr-oak-bindu-chowk-kolhapur-220023" 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          className="group flex flex-col items-center gap-4"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-brand-charcoal/5 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:border-[#FC8019] transition-all duration-500 overflow-hidden bg-white shadow-lg">
             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png" alt="Swiggy" className="w-12 opacity-80 group-hover:opacity-100" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-30 group-hover:opacity-100 group-hover:text-[#FC8019] transition-all">Order on Swiggy</span>
        </motion.a>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-4 block">Testimonials</span>
      <h2 className="text-4xl md:text-6xl text-brand-charcoal font-serif italic">What Our Guests Say.</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          className="bg-brand-sand/20 p-8 rounded-[2rem] border border-brand-charcoal/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-1 text-brand-gold mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} strokeWidth={i < review.rating ? 0 : 2} />
              ))}
            </div>
            <p className="text-brand-charcoal/80 italic leading-relaxed mb-8">"{review.text}"</p>
          </div>
          <div>
            <p className="font-serif italic text-xl text-brand-charcoal">{review.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 mt-1 font-bold">{review.source}</p>
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
      
      <div className="bg-brand-charcoal text-brand-ivory py-24 px-6 text-center">
        <h2 className="text-4xl md:text-6xl italic font-serif mb-8">Ready for a spiritual experience?</h2>
        <a 
          href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-gold text-brand-charcoal px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform inline-block"
        >
          Book Your Room
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
