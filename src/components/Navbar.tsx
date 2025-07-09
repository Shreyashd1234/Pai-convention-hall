import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import paiLogo from '../assets/pai hall logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Ceremonies", href: "#ceremonies" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

function smoothScrollTo(element: HTMLElement, duration = 1400) {
  const start = window.scrollY;
  const end = element.getBoundingClientRect().top + window.scrollY;
  const change = end - start;
  const startTime = performance.now();

  function animateScroll(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + change * easeInOutCubic(progress));
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }
  function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }
  requestAnimationFrame(animateScroll);
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  // Smooth scroll to section if hash is present in URL
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash) as HTMLElement;
      if (el) {
        setTimeout(() => {
          smoothScrollTo(el, 700);
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location.hash]);

  useEffect(() => {
    if (!isHome) return;
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const options = { threshold: 0.5 };
    observerRef.current = new window.IntersectionObserver(handleObserve, options);
    navLinks.forEach((link) => {
      const id = link.href.replace('#', '');
      const section = document.getElementById(id);
      if (section) observerRef.current!.observe(section);
    });
    return () => {
      observerRef.current?.disconnect();
    };
  }, [isHome]);

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHome
          ? (isScrolled 
              ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' 
              : 'bg-transparent py-4')
          : 'bg-white py-2 shadow-md'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <a href={isHome ? "#home" : "/#home"} className="flex items-center" onClick={(e) => {
          e.preventDefault();
          handleNavClick('#home');
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
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-medium relative px-2 transition-colors duration-300
                  ${isActive
                    ? 'text-gold'
                    : isHome && !isScrolled
                      ? 'text-white hover:text-gold/80'
                      : 'text-charcoal hover:text-gold'}
                `}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-gold transition-all duration-500
                    ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  style={{ transformOrigin: 'left' }}
                />
              </a>
            );
          })}
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
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                  setMobileMenuOpen(false); // Close mobile menu on section click
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
