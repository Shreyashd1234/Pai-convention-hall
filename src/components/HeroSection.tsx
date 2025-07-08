import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";
import paiHeroCover from "@/assets/PAI hero cover.png";
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
    <section id="home" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background image (now using PAI hero cover.png) */}
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
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Main hero text block (unchanged) */}
        <div className="relative w-full flex flex-col items-center" style={{ transform: 'translateY(80px)' }}>
          <span className="block text-2xl md:text-4xl lg:text-5xl font-serif font-normal mb-0 animate-fade-in" style={{ whiteSpace: 'pre-line', lineHeight: 1.1, zIndex: 2, textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}>
            Where celebrations come to life
            <br />
            in style and comfort
          </span>
          <span className="inline-block px-0 py-2 text-gold text-4xl md:text-5xl lg:text-6xl font-serif font-normal animate-fade-in" style={{ fontWeight: 700, zIndex: 2, color: '#FFD700', marginTop: '20px' }}>
            Pai Convention Hall
          </span>
        </div>
        {/* Absolutely positioned line on the chair, smaller and 1cm higher */}
        <span
          className="block text-base md:text-xl lg:text-2xl font-serif font-normal text-white animate-fade-in"
          style={{
            position: 'absolute',
            top: '65%',
            left: 'calc(50% - 18px)',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            zIndex: 3,
            textShadow: '0 2px 16px rgba(0,0,0,0.5)'
          }}
        >
          Elegant. Spacious. Memorable
        </span>
        {/* Buttons: center with respect to 'Elegant. Spacious. Memorable' */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-in justify-center items-center mt-64 md:mt-80 lg:mt-[340px]" style={{animationDelay: "0.3s", marginLeft: "-36px"}}>
          <Button size="lg" className="bg-gold hover:bg-gold/90 text-white font-medium" asChild>
            <a href="tel:918431157922" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <WhatsAppButton phoneNumber="918431157922" message="Hi! I just visited your website and want to know more about Pai Convention Hall." />
        </div>
      </div>
    </section>
  );
}
