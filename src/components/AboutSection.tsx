import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video, Building2, Hotel, Cake, Landmark, Store, Utensils, Home, Star } from "lucide-react";
import paiPromoVideo from "@/assets/Pai promo.mp4";
import hallInterior from "@/assets/hall-interior.jpg";
import paiHeroCover from "@/assets/PAI hero cover.jpg";
import paiAboutUsImage from "@/assets/pai about us image.jpg";

const facilities = [
  { 
    name: "Experience", 
    icon: <Cake className="h-5 w-5 text-gold" />,
    description: "20+ years of catering and hospitality experience"
  },
  { 
    name: "Location", 
    icon: <Landmark className="h-5 w-5 text-gold" />,
    description: "Conveniently located within the city with easy accessibility"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative scroll-animation">
            <div 
              className="w-full h-[500px] bg-charcoal/10 rounded-lg shadow-lg flex items-center justify-center relative"
            >
              <img 
                src={paiAboutUsImage}
                alt="PAI Convention Hall About Us"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Black overlay for better button visibility */}
              <div className="absolute inset-0 bg-black/50 rounded-lg pointer-events-none"></div>
            </div>
            
            {/* Video Walkthrough Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-charcoal"
                  variant="outline"
                  size="lg"
                >
                  <Video className="mr-2 h-5 w-5" />
                  Watch Tour
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <div className="aspect-video">
                  <iframe
                    src="https://drive.google.com/file/d/1R8AxVd7o-tFAsO5aI_ENNxHE82T1DWlG/preview"
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    style={{ borderRadius: "0.5rem", background: "#000" }}
                    allowFullScreen
                    title="Watch Tour Video"
                  ></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="scroll-animation" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">About PAI Convention Hall</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
            </div>
            
            <p className="text-lg font-medium">
              Welcome to PAI Convention Hall, a prestigious addition to the PAI group. We bring over two decades of catering and hospitality expertise to create unforgettable celebrations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-stretch">
              {facilities.map((facility, index) => (
                <div 
                  key={facility.name} 
                  className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-2 md:space-y-0 md:space-x-4 border border-gold/30 rounded-xl p-4 bg-white/60 shadow-sm mb-4 last:mb-0 scroll-animation h-full"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mb-2 md:mb-0">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">{facility.name}</h3>
                    {facility.description && <p className="text-sm font-medium text-gray-600">{facility.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
