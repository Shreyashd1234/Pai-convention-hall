import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video, Building2, Hotel, Cake, Landmark, Store } from "lucide-react";

const facilities = [
  { 
    name: "Part of PAI Group", 
    icon: <Building2 className="h-5 w-5 text-gold" />,
    description: "Established in April 2023, we are proud to be part of the renowned PAI group"
  },
  { 
    name: "Sister Concerns", 
    icon: <Hotel className="h-5 w-5 text-gold" />,
    description: "Hotels, Resorts, Foods, Suvarna Mandir, Landmark, and Bakery"
  },
  { 
    name: "Experience", 
    icon: <Cake className="h-5 w-5 text-gold" />,
    description: "20+ years of catering and hospitality experience since 2005"
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
              className="w-full h-[500px] bg-charcoal/10 rounded-lg shadow-lg flex items-center justify-center"
            >
              <img 
                src="/images/hall-interior.jpg"
                alt="PAI Convention Hall Interior"
                className="w-full h-full object-cover rounded-lg"
              />
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
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Hall Tour Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
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
              Welcome to PAI Convention Hall, a prestigious addition to the PAI group family. Established in April 2023, we bring over two decades of catering and hospitality expertise to create unforgettable celebrations.
            </p>
            
            <p className="text-lg font-medium">
              As part of the renowned PAI group, we share the legacy of excellence with our sister concerns including hotels, resorts, foods, Suvarna Mandir, Landmark, and bakery. Our commitment to quality service and attention to detail ensures that every event becomes a cherished memory.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              {facilities.map((facility, index) => (
                <div 
                  key={facility.name} 
                  className="flex items-start space-x-4 scroll-animation"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal">{facility.name}</h3>
                    <p className="text-sm font-medium text-gray-600">{facility.description}</p>
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
