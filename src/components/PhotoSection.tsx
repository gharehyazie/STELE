import React from "react";

interface PhotoSectionProps {
  imageUrl?: string;
  alt?: string;
}

const PhotoSection = ({
  imageUrl = "/images/a.png",
  alt = "Interior Design Showcase",
}: PhotoSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="w-full">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
