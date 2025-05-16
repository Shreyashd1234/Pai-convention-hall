
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from "./WhatsAppButton";

const images = [
  "/images/wedding-hall-1.jpg", 
  "/images/wedding-hall-2.jpg",
  "/images/wedding-hall-3.jpg"
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4 animate-fade-in">
          Celebrate Your Special Moments at <br />
          <span className="text-gold">Elegance Hall</span>
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
