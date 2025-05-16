
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AirVent, Car, Utensils, Music, Users, WifiIcon } from "lucide-react";

interface Amenity {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const amenities: Amenity[] = [
  {
    id: 1,
    name: "Air Conditioned Hall",
    description: "Fully air-conditioned spaces with temperature control for guest comfort in all seasons.",
    icon: <AirVent className="h-8 w-8 text-gold" />
  },
  {
    id: 2,
    name: "Ample Parking",
    description: "Secure parking for up to 200 vehicles with valet service available on request.",
    icon: <Car className="h-8 w-8 text-gold" />
  },
  {
    id: 3,
    name: "Catering Options",
    description: "Flexible catering options with specialized menus for different ceremonies and preferences.",
    icon: <Utensils className="h-8 w-8 text-gold" />
  },
  {
    id: 4,
    name: "Professional Sound System",
    description: "High-quality audio equipment with technical support for announcements and music.",
    icon: <Music className="h-8 w-8 text-gold" />
  },
  {
    id: 5,
    name: "Changing Rooms",
    description: "Private changing rooms with amenities for bride, groom, and family members.",
    icon: <Users className="h-8 w-8 text-gold" />
  },
  {
    id: 6,
    name: "Free WiFi",
    description: "High-speed internet access throughout the venue for all guests and event organizers.",
    icon: <WifiIcon className="h-8 w-8 text-gold" />
  }
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Our Amenities</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We provide everything you need to make your special day perfect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity) => (
            <Card key={amenity.id} className="elegant-card hover-scale">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-playfair mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
