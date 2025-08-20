import React from "react";
import { motion as Motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Molecular Biology & Lab Techniques",
      details: [
        "PCR, cDNA synthesis, gel electrophoresis, DNA/RNA extraction",
        "Plant tissue culture & microscopy",
      ],
    },
    {
      title: "Research & Scientific Writing",
      details: [
        "Designing and conducting biotech research projects",
        "Preparing clear documentation, reports, and presentations",
      ],
    },
    {
      title: "Clinical & Medical Diagnostics",
      details: [
        "Laboratory analysis and genetic diagnostics support",
        "Interpretation and communication of clinical results",
      ],
    },
    {
      title: "Bioinformatics & Data Analysis (Basic)",
      details: [
        "Sequence analysis and molecular data interpretation",
        "Data organization with MS Office & Google Workspace",
      ],
    },
    {
      title: "Pharmaceutical Representation & Communication",
      details: [
        "Promoting and presenting pharmaceutical products to healthcare professionals",
        "Strong communication and relationship-building with clients",
      ],
    },
    {
      title: "Training & Public Speaking",
      details: [
        "Delivering scientific presentations in academic or professional settings",
        "Explaining complex concepts in a clear and engaging way",
      ],
    },
  ];

  return (
    <section
      id="Services-section"
      className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0f1a] to-[#020202] py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <Motion.h2
          className="text-3xl md:text-5xl font-bold text-blue-400 mb-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Services
        </Motion.h2>

        {/* الكروت */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Motion.div
              key={i}
              className="bg-gradient-to-br from-[#0f172a] via-[#0b0f19] to-black rounded-2xl shadow-lg p-6 hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800 hover:border-blue-500/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-300 mb-4">
                {service.title}
              </h3>
              <ul className="text-gray-300 text-sm md:text-base space-y-2">
                {service.details.map((detail, j) => (
                  <li key={j} className="leading-relaxed">
                    • {detail}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
