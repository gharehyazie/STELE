import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building,
  Home,
  Trees,
  Sofa,
  HardHat,
  Users,
  Box,
  Settings,
} from "lucide-react";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ServicesSectionProps {
  title?: string;
  services?: Service[];
}

const ServicesSection = ({
  title = "Our Services",
  services = defaultServices,
}: ServicesSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mediumGrey">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive design and project management services tailored to
            your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-darkGrey">
      <CardContent className="p-6 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-bronze/10 rounded-full flex items-center justify-center text-bronze">
          {service.icon}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">
          {service.title}
        </h3>
        <p className="text-white/70 text-sm">{service.description}</p>
      </CardContent>
    </Card>
  );
};

const defaultServices: Service[] = [
  {
    id: "1",
    title: "Architectural Design",
    icon: <Building className="w-8 h-8" />,
    description:
      "Complete architectural planning and design solutions for residential and commercial projects.",
  },
  {
    id: "2",
    title: "Interior Design",
    icon: <Home className="w-8 h-8" />,
    description:
      "Thoughtful interior spaces that blend functionality with aesthetic excellence.",
  },
  {
    id: "3",
    title: "Landscape Design",
    icon: <Trees className="w-8 h-8" />,
    description:
      "Beautiful outdoor spaces that complement your architectural vision.",
  },
  {
    id: "4",
    title: "Furniture Design",
    icon: <Sofa className="w-8 h-8" />,
    description:
      "Custom furniture pieces designed to perfectly fit your space and style.",
  },
  {
    id: "5",
    title: "Project Supervision",
    icon: <HardHat className="w-8 h-8" />,
    description:
      "Professional oversight ensuring quality execution of your design vision.",
  },
  {
    id: "6",
    title: "Technical Consultancy",
    icon: <Users className="w-8 h-8" />,
    description:
      "Expert technical guidance throughout your project development process.",
  },
  {
    id: "7",
    title: "3D Visualization",
    icon: <Box className="w-8 h-8" />,
    description:
      "Realistic 3D renderings to help you visualize your project before construction.",
  },
  {
    id: "8",
    title: "Turnkey Project Management",
    icon: <Settings className="w-8 h-8" />,
    description:
      "Complete project management from concept to completion, handling every detail.",
  },
];

export default ServicesSection;
