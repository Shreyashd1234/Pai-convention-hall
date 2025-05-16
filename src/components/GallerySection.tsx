
import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery-1.jpg", category: "Decoration", alt: "Elegant table setting" },
  { id: 2, src: "/images/gallery-2.jpg", category: "Wedding", alt: "Wedding ceremony" },
  { id: 3, src: "/images/gallery-3.jpg", category: "Reception", alt: "Reception hall" },
  { id: 4, src: "/images/gallery-4.jpg", category: "Decoration", alt: "Floral arrangements" },
  { id: 5, src: "/images/gallery-5.jpg", category: "Haldi", alt: "Haldi ceremony" },
  { id: 6, src: "/images/gallery-6.jpg", category: "Mehendi", alt: "Mehendi celebration" },
  { id: 7, src: "/images/gallery-7.jpg", category: "Wedding", alt: "Wedding decor" },
  { id: 8, src: "/images/gallery-8.jpg", category: "Reception", alt: "Evening reception" }
];

const categories = ["All", ...new Set(galleryImages.map(img => img.category))];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our collection of beautiful moments captured at Elegance Hall.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
          {filteredImages.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative h-64 overflow-hidden rounded-lg cursor-pointer hover-scale">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">{image.category}</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <div className="w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto rounded-md"
                  />
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
