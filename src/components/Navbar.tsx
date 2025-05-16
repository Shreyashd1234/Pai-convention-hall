
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Ceremonies", href: "#ceremonies" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Amenities", href: "#amenities" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-serif text-gold">
          Elegance Hall
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-charcoal hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-gold hover:bg-gold/90">
            Book Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>
      </div>
      
      {/* Mobile menu dropdown */}
      <div className={`md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-charcoal hover:text-gold transition-colors duration-300 py-1"
            >
              {link.name}
            </a>
          ))}
          <Button variant="default" className="bg-gold hover:bg-gold/90 w-full">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
