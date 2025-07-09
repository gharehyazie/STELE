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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-darkGrey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
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
  const isRightSlant = slantDirection === "right";

  // For marbles section, show all 4 images
  const displayImages = images;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-8 ${isRightSlant ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Content Side */}
      <div className={`flex-1 ${isRightSlant ? "lg:pr-8" : "lg:pl-8"}`}>
        <div className="mb-4">
          <p className="text-sm text-white/60 mb-2">Our products</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {title}
          </h3>
        </div>

        <div className="mb-6">
          <p className="text-lg text-white/90 mb-2 italic">{subtitle}</p>
          <p className="text-white/70">{description}</p>
        </div>

        {features && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-bronze mr-2 mt-1">•</span>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Carousel/Gallery Side */}
      <div className="flex-1 relative">
        {/* Gallery with parallelogram shapes using clip-path */}
        <div className="relative h-96 flex">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="flex-1 h-full shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                zIndex: images.length - index,
                clipPath:
                  title === "MARBLES"
                    ? "polygon(0 0, 80% 0, 100% 100%, 20% 100%)"
                    : "polygon(20% 0, 100% 0, 80% 100%, 0% 100%)",
                overflow: "hidden",
                "margin-right": "-50px",
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Marble images matching the reference design
const defaultMarblesImages: ProductImage[] = [
  {
    id: "1",
    url: "/images/image 12.png",
    alt: "White Marble with Grey Veining",
  },
  {
    id: "2",
    url: "/images/image 19.png",
    alt: "Golden Brown Marble",
  },
  {
    id: "3",
    url: "/images/image 22.png",
    alt: "Black Marble with Gold Veining",
  },
  {
    id: "4",
    url: "/images/GP01087_b.png",
    alt: "Beige Marble Texture",
  },
];

const defaultFurnitureImages: ProductImage[] = [
  {
    id: "1",
    url: "/images/image 23.png",
    alt: "Custom Kitchen Cabinetry",
  },
  {
    id: "2",
    url: "/images/image 24.png",
    alt: "Modern Living Room Furniture",
  },
  {
    id: "3",
    url: "/images/image 5.png",
    alt: "Custom Dining Set",
  },
];

export default ProductsSection;
