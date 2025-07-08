import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface ProductsSectionProps {
  title?: string;
  marblesImages?: ProductImage[];
  furnitureImages?: ProductImage[];
}

const ProductsSection = ({
  title = "Our Products",
  marblesImages = defaultMarblesImages,
  furnitureImages = defaultFurnitureImages,
}: ProductsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Premium materials and custom solutions for exceptional design
            projects
          </p>
        </div>

        <div className="space-y-16">
          {/* Marbles Section */}
          <ProductCarousel
            title="MARBLES"
            subtitle="We own and operate several international stone quarries, with all types of marble & natural stone (custom-cut & slab),"
            description="giving us direct access to exclusive marble and stone collections—ensuring premium quality, variety, and timely delivery for exceptional results."
            images={marblesImages}
            slantDirection="right"
          />

          {/* Custom Made Furniture Section */}
          <ProductCarousel
            title="CUSTOM-MADE FURNITURE"
            subtitle="We manufacture custom-made furniture in-house,"
            description="Partnering with top global brands to deliver bespoke and ready-made furniture, perfectly matching your design vision."
            images={furnitureImages}
            slantDirection="left"
            features={[
              "Custom-made furniture and bespoke joinery",
              "Kitchen units and cabinetry",
              "Carpets and soft furnishing",
              "Partition and decorative systems",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  description: string;
  images: ProductImage[];
  slantDirection: "left" | "right";
  features?: string[];
}

const ProductCarousel = ({
  title,
  subtitle,
  description,
  images,
  slantDirection,
  features,
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const isRightSlant = slantDirection === "right";

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${isRightSlant ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Content Side */}
      <div className={`flex-1 ${isRightSlant ? "lg:pr-8" : "lg:pl-8"}`}>
        <div className="mb-4">
          <p className="text-sm text-slate-500 mb-2">Our products</p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {title}
          </h3>
        </div>

        <div className="mb-6">
          <p className="text-lg text-slate-700 mb-2 italic">{subtitle}</p>
          <p className="text-slate-600">{description}</p>
        </div>

        {features && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-bronze mr-2 mt-1">•</span>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Carousel Side */}
      <div className="flex-1 relative">
        <div className="relative overflow-hidden">
          {/* Slanted Container */}
          <div
            className={`relative h-96 ${isRightSlant ? "transform -skew-x-12" : "transform skew-x-12"}`}
            style={{ perspective: "1000px" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`flex-shrink-0 w-1/3 h-full px-2 transition-all duration-300 ${
                    hoveredIndex === index ? "transform scale-110 z-10" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`h-full ${isRightSlant ? "transform skew-x-12" : "transform -skew-x-12"} overflow-hidden shadow-lg`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-bronze text-bronze z-20"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-bronze text-bronze z-20"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-bronze" : "bg-slate-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Placeholder images - you can replace these with actual marble and furniture images
const defaultMarblesImages: ProductImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    alt: "White Marble with Grey Veining",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&q=80",
    alt: "Black Marble with Gold Veining",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&q=80",
    alt: "Green Marble Pattern",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1600298882974-db7a8b7a5b7a?w=400&q=80",
    alt: "Beige Marble Texture",
  },
];

const defaultFurnitureImages: ProductImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    alt: "Custom Kitchen Cabinetry",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    alt: "Modern Living Room Furniture",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80",
    alt: "Custom Dining Set",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    alt: "Bespoke Storage Solutions",
  },
];

export default ProductsSection;
