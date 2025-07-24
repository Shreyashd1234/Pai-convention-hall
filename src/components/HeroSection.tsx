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
            <Button size="default" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2 w-40 justify-center px-0 py-2" asChild>
              <a href="tel:9591699558" className="flex items-center gap-2 w-full justify-center px-0 py-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="default" className="bg-gold hover:bg-gold/90 text-white font-medium flex items-center gap-2 w-40 justify-center px-0 py-2" asChild>
              <a href="https://wa.me/9591699558?text=Hi!%20I%20just%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20Pai%20Convention%20Hall." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full justify-center px-0 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.208 5.077 4.374.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 6.107h-.001a9.87 9.87 0 01-4.988-1.358l-.357-.213-3.711.964.99-3.627-.232-.373A9.86 9.86 0 012.155 12.04c0-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.45-4.437 9.884-9.884 9.884zm8.413-18.297A11.815 11.815 0 0012.045.003C5.495.003.002 5.495.002 12.04c0 2.123.555 4.198 1.607 6.032L.057 23.925a1 1 0 001.225 1.225l5.853-1.552a11.93 11.93 0 005.91 1.507h.005c6.549 0 12.042-5.493 12.045-12.042a11.89 11.89 0 00-3.487-8.457z"/>
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
