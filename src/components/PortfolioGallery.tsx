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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-mediumGrey">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our Portfolio
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces that blend
            functionality with aesthetic excellence.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
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
            className="bg-orange hover:bg-purple text-white px-8 py-2 h-auto"
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
      <CardContent className="p-6 bg-beige">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-purple">{project.title}</h3>
          <span className="text-xs uppercase tracking-wider text-orange bg-orange/10 px-2 py-1">
            {project.category}
          </span>
        </div>
        <p className="text-purple/70 h-24 overflow-hidden">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
};

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Villa - Dining Hall",
    category: "residential",
    description:
      "Features a fully customized dining table crafted by Stele with natural stone top and solid wooden legs, creating a sophisticated setting for gatherings.",
    imageUrl: "/images/dining-small.png",
  },
  {
    id: "2",
    title: "Villa - Family Hall",
    category: "residential",
    description:
      "Showcases custom-made Stele furniture including a uniquely carved coffee table in solid natural stone, balanced with plush modular seating.",
    imageUrl: "/images/hall-small.png",
  },
  {
    id: "3",
    title: "Villa - Powder Room",
    category: "residential",
    description:
      "A refined powder room reflecting contemporary aesthetics and timeless elegance with carefully curated design elements and material integrity.",
    imageUrl: "/images/washroom.png",
  },
];

export default PortfolioGallery;
