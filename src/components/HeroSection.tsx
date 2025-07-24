import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
import paiHeroCover from "@/assets/PAI hero cover.jpg";
import { useNavigate } from 'react-router-dom';
import { Phone } from "lucide-react";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#services');
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image (now using PAI hero cover.jpg) */}
      <img
        src={paiHeroCover}
        alt="Pai Hall Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: 'none' }}
        draggable={false}
      />
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        {/* Main hero text block (unchanged) */}
        <div className="w-full flex flex-col items-center mt-32 md:mt-0" style={{ marginTop: '-1cm' }}>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-serif font-normal mb-0 animate-fade-in" style={{ whiteSpace: 'pre-line', lineHeight: 1.1, zIndex: 2, textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
            Where celebrations come to life
            <br />
            in style and comfort
          </span>
          <span className="inline-block px-0 py-2 text-gold text-4xl md:text-5xl lg:text-6xl font-serif font-normal animate-fade-in" style={{ fontWeight: 700, zIndex: 2, color: '#FFD700', marginTop: '20px' }}>
            Pai Convention Hall
          </span>
        </div>
        {/* Centered tagline and buttons */}
        <div style={{ marginTop: '3cm' }}>
          <span
            className="block text-base md:text-xl lg:text-2xl font-serif font-normal text-white animate-fade-in mt-8 mb-8 text-center"
            style={{
              width: '100%',
              maxWidth: '600px',
              zIndex: 3,
              textShadow: '0 2px 16px rgba(0,0,0,0.5)'
            }}
          >
            Elegant. Spacious. Memorable
          </span>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in justify-center items-center" style={{animationDelay: "0.3s"}}>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2" asChild>
              <a href="tel:9591699558" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2" asChild>
              <a href="https://wa.me/9591699558?text=Hi!%20I%20just%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20Pai%20Convention%20Hall." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.12.55 4.13 1.6 5.93L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.57-.24-.38A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3 .15.19 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
                </svg>
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
