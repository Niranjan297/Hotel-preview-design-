import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-4 md:right-6 z-[60] flex flex-col gap-3">
      <a
        href="tel:+919604052799"
        className="bg-brand-charcoal text-brand-ivory p-3 md:p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={24} className="md:w-6 md:h-6 w-5 h-5" />
      </a>
      <a
        href="https://wa.me/919604052799"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={24} className="md:w-6 md:h-6 w-5 h-5" />
      </a>
    </div>
  );
};

export default FloatingButtons;
