import React from "react";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FooterProps {
  companyName?: string;
  tagline?: string;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  quickLinks?: string[];
  services?: string[];
}

const Footer = ({
  companyName = "STELE: Design + Decor",
  tagline = "Elevating spaces through thoughtful design and curated aesthetics",
  contactInfo = {
    email: "info@stele.ae",
    phone: "+971 52 113 8066",
    address: "B203-Tower B, Opus By Omniyat, Business Bay, Dubai, UAE",
  },
  quickLinks = ["Home", "Projects", "About", "Services", "Contact"],
  services = [
    "Interior Design",
    "Space Planning",
    "Furniture Selection",
    "Color Consultation",
    "Project Management",
  ],
}: FooterProps) => {
  return (
    <footer
      className="text-white relative bg-mediumGrey"
      style={{
        backgroundImage: "url('/images/footer-bg-wood.png')",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto px-4 md:px-8 lg:px-16 py-12 relative z-10 pt-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-12 mb-8">
          {/* Company Info Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">
                {companyName}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-white mb-6">{tagline}</p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-white mr-3" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-white mr-3" />
                  <a
                    href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-white mr-3 mt-1" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Services Card */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-white">
                Services
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/stele.design/"
              className="w-10 h-10 bg-orange-700 hover:bg-purple flex items-center justify-center transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-700 hover:bg-purple flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-orange-700 hover:bg-purple flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
