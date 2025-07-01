import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2,
  Utensils,
  Music,
  Users
} from "lucide-react";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  amenities: string[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Venue & Infrastructure",
    description: "Essential facilities for a perfect celebration",
    icon: <Building2 className="h-8 w-8 text-gold" />,
    amenities: [
      "Professional stage for ceremonies and performances",
      "Modern lift for easy accessibility",
      "Comprehensive generator backup for uninterrupted power supply",
      "Spacious parking area for guest convenience"
    ]
  },
  {
    id: 2,
    name: "Culinary Services",
    description: "Exquisite dining experience for your guests",
    icon: <Utensils className="h-8 w-8 text-gold" />,
    amenities: [
      "Unlimited buffet service with customizable menu options",
      "Professional catering team",
      "Specialized menu planning",
      "Continuous food replenishment"
    ]
  },
  {
    id: 3,
    name: "Entertainment Setup",
    description: "Professional audio system for your event",
    icon: <Music className="h-8 w-8 text-gold" />,
    amenities: [
      "High-quality music system for entertainment",
      "Professional microphones for announcements",
      "Technical support during events",
      "Flexible audio setup options"
    ]
  },
  {
    id: 4,
    name: "Guest Facilities",
    description: "Comfortable amenities for your guests",
    icon: <Users className="h-8 w-8 text-gold" />,
    amenities: [
      "Two spacious changing rooms with dressing tables",
      "Attached bathrooms for convenience",
      "Comfortable seating arrangement",
      "Dedicated function spaces"
    ]
  }
];

export default function AmenitiesSpecifications() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">Our Amenities</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Everything you need for a perfect celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="elegant-card hover-scale scroll-animation"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair mb-2">{category.name}</h3>
                    <p className="text-gray-600 italic">{category.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {category.amenities.map((amenity, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed">
                      {amenity}
                    </li>
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