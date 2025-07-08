import React from "react";
import { Button } from "./ui/button";

interface SecondarySectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const SecondarySection = ({
  title = "Modern Design Philosophy",
  description = "At STELE: Design + Decor, we believe in creating spaces that blend functionality with aesthetic beauty. Our approach combines clean lines, natural materials, and thoughtful details to craft environments that inspire and endure. Each project is a unique expression of our client's vision, elevated through our expertise in contemporary design principles.",
  buttonText = "About Us",
  onButtonClick = () => console.log("About button clicked"),
}: SecondarySectionProps) => {
  return (
    <section className="relative w-full h-[700px] bg-stone-100">
      {/* Background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&q=80')`,
          backgroundImage: `url('/a.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            {title}
          </h2>

          <div className="w-20 h-[2px] bg-amber-700 mb-8"></div>

          <p className="text-lg md:text-xl mb-10 leading-relaxed font-light">
            {description}
          </p>

          <Button
            onClick={onButtonClick}
            className="bg-amber-700 hover:bg-amber-800 text-white rounded-none px-8 py-6 h-auto text-base"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecondarySection;
