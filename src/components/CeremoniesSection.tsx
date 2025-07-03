import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import haldiImg from "@/assets/haldi.jpg";
import mehendiImg from "@/assets/mehendi.jpg";
import weddingImg from "@/assets/Wedding.jpg";
import receptionImg from "@/assets/reception.jpg";
import engagementImg from "@/assets/engagement.jpg";

interface Ceremony {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ceremonies: Ceremony[] = [
  {
    id: 1,
    name: "Haldi",
    image: haldiImg,
    description: "Traditional pre-wedding ceremony with vibrant turmeric paste and joyful rituals. Specialized decor enhances the ceremony's vibrant aesthetics."
  },
  {
    id: 2,
    name: "Mehendi",
    image: mehendiImg,
    description: "Artistic henna application with comfortable seating, display lighting, and a festive atmosphere for the bride and guests."
  },
  {
    id: 3,
    name: "Wedding",
    image: weddingImg,
    description: "Grand hall transformed into your dream wedding venue. Customizable stage, premium seating, and elegant decor to match your theme."
  },
  {
    id: 4,
    name: "Reception",
    image: receptionImg,
    description: "Elegant post-wedding celebration with dance floor options, elevated dining, and beautiful lighting arrangements."
  },
  {
    id: 5,
    name: "Engagement",
    image: engagementImg,
    description: "Intimate ceremony for exchanging rings and vows. Romantic lighting, comfortable seating, and a perfectly designed stage."
  }
];

export default function CeremoniesSection() {
  return (
    <section id="ceremonies" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">Ceremonies We Host</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            From intimate gatherings to grand celebrations, we specialize in hosting a variety of traditional ceremonies with meticulous attention to detail.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ceremonies.map((ceremony, index) => (
            <Card key={ceremony.id} className="overflow-hidden elegant-card scroll-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="relative h-64">
                <img 
                  src={ceremony.image} 
                  alt={ceremony.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair mb-2 text-charcoal">{ceremony.name}</h3>
                <p className="text-gray-600">{ceremony.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
