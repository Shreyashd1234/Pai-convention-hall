import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Get email from form
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    
    // Show toast notification
    toast({
      title: "Successfully subscribed!",
      description: `${email} has been added to our newsletter.`,
    });
    
    // Reset form
    form.reset();
  };
  
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white">PAI Convention Hall</h3>
            <p className="text-gray-300">
              Where every celebration becomes an unforgettable memory. Luxury meets tradition in our elegant spaces.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#ceremonies" className="hover:text-gold transition-colors">Ceremonies</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Behind Nagshanti Showroom</li>
              <li>Udyambag,Belgaum, Karnataka 590008</li>
              <li>+91 95916 99558</li>
              <li>bookings@paiconventionhall.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} PAI Convention Hall. All rights reserved. <span className="mx-2">|</span> Developed by Nextverse
          </div>
          <div className="space-x-6">
            <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
