
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const facilities = [
  { name: "Air Conditioning", icon: "air-vent" },
  { name: "Spacious Hall", icon: "house" },
  { name: "Ample Parking", icon: "car" },
  { name: "Generator Backup", icon: "settings" }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/hall-interior.jpg" 
              alt="Elegance Hall Interior" 
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            
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
          
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-2">About Elegance Hall</h2>
              <div className="w-20 h-1 bg-gold mb-6"></div>
            </div>
            
            <p className="text-lg">
              Welcome to Elegance Hall, where we transform your special occasions into unforgettable memories. Our luxurious convention center spans over 12,000 square feet of elegantly designed space, perfect for hosting the most magnificent celebrations.
            </p>
            
            <p className="text-lg">
              With a seating capacity of up to 800 guests in our main hall and 300 in our auxiliary hall, we provide the perfect setting for weddings, receptions, and all types of ceremonies. Our state-of-the-art facilities, combined with our dedicated staff, ensure that every detail of your event is executed flawlessly.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {facilities.map((facility) => (
                <div key={facility.name} className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <span className="text-gold">{facility.icon}</span>
                  </div>
                  <span>{facility.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
