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
    <section className="py-16 bg-orange md:px-[-16] px-[-16] lg:px-[-16] pb-0 overflow-hidden">
      <div className="mx-auto lg:px-0 md:px-0 px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple">
            {title}
          </h2>
          <p className="text-lg text-purple/80 max-w-2xl mx-auto">
            Premium materials and custom solutions for exceptional design
            projects
          </p>
        </div>
        <div className="bg-orange-200 pl-8 md:pl-16 lg:pl-24 overflow-hidden">
          {/* Marbles Section */}
          <ProductCarousel
            title="MARBLES"
            subtitle="We own and operate several international stone quarries, with all types of marble & natural stone (custom-cut & slab),"
            description="giving us direct access to exclusive marble and stone collections—ensuring premium quality, variety, and timely delivery for exceptional results."
            images={marblesImages}
            slantDirection="right"
          />
        </div>
        <div className="bg-mediumGrey-900 pr-8 md:pr-16 lg:pr-24 overflow-hidden">
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
            className=""
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
      className={`flex flex-col lg:flex-row items-center gap-16 ${isRightSlant ? "" : "lg:flex-row-reverse"}`}
    >
      {/* Content Side */}
      <div
        className={`w-full lg:w-2/5 ${isRightSlant ? "lg:pr-16" : "lg:pl-16 text-right"}`}
      >
        <div className="mb-4">
          <p className="text-sm text-purple/60 mb-2">Our products</p>
          <h3 className="text-2xl md:text-3xl font-bold text-purple mb-4">
            {title}
          </h3>
        </div>

        <div className="mb-6">
          <p className="text-lg text-purple/90 mb-2 italic">{subtitle}</p>
          <p className="text-purple/70">{description}</p>
        </div>

        {features && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start ${!isRightSlant ? "justify-end" : ""}`}
              >
                <span
                  className={`text-orange mt-1 ${isRightSlant ? "mr-2" : "ml-2 order-2"}`}
                >
                  •
                </span>
                <span
                  className={`text-purple/80 ${!isRightSlant ? "order-1" : ""}`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Carousel/Gallery Side */}
      <div className="w-full lg:w-3/5 relative">
        {/* Gallery with parallelogram shapes using clip-path */}
        <div className="relative h-[500px] flex">
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
                marginRight: "-120px",
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
    url: "/images/image 19.png",
    alt: "Golden Brown Marble",
  },
  {
    id: "2",
    url: "/images/image 12.png",
    alt: "White Marble with Grey Veining",
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
    url: "/images/luxury-kitchen-cabinetry.jpg",
    alt: "Luxury Kitchen Cabinetry",
  },
  {
    id: "2",
    url: "/images/modern-dining-room.jpg",
    alt: "Modern Dining Room Furniture",
  },
  {
    id: "3",
    url: "/images/contemporary-living-space.jpg",
    alt: "Contemporary Living Space Design",
  },
];

export default ProductsSection;
