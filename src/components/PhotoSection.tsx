import React from "react";

interface PhotoSectionProps {
  videoUrl?: string;
  fallbackImageUrl?: string;
  alt?: string;
}

const PhotoSection = ({
  videoUrl = "/images/villa-video.mp4",
  fallbackImageUrl = "/images/a.png",
  alt = "Interior Design Showcase",
}: PhotoSectionProps) => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="w-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            poster={fallbackImageUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            {/* Fallback image for browsers that don't support video */}
            <img
              src={fallbackImageUrl}
              alt={alt}
              className="w-full h-auto object-cover"
            />
          </video>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
