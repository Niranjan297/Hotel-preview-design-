import { motion } from 'motion/react';
import { Utensils, Clock, Star, MapPin } from 'lucide-react';

const About = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 min-h-screen"
  >
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-6 block">Our Legacy</span>
          <h1 className="text-3xl md:text-7xl text-brand-charcoal leading-tight mb-6 md:mb-8 font-serif italic">Silverr Oak: <br className="hidden md:block" /> Excellence in <br className="hidden md:block" /> Hospitality.</h1>
          <p className="text-brand-charcoal/70 text-base md:text-lg leading-relaxed mb-6">
            Hotel Silverr Oak is the right choice for visitors who are searching for a combination of Good Food, Best Services and a pleasant ambiance. 
          </p>
          <p className="text-brand-charcoal/70 text-base md:text-lg leading-relaxed italic">
            Situated in the center of the city, near the sacred Mahalaxmi Temple and opposite Commerce College at Bindu Chowk, Kolhapur. We take pride in being a home away from home for thousands of pilgrims and families every year.
          </p>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img 
            src="https://www.asilverroak.in/images/gallery/1.jpg" 
            alt="Hotel Lobby/Entrance"
            className="rounded-[2rem] md:rounded-[4rem] aspect-[4/5] object-cover shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-4 md:-bottom-10 md:-left-10 bg-brand-charcoal p-6 md:p-12 rounded-2xl md:rounded-[3rem] text-brand-ivory border-2 md:border-4 border-brand-gold">
             <p className="text-2xl md:text-4xl font-serif italic mb-1 md:mb-2">9/10</p>
             <p className="text-[8px] md:text-[10px] uppercase tracking-widest font-black opacity-60">Verified Rating for <br /> Location & Service</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-brand-sand/30 px-4 md:px-6">
       <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-serif italic mb-10 md:mb-16 text-brand-charcoal">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: 'Best Price', desc: 'Excellent services offered at the best market prices for all types of travelers.' },
              { title: 'Prime Location', desc: 'Minutes away from Mahalaxmi Temple, Save time on transportation.' },
              { title: 'Safety & Trust', desc: 'Managed by professionals like Manager Mr. Kedar, ensuring a safe environment.' }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full mb-4 md:mb-6 flex items-center justify-center text-brand-charcoal">
                  <Star size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif italic mb-3 md:mb-4 text-brand-charcoal">{item.title}</h3>
                <p className="text-[13px] md:text-sm text-brand-charcoal/60 leading-relaxed italic">{item.desc}</p>
              </div>
            ))}
          </div>
       </div>
    </section>

    <section id="dining" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <img 
              src="https://www.asilverroak.in/images/gallery/4.jpg" 
              alt="Fine dining table"
              className="rounded-[2rem] md:rounded-[4rem] aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
        </div>
        
        <div className="order-1 lg:order-2">
          <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-4 md:mb-6 block">Dining Excellence</span>
          <h2 className="text-3xl md:text-6xl text-brand-charcoal leading-tight mb-6 md:mb-8 font-serif">Authentic Pure Veg <br className="hidden md:block" /><span className="italic font-light">Culinary Experience.</span></h2>
          <p className="text-brand-charcoal/70 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Our multicuisine kitchen is renowned for its fresh, tasty vegetarian options. We serve traditional Kolhapuri specialties with a focus on hygiene and health.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-center gap-4 text-[13px] md:text-sm font-black uppercase tracking-widest text-brand-charcoal/70">
              <span className="text-brand-gold"><Utensils size={18} /></span>
              Best Quality Ingredients
            </div>
            <div className="flex items-center gap-4 text-[13px] md:text-sm font-black uppercase tracking-widest text-brand-charcoal/70">
              <span className="text-brand-gold"><Clock size={18} /></span>
              Breakfast Packages
            </div>
          </div>
        </div>
      </div>
    </section>
  </motion.div>
);

export default About;
