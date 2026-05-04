import { motion } from 'motion/react';
import { 
  ArrowRight
} from 'lucide-react';

const Rooms = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 min-h-screen"
  >
    <section className="py-16 md:py-24 bg-brand-charcoal text-brand-ivory px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-4 block">Refined Living</span>
            <h2 className="text-3xl md:text-6xl italic leading-none">Our Rooms.</h2>
          </div>
          <p className="max-w-md text-brand-ivory/60 leading-relaxed italic text-sm md:text-base">
            Experience well-managed spaces equipped with modern amenities including LED TVs, tea/coffee makers, and high-speed internet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-8 border border-white/5 relative">
              <img 
                src="https://www.asilverroak.in/images/gallery/2.jpg" 
                alt="Deluxe Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-brand-gold text-brand-charcoal px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 text-brand-ivory">Deluxe Room</h3>
                <p className="text-[13px] md:text-sm text-brand-ivory/60 max-w-sm">Well-managed spaces with LED TV, high-speed Wi-Fi, and premium tea/coffee maker setup.</p>
              </div>
              <div className="xl:text-right">
                <div className="mb-4">
                  <p className="text-brand-ivory/40 text-[9px] md:text-[10px] uppercase tracking-widest font-black mb-1">Starting from</p>
                  <p className="text-brand-gold font-serif text-2xl md:text-3xl">₹3,499<span className="text-xs md:text-sm text-brand-ivory/40 font-sans italic tracking-normal"> / night</span></p>
                </div>
                <a 
                  href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-gold text-brand-charcoal px-8 py-4 rounded-xl md:rounded-full text-[10px] uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 hover:bg-brand-ivory transition-colors"
                >
                  Book Deluxe Room <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl mb-6 md:mb-8 border border-white/5 relative">
              <img 
                src="https://www.asilverroak.in/images/gallery/3.jpg" 
                alt="Deluxe Suite Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-brand-ivory text-brand-charcoal px-3 md:px-4 py-1 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                Premium Choice
              </div>
            </div>
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 text-brand-ivory">Deluxe Suite Room</h3>
                <p className="text-[13px] md:text-sm text-brand-ivory/60 max-w-sm">Enhanced space featuring separate sitting area and upgraded luxury amenities for a superior stay.</p>
              </div>
              <div className="xl:text-right">
                <div className="mb-4">
                  <p className="text-brand-ivory/40 text-[9px] md:text-[10px] uppercase tracking-widest font-black mb-1">Starting from</p>
                  <p className="text-brand-gold font-serif text-2xl md:text-3xl">₹4,999<span className="text-xs md:text-sm text-brand-ivory/40 font-sans italic tracking-normal"> / night</span></p>
                </div>
                <a 
                  href="https://bookings.travelpleasure.in/Securebookings/?hotelid=14772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-brand-gold text-brand-charcoal px-8 py-4 rounded-xl md:rounded-full text-[10px] uppercase tracking-widest font-black inline-flex items-center justify-center gap-2 hover:bg-brand-ivory transition-colors"
                >
                  Book Suite Room <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-brand-charcoal/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black mb-4">Direct Booking</h4>
          <h3 className="text-2xl font-serif italic mb-4 text-brand-charcoal">Best Price Guaranteed</h3>
          <p className="text-sm text-brand-charcoal/60 leading-relaxed italic">Book directly through our portal to ensure the lowest available rates and exclusive seasonal offers.</p>
        </div>
        <div>
          <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black mb-4">Peace of Mind</h4>
          <h3 className="text-2xl font-serif italic mb-4 text-brand-charcoal">Flexible Cancellation</h3>
          <p className="text-sm text-brand-charcoal/60 leading-relaxed italic">Enjoy the freedom to amend or cancel your booking with our transparent 48-hour policy.</p>
        </div>
        <div>
          <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black mb-4">Guest Comfort</h4>
          <h3 className="text-2xl font-serif italic mb-4 text-brand-charcoal">Complimentary Bonus</h3>
          <p className="text-sm text-brand-charcoal/60 leading-relaxed italic">Direct bookings include complementary high-speed Fiber Wi-Fi and 1 liter of mineral water daily.</p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto text-center border-t border-brand-charcoal/5">
      <h3 className="text-2xl md:text-3xl font-serif italic mb-10 md:mb-12 text-brand-charcoal">All accommodations include:</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
        {['LED Television', 'High-Speed Wi-Fi', 'Tea/Coffee Maker', 'Mineral Water', 'Toiletries', '24h Hot Water', 'Power Backup', 'Iron on Request'].map((item) => (
          <div key={item} className="p-4 md:p-6 bg-brand-sand/10 border border-brand-charcoal/5 rounded-xl md:rounded-2xl italic text-[13px] md:text-sm text-brand-charcoal/80">
            {item}
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

export default Rooms;
