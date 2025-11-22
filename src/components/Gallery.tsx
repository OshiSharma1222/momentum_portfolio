"use client";

import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";
import event7 from "@/assets/event-7.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const images = [
    { src: event1, alt: "2025", category: "Class" },
    { src: event2, alt: "2024", category: "Class" },
    { src: event3, alt: "2023", category: "Class" },
    { src: event5, alt: "2021", category: "Class" },
    { src: event6, alt: "2020", category: "Class" },
    { src: event7, alt: "2019-18-17-16", category: "Class" },
  ];

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...images, ...images, ...images];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capturing moments of innovation, collaboration, and success from our events and activities.
          </p>
        </div>

        {selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh] w-full animate-in zoom-in-95 duration-500">
              <img
                src={images[selectedImage % images.length].src}
                alt={images[selectedImage % images.length].alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-lg">
                <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2">
                  {images[selectedImage % images.length].category}
                </div>
                <p className="text-white font-semibold text-xl">{images[selectedImage % images.length].alt}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-primary transition-all duration-200 text-4xl font-light bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -100 * images.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 4,
                ease: "linear",
              },
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px]"
                whileHover={{ scale: .75 }}
                transition={{ duration: 0.1 }}
              >
                <div 
                  className="relative overflow-hidden rounded-xl aspect-video group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2">
                        {image.category}
                      </div>
                      <p className="text-foreground font-semibold text-lg">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
