import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

const PortfolioGallery = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Our Portfolio
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces that blend
            functionality with aesthetic excellence.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-stone-100 p-1">
              <TabsTrigger
                value="all"
                className="px-6 py-2 data-[state=active]:bg-amber-800 data-[state=active]:text-white"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="residential"
                className="px-6 py-2 data-[state=active]:bg-amber-800 data-[state=active]:text-white"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="px-6 py-2 data-[state=active]:bg-amber-800 data-[state=active]:text-white"
              >
                Commercial
              </TabsTrigger>
              <TabsTrigger
                value="hospitality"
                className="px-6 py-2 data-[state=active]:bg-amber-800 data-[state=active]:text-white"
              >
                Hospitality
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <ProjectGrid projects={projects} />
          </TabsContent>

          <TabsContent value="residential" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "residential")}
            />
          </TabsContent>

          <TabsContent value="commercial" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "commercial")}
            />
          </TabsContent>

          <TabsContent value="hospitality" className="mt-0">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "hospitality")}
            />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-2 h-auto"
            style={{ borderRadius: 0 }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      className="overflow-hidden border-0 shadow-md"
      style={{ borderRadius: 0 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 bg-white">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-slate-900">
            {project.title}
          </h3>
          <span className="text-xs uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-1">
            {project.category}
          </span>
        </div>
        <p className="text-slate-600">{project.description}</p>
        <Button
          variant="outline"
          className="mt-4 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white w-full"
          style={{ borderRadius: 0 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Coastal Retreat",
    category: "residential",
    description:
      "A serene beachfront property featuring natural materials and panoramic ocean views.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "2",
    title: "Urban Loft",
    category: "residential",
    description:
      "Industrial elements meet warm textures in this converted warehouse space.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687644-c7f34bc91088?w=800&q=80",
  },
  {
    id: "3",
    title: "Artisan Café",
    category: "commercial",
    description:
      "A welcoming café space designed with sustainable materials and artisanal details.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
  {
    id: "4",
    title: "Luxury Boutique Hotel",
    category: "hospitality",
    description:
      "Sophisticated interiors that balance opulence with understated elegance.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "5",
    title: "Mountain Chalet",
    category: "residential",
    description:
      "A contemporary interpretation of alpine architecture with panoramic mountain views.",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: "6",
    title: "Corporate Headquarters",
    category: "commercial",
    description:
      "A dynamic workspace designed to foster collaboration and creativity.",
    imageUrl:
      "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=800&q=80",
  },
];

export default PortfolioGallery;
