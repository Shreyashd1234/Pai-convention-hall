import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  category: string;
  alt: string;
  image: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    category: "Decoration",
    alt: "Elegant table setting",
    image: "https://images.unsplash.com/photo-1618070180684-e66a1f6a309b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    category: "Wedding",
    alt: "Wedding ceremony",
    image: "https://images.unsplash.com/photo-1523400971624-5cc86c3a3edc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    category: "Reception",
    alt: "Reception hall setup",
    image: "https://images.unsplash.com/photo-1520854221256-c2f0b307b63d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    category: "Decoration",
    alt: "Stage decoration",
    image: "https://images.unsplash.com/photo-1521334346118-e4f361df8d0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    category: "Haldi",
    alt: "Haldi ceremony setup",
    image: "https://images.unsplash.com/photo-1610560373521-eb2cf29d061f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 6,
    category: "Mehendi",
    alt: "Mehendi function",
    image: "https://images.unsplash.com/photo-1575544712856-357207e9b7ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    category: "Wedding",
    alt: "Wedding mandap",
    image: "https://images.unsplash.com/photo-1587903081971-4c8f96d1f957?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 8,
    category: "Reception",
    alt: "Reception stage",
    image: "https://images.unsplash.com/photo-1524250593659-efa838174715?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeCategory));
    }
  }, [activeCategory]);
  
  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-12 scroll-animation">
          <h2 className="text-3xl md:text-4xl font-serif">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our collection of beautiful moments captured at PAI Convention Hall.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 scroll-animation" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-gold hover:bg-gold/90" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div 
                  className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover-scale scroll-animation"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <img 
                    src={image.image} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="ceremony-overlay">
                     <span className="text-white text-lg">View Details</span>
                   </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <div className="w-full">
                  <div className="aspect-video overflow-hidden rounded-md">
                    <img 
                      src={image.image} 
                      alt={image.alt}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="mt-2 text-center">{image.alt} - {image.category}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
