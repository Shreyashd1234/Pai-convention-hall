import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import paiLogo from '../assets/pai hall logo.png';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
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
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          scrollTo('#home');
        }}>
          <div className="relative">
            <img 
              src={paiLogo} 
              alt="PAI Hall Logo" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-16' : 'h-24'
              } w-auto object-contain`}
            />
          </div>
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
              className={`font-medium ${
                isScrolled 
                  ? 'text-charcoal hover:text-gold' 
                  : 'text-white hover:text-gold/80'
              } transition-colors duration-300`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="default" 
            className="bg-gold hover:bg-gold/90 text-white font-medium"
            onClick={() => window.location.href = 'tel:+919591699558'}
          >
            Call Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className={`md:hidden ${
            isScrolled ? 'text-charcoal' : 'text-white'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="block py-3 text-charcoal hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="w-full mt-4 bg-gold hover:bg-gold/90 text-white font-medium"
              onClick={() => window.location.href = 'tel:+919591699558'}
            >
              Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
