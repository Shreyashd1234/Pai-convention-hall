import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import review1 from "@/assets/review1.png";
import review2 from "@/assets/review2.png";
import review3 from "@/assets/review3.png";
import review4 from "@/assets/review4.png";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "SHASHANK JAIS",
    quote: "I had a great experience at this convention hall. The place is very well-maintained and has a pleasant atmosphere. What stood out the most was the support from the staff — everyone was extremely helpful and accommodating. I even had the opportunity to speak with the owner, who came across as genuinely kind and passionate about ensuring guests have a great experience. Highly recommended for events and gatherings!",
    image: review1
  },
  {
    id: 2,
    name: "sai prabha kamath",
    quote: "Pai Convention Hall at Belagavi is an excellent venue for hosting special events. With its spacious two-level setup, it offers ample room for gatherings of all sizes while maintaining a warm and welcoming ambiance.\n\nWe recently organised Parichay, a matchmaking event by GSB Sabha Mumbai's Mahila Shakha, at this venue, and it was the perfect choice. The well-maintained space, efficient facilities, and seamless event experience made it truly memorable.\nIf you're looking for a venue that combines convenience, comfort, and a professional setup, Pai Convention Hall is a fantastic option. I highly recommend it!\nSai Prabha Kamath\nHonorary Joint Secretary\nGSB Sabha Mumbai's Mahila Shakha",
    image: review2
  },
  {
    id: 3,
    name: "Satyanarayan Vernekar",
    quote: "Pai convection hall is an excellent choice for events and gatherings. The spacious and well-ventilated hall, combined with modern amenities, convenient parking space and delicious menu.\nI would recommend Pai Convection Hall to anyone looking for a convenient and well-equipped venue.",
    image: review3
  },
  {
    id: 4,
    name: "Shivkumar Umadi",
    quote: "Pai Convention Hall is an excellent venue for hosting your events. It's very spacious and great space for parking too! We had our Yaadi (pre-engagement) ceremony at the location! Pranav is an amazing manager and we all loved his hospitality! 💯\n\nI highly recommend the hall to whoever wants to host their favourite celebrations! They also provide their catering as well- This is an all-in-one package! 🙌🏼",
    image: review4
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
                      <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-4 overflow-hidden">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                      
                      <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                      
                      <div>
                        <p className="font-medium text-charcoal">{testimonial.name}</p>
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
