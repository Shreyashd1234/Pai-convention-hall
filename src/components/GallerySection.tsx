import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import haldi1 from "@/assets/haldi1.jpg";
import wedding1 from "@/assets/wedding1.jpg";
import wedding2 from "@/assets/wedding2.jpg";
import wedding3 from "@/assets/wedding3.jpg";

interface GalleryImage {
  id: number;
  alt: string;
  image: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, alt: "Gallery Image 1", image: gallery1 },
  { id: 2, alt: "Gallery Image 2", image: gallery2 },
  { id: 3, alt: "Gallery Image 3", image: gallery3 },
  { id: 4, alt: "Gallery Image 4", image: gallery4 },
  { id: 5, alt: "Gallery Image 5", image: gallery5 },
  { id: 6, alt: "Haldi Ceremony 2", image: haldi1 },
  { id: 7, alt: "Wedding Moment 2", image: wedding2 },
  { id: 8, alt: "Wedding Moment 3", image: wedding3 }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-ivory">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Our Gallery</h2>
          <div className="w-24 h-1 bg-gold mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore our collection of beautiful moments captured at PAI Convention Hall.
          </p>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative h-64 overflow-hidden rounded-lg"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <img 
                src={image.image} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
