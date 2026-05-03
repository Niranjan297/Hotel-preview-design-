import { motion } from 'motion/react';

const Policies = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 min-h-screen"
  >
    <section className="py-24 px-6 max-w-4xl mx-auto">
       <span className="text-brand-gold text-sm uppercase tracking-[0.2em] font-semibold mb-6 block">Guidelines</span>
       <h1 className="text-4xl md:text-7xl font-serif italic mb-16 text-brand-charcoal leading-none text-center md:text-left">Hotel Policies.</h1>
       
       <div className="space-y-16">
          <div className="bento-item">
            <h3 className="text-2xl font-serif italic mb-6">Standard Check-in/Check-out</h3>
            <ul className="space-y-4 text-brand-charcoal/70 italic text-lg decoration-brand-gold">
              <li>• Check-in Time: 12:00 PM</li>
              <li>• Check-out Time: 12:00 PM</li>
              <li className="text-sm border-t border-brand-charcoal/10 pt-4 opacity-60">Early Check-in or Late Check-out is subject to availability and may incur additional charges.</li>
            </ul>
          </div>

          <div className="bento-item">
            <h3 className="text-2xl font-serif italic mb-6">Reservation & Cancellation</h3>
            <p className="text-brand-charcoal/70 italic text-lg leading-relaxed mb-6">
              To guarantee your reservation, a valid ID proof and advance payment may be required at the time of booking.
            </p>
            <ul className="space-y-4 text-brand-charcoal/70 italic text-base mb-6">
              <li>• Cancellations made 48 hours prior to arrival: Full Refund.</li>
              <li>• Cancellations within 24-48 hours: 50% charge.</li>
              <li>• Same day cancellation or No-show: 100% charge.</li>
            </ul>
            <a 
              href="https://www.easeroom.com/hotelbooking/cancellation.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-brand-gold border-b border-brand-gold pb-1 hover:opacity-70 transition-opacity"
            >
              Amend / Cancel Booking Online
            </a>
          </div>

          <div className="bento-item">
            <h3 className="text-2xl font-serif italic mb-6">Guest Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-charcoal/70 italic">
               <div>
                  <p className="font-bold text-brand-gold uppercase text-[10px] tracking-widest mb-2">Included</p>
                  <ul className="space-y-2">
                    <li>- Complimentary Breakfast</li>
                    <li>- Free Fiber Wi-Fi</li>
                    <li>- 1 Lit Mineral Water/day</li>
                    <li>- 24/7 Hot Water</li>
                  </ul>
               </div>
               <div>
                  <p className="font-bold text-brand-gold uppercase text-[10px] tracking-widest mb-2">Available on Request</p>
                  <ul className="space-y-2">
                    <li>- Laundry Services</li>
                    <li>- Doctor on Request</li>
                    <li>- Travel Assistance</li>
                    <li>- Iron & Board</li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="bento-item">
            <h3 className="text-2xl font-serif italic mb-6">General Rules</h3>
            <ul className="space-y-4 text-brand-charcoal/70 italic text-lg">
              <li>• Valid Photo ID (Aadhar/Passport/Voter ID) is mandatory for all guests.</li>
              <li>• Outside food is generally not allowed in the premises.</li>
              <li>• Smoking and alcohol consumption is strictly prohibited in public areas.</li>
              <li>• We accept all major credit/debit cards and UPI payments.</li>
            </ul>
          </div>
       </div>
    </section>
  </motion.div>
);

export default Policies;
