import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Building2, Music, Car, ArrowUpDown, Power, Sofa, Theater, Users } from "lucide-react";

interface Service {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    name: "Catering Services",
    description: "Exclusive vegetarian catering with regional menu options. No hall rent for bookings above ₹35,000.",
    icon: <Utensils className="h-8 w-8 text-gold" />
  },
  {
    id: 2,
    name: "Venue Options",
    description: "Flexible indoor and outdoor spaces for your event, with dedicated areas for dining and ceremonies.",
    icon: <Building2 className="h-8 w-8 text-gold" />
  },
  {
    id: 3,
    name: "Entertainment",
    description: "Professional sound system with microphone for announcements and background music.",
    icon: <Music className="h-8 w-8 text-gold" />
  },
  {
    id: 4,
    name: "Parking & Access",
    description: "Convenient parking space and lift access within the city limits.",
    icon: <Car className="h-8 w-8 text-gold" />
  },
  {
    id: 5,
    name: "Power Backup",
    description: "Uninterrupted power supply with generator backup for your event.",
    icon: <Power className="h-8 w-8 text-gold" />
  },
  {
    id: 6,
    name: "Furniture & Setup",
    description: "Comfortable chairs and a beautiful stage for your ceremonies.",
    icon: <Sofa className="h-8 w-8 text-gold" />
  },
  {
    id: 7,
    name: "Changing Rooms",
    description: "Two spacious changing rooms with dressing tables and attached bathrooms.",
    icon: <Users className="h-8 w-8 text-gold" />
  },
  {
    id: 8,
    name: "Unlimited Food",
    description: "Unlimited buffet service with your choice of menu.",
    icon: <Utensils className="h-8 w-8 text-gold" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">Our Services</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive services to make your event perfect, from catering to venue setup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="elegant-card hover-scale scroll-animation"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-playfair mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 