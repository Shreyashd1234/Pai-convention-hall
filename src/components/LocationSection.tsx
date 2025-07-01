import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">Find Us</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We're conveniently located in the heart of the city with easy access from all major routes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Information */}
          <div className="lg:col-span-1 scroll-animation" style={{ animationDelay: "0.2s" }}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p>Pai Convention Hall</p>
                    <p>Behind Nagshanti Showroom</p>
                    <p>Udyambag,Belgaum, Karnataka 590008</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p>Viewings: 10:00 AM - 7:00 PM</p>
                    <p>Events: As per booking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gold mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Contact</h3>
                    <p>Phone: +91 95916 99558</p>
                    <p>Email: bookings@paiconventionhall.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Google Map */}
          <div className="lg:col-span-2 scroll-animation" style={{ animationDelay: "0.3s" }}>
            <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.684559415892!2d74.48993977513075!3d15.820578284823442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf650041397155%3A0x4ef0da497e750a93!2sPai%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1748013153650!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="PAI Convention Hall Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
