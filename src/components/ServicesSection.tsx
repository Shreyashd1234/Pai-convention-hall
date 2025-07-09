import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Building2, Music, Car, Theater, Sofa } from "lucide-react";

interface AmenityCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  points: string[];
}

const amenities: AmenityCategory[] = [
  {
    id: 1,
    name: "Venue & Infrastructure",
    icon: <Building2 className="h-8 w-8 text-gold" />,
    points: [
      "Spacious, modern facilities for seamless celebrations",
      "Beautifully designed stage for ceremonies and performances",
      "Lift for easy accessibility",
      "Generator backup for uninterrupted events",
      "Secure, ample parking for all guests"
    ]
  },
  {
    id: 2,
    name: "Culinary Experience",
    icon: <Utensils className="h-8 w-8 text-gold" />,
    points: [
      "Delicious vegetarian cuisine with regional menu options",
      "Unlimited buffet with customizable menus",
      "Expert catering and menu planning",
      "Continuous food service throughout your event",
      "No hall rent for bookings above ₹35,000"
    ]
  },
  {
    id: 3,
    name: "Entertainment & Audio",
    icon: <Music className="h-8 w-8 text-gold" />,
    points: [
      "Sound system for a lively atmosphere",
      "Microphones for announcements and performances",
      "On-site technical support"
    ]
  },
  {
    id: 4,
    name: "Guest Comfort",
    icon: <Sofa className="h-8 w-8 text-gold" />,
    points: [
      "Two changing rooms with dressing tables",
      "Attached bathrooms for convenience",
      "Plush, comfortable seating for all guests"
    ]
  },
  {
    id: 5,
    name: "Event Essentials",
    icon: <Theater className="h-8 w-8 text-gold" />,
    points: [
      "Elegant décor and customizable lighting",
      "Professional event support staff",
      "Adaptable layouts for all types of occasions"
    ]
  },
  {
    id: 6,
    name: "Accessibility & Parking",
    icon: <Car className="h-8 w-8 text-gold" />,
    points: [
      "Easy access for elderly and differently-abled guests",
      "Large, secure parking area",
      "Convenient drop-off zone at the entrance"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section id="amenities" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-medium">Our Amenities</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 font-normal">
            Discover all the amenities you need for a perfect celebration, from regional cuisine and modern facilities to seamless event support and guest comfort. Every detail is designed to make your event truly memorable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((category, index) => (
            <Card 
              key={category.id} 
              className="elegant-card hover-scale scroll-animation"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-medium mb-4">{category.name}</h3>
                <ul className="space-y-2 text-gray-600 text-left mx-auto max-w-xs font-normal">
                  {category.points.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 