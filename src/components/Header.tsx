import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  logo?: string;
  menuItems?: { label: string; href: string }[];
}

const Header = ({
  logo = "STELE",
  menuItems = [
    { label: "Home", href: "#top" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Projects", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-beige shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="transition-opacity duration-300">
            <img
              src={
                isScrolled
                  ? "/images/stele_logo_orange.png"
                  : "/images/stele_logo_beige.png"
              }
              alt="STELE"
              className="h-8 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`transition-all duration-300 hover:bg-orange/10 text-lg ${
                  isScrolled
                    ? "text-purple hover:text-orange"
                    : "text-white hover:text-orange-200"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className={`ml-4 rounded-none transition-all duration-300 text-lg ${
                isScrolled
                  ? "bg-orange hover:bg-orange-700 text-white"
                  : "bg-orange hover:bg-orange-700 text-white"
              }`}
              onClick={() =>
                window.open("https://wa.me/+971585200478", "_blank")
              }
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-purple" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-beige shadow-lg border-t border-white/20">
            <div className="py-4 px-4 space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-purple hover:text-orange hover:bg-orange/10 text-lg"
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                className="w-full bg-orange hover:bg-orange-700 text-white rounded-none mt-2 text-lg"
                onClick={() =>
                  window.open("https://wa.me/+971585200478", "_blank")
                }
              >
                Let's talk
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
