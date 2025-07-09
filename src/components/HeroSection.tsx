import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  tagline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Design + Decor",
  tagline = "Elevating spaces through thoughtful design and curated aesthetics",
  ctaText = "Let's talk",
  onCtaClick = () => console.log("Let's talk clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative h-screen w-full bg-mediumGrey">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero.png"
          alt="Coastal architectural design"
          className="h-full w-full object-cover"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-screen flex-col items-start justify-end p-8 lg:p-16">
        <div className="max-w-xl">
          <img
            src="/images/stele_logo&tagline_beigev2.png"
            alt="STELE: Design + Decor"
            className="mb-8 h-auto max-w-md"
          />
          <Button
            onClick={onCtaClick}
            className="group bg-bronze text-white hover:bg-bronze-700 rounded-none"
          >
            {ctaText}
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-8 right-8 z-10 hidden h-24 w-1 bg-bronze lg:block"></div>
    </section>
  );
};

export default HeroSection;
