import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 min-h-screen"
  >
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-b border-brand-charcoal/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <span className="text-brand-gold text-[10px] md:text-sm uppercase tracking-[0.2em] font-black mb-6 block">Get in Touch</span>
          <h1 className="text-4xl md:text-7xl font-serif italic mb-8 md:mb-10 leading-none text-brand-charcoal">Contact us.</h1>
          
          <div className="space-y-10 md:space-y-12">
            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-widest font-black mb-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors">Our Residence</p>
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-1" size={24} />
                <p className="text-xl md:text-2xl font-light leading-relaxed italic text-brand-charcoal">
                  Hotel Silverr Oak, <br />
                  Opp Commerce Collage, Bindu Chowk,<br />
                  Kolhapur, Maharashtra 416002
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[10px] uppercase tracking-widest font-black mb-4 text-brand-gold/60 group-hover:text-brand-gold transition-colors">Connect</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-brand-gold" size={20} />
                  <p className="text-xl md:text-2xl font-light text-brand-charcoal">+91 96040 52799</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-brand-gold" size={20} />
                  <p className="text-lg md:text-2xl font-light text-brand-charcoal break-all sm:break-normal">asilverroak@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black mb-4 text-brand-gold/60">Availability</p>
              <div className="flex items-center gap-4">
                <Clock className="text-brand-gold" size={20} />
                <p className="text-lg md:text-xl italic text-brand-charcoal/60">Reception open 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-sand/10 rounded-3xl md:rounded-[4rem] p-8 md:p-12 lg:p-20 flex flex-col justify-center border border-brand-charcoal/5 mt-8 md:mt-0">
          <h3 className="text-2xl md:text-4xl font-serif italic mb-8 text-brand-charcoal">Send a Message.</h3>
          <form className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-charcoal/40">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 md:py-4 focus:border-b-brand-gold outline-none text-lg md:text-xl transition-colors italic text-brand-charcoal"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-charcoal/40">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 md:py-4 focus:border-b-brand-gold outline-none text-lg md:text-xl transition-colors italic text-brand-charcoal"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-brand-charcoal/40">Your Message</label>
              <textarea 
                rows={3}
                placeholder="How can we help you?" 
                className="w-full bg-transparent border-b border-brand-charcoal/20 py-3 md:py-4 focus:border-b-brand-gold outline-none text-lg md:text-xl transition-colors italic text-brand-charcoal resize-none"
              />
            </div>
            <button className="bg-brand-charcoal text-brand-ivory px-10 md:px-12 py-5 md:py-6 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-black hover:bg-brand-gold hover:text-brand-charcoal transition-all w-full mt-6 md:mt-10">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>

    <section className="h-[400px] md:h-[600px] w-full">
       <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.57467614!2d74.2274!3d16.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzAwLjAiTiA3NMKwMTMnMzguNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin" 
        className="w-full h-full grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
        loading="lazy"
        referrerPolicy="no-referrer-when-cross-origin"
       />
    </section>
  </motion.div>
);

export default Contact;
