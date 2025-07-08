import React from "react";

interface ProofSectionProps {
  metrics?: {
    projects: number;
    customers: number;
    yearsExperience: number;
    countries: number;
  };
}

const ProofSection = ({
  metrics = {
    projects: 250,
    customers: 180,
    yearsExperience: 15,
    countries: 12,
  },
}: ProofSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-darkGrey">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bronze mb-2">
              {metrics.projects}+
            </div>
            <div className="text-white/70 uppercase tracking-wider text-sm">
              Projects Completed
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bronze mb-2">
              {metrics.customers}+
            </div>
            <div className="text-white/70 uppercase tracking-wider text-sm">
              Happy Customers
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bronze mb-2">
              {metrics.yearsExperience}+
            </div>
            <div className="text-white/70 uppercase tracking-wider text-sm">
              Years Experience
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-bronze mb-2">
              {metrics.countries}+
            </div>
            <div className="text-white/70 uppercase tracking-wider text-sm">
              Countries Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
