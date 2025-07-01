import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
    image: "/images/haldi.jpg",
    description: "Traditional pre-wedding ceremony featuring vibrant yellow turmeric paste and joyful rituals. Our specialized decor enhances the vibrant aesthetics of this auspicious ceremony."
  },
  {
    id: 2,
    name: "Mehendi",
    image: "/images/mehendi.jpg",
    description: "Artistic henna application ceremony where we provide comfortable seating areas, display lighting, and a festive atmosphere for the bride and guests."
  },
  {
    id: 3,
    name: "Wedding",
    image: "/images/wedding.jpg",
    description: "The main celebration with our grand hall transformed into your dream wedding venue. Customizable stage setup, premium seating, and elegant decor to match your theme."
  },
  {
    id: 4,
    name: "Reception",
    image: "/images/reception.jpg",
    description: "Elegant post-wedding celebration with sophisticated ambiance. Our reception setups include dance floor options, elevated dining experience, and beautiful lighting arrangements."
  },
  {
    id: 5,
    name: "Engagement",
    image: "/images/engagement.jpg",
    description: "Intimate ceremony for exchanging rings and vows. We create a romantic atmosphere with special lighting, comfortable seating, and a perfectly designed stage."
  },
  {
    id: 6,
    name: "Naming Ceremony",
    image: "/images/naming.jpg",
    description: "Special celebration welcoming a new member to the family. Our arrangements include appropriate religious setups, guest accommodations, and joyful decor themes."
  }
];

export default function CeremoniesSection() {
  const [selectedCeremony, setSelectedCeremony] = useState<Ceremony | null>(null);
  const [open, setOpen] = useState(false);
  
  const handleBookNow = () => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  
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
            <Dialog key={ceremony.id} open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden elegant-card hover-scale cursor-pointer scroll-animation" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="relative h-64">
                    <img 
                      src={ceremony.image} 
                      alt={ceremony.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="ceremony-overlay">
                      <span className="text-white text-lg">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair mb-2 text-charcoal">{ceremony.name}</h3>
                    <p className="text-gray-600 line-clamp-2">{ceremony.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <div className="grid gap-4">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={ceremony.image} 
                      alt={ceremony.name}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair mb-2">{ceremony.name}</h3>
                    <p className="mb-4">{ceremony.description}</p>
                    <Button 
                      onClick={handleBookNow}
                      className="w-full bg-gold hover:bg-gold/90 text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
