import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  event: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya & Rahul",
    event: "Wedding",
    quote: "Our wedding at PAI Convention Hall was absolutely perfect. The staff went above and beyond to accommodate our requests, and the venue itself is breathtaking. Our guests couldn't stop complimenting the beautiful decor and excellent service."
  },
  {
    id: 2,
    name: "Ananya Kumar",
    event: "Reception",
    quote: "We hosted our daughter's reception at PAI Convention Hall and were amazed by the attention to detail. The lighting, sound system, and catering coordination were flawless. It truly exceeded our expectations."
  },
  {
    id: 3,
    name: "Vikram & Meera",
    event: "Engagement",
    quote: "We had our engagement ceremony here and loved every moment. The elegant ambiance created the perfect romantic atmosphere. The management was incredibly professional and helped us plan everything to perfection."
  },
  {
    id: 4,
    name: "Sanjay Patel",
    event: "Naming Ceremony",
    quote: "We celebrated our son's naming ceremony at this wonderful venue. The space was beautifully decorated according to our traditions, and the staff was very accommodating with all our cultural requirements."
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-blush/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">What Our Guests Say</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
        </div>
        
        <Carousel className="max-w-4xl mx-auto scroll-animation" style={{ animationDelay: "0.2s" }}>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-2">
                  <Card className="border-none shadow-lg scroll-animation" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                        <span className="text-2xl font-serif text-gold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
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
