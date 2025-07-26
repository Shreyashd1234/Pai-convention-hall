import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
import paiHeroCover from "@/assets/PAI hero cover.jpg";
import { useNavigate } from 'react-router-dom';
import { Phone } from "lucide-react";
import whatsappIcon from '@/assets/whatsapp-48.png';

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
            <Button size="default" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2 w-40 justify-center px-0 py-2" asChild>
              <a href="tel:9591699558" className="flex items-center gap-2 w-full justify-center px-0 py-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="default" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2 w-40 justify-center px-0 py-2" asChild>
              <a href="https://wa.me/9591699558?text=Hi!%20I%20just%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20Pai%20Convention%20Hall." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center px-0 py-2">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
