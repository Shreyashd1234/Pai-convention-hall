import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Dark overlay (can keep or remove depending on desired look with solid background) */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 animate-fade-in">
          Where celebrations come to life in style and comfort <br />
          <span className="text-gold">Pai Convention Hall</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-slide-in">
          Elegant. Spacious. Memorable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{animationDelay: "0.3s"}}>
          <Button size="lg" className="bg-white text-charcoal hover:bg-gray-100">
            Explore More
          </Button>
          <WhatsAppButton phoneNumber="918431157922" />
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
