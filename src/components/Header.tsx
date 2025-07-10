import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  logo?: string;
  menuItems?: string[];
}

const Header = ({
  logo = "STELE",
  menuItems = ["Home", "Projects", "About", "Contact"],
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled ? "bg-darkGrey shadow-md backdrop-blur-sm" : "bg-transparent"
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
                key={item}
                variant="ghost"
                className={`transition-all duration-300 hover:bg-bronze/10 ${
                  isScrolled
                    ? "text-white hover:text-bronze"
                    : "text-white hover:text-bronze-200"
                }`}
              >
                {item}
              </Button>
            ))}
            <Button
              className={`ml-4 rounded-none transition-all duration-300 ${
                isScrolled
                  ? "bg-bronze hover:bg-bronze-700 text-white"
                  : "bg-bronze hover:bg-bronze-700 text-white"
              }`}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-darkGrey shadow-lg border-t border-white/20">
            <div className="py-4 px-4 space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full justify-start text-white hover:text-bronze hover:bg-bronze/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Button>
              ))}
              <Button
                className="w-full bg-bronze hover:bg-bronze-700 text-white rounded-none mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
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
