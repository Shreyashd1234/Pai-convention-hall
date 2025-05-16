
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  event: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rahul",
    event: "Wedding",
    image: "/images/testimonial-1.jpg",
    quote: "Our wedding at Elegance Hall was absolutely perfect. The staff went above and beyond to accommodate our requests, and the venue itself is breathtaking. Our guests couldn't stop complimenting the beautiful decor and excellent service."
  },
  {
    id: 2,
    name: "Ananya Kumar",
    event: "Reception",
    image: "/images/testimonial-2.jpg",
    quote: "We hosted our daughter's reception at Elegance Hall and were amazed by the attention to detail. The lighting, sound system, and catering coordination were flawless. It truly exceeded our expectations."
  },
  {
    id: 3,
    name: "Vikram & Meera",
    event: "Engagement",
    image: "/images/testimonial-3.jpg",
    quote: "We had our engagement ceremony here and loved every moment. The elegant ambiance created the perfect romantic atmosphere. The management was incredibly professional and helped us plan everything to perfection."
  },
  {
    id: 4,
    name: "Sanjay Patel",
    event: "Naming Ceremony",
    image: "/images/testimonial-4.jpg",
    quote: "We celebrated our son's naming ceremony at this wonderful venue. The space was beautifully decorated according to our traditions, and the staff was very accommodating with all our cultural requirements."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-blush/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-2">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                      
                      <div>
                        <p className="font-medium text-charcoal">{testimonial.name}</p>
                        <p className="text-sm text-gold">{testimonial.event}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
