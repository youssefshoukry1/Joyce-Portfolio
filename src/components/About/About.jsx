import React from "react";
import { motion as Motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <LucideIcons.User size={28} className="text-blue-400" />,
      title: "Profile",
      content: `Fresh biotechnology graduate (June 2025) with Excellent GPA and top distinction in graduation project. Hands-on experience in molecular biotechnology, clinical diagnostics, and pharmaceutical representation. Passionate about bridging research and industry applications in biotech, diagnostics, and pharma innovation.`
    },
    {
      icon: <LucideIcons.BookOpen size={28} className="text-blue-400" />,
      title: "Education",
      content: `B.Sc. in Biotechnology – Misr University for Science & Technology (MUST), June 2025
Cumulative GPA: Excellent
Graduation Project: Transgenic Wheat for Salinity Tolerance – Highest project grade`
    },
    {
      icon: <LucideIcons.Briefcase size={28} className="text-blue-400" />,
      title: "Professional Experience",
      content: `Medical Representative – Integra Pharma (2025–Present): Promoting and educating healthcare professionals, developing communication, sales, and market knowledge.
Clinical Pathology & Genetic Diagnostics Trainee – Children’s Cancer Hospital 57357 (Oct 2024): Practical training in genetic diagnostics and clinical lab analysis.
Graduation Project Researcher – AGERI & MUST (2024–2025): Conducted molecular techniques, plant tissue culture & salinity tolerance assays. Project awarded Excellent.`
    },
    {
      icon: <LucideIcons.Code size={28} className="text-blue-400" />,
      title: "Skills",
      content: `Molecular Techniques: PCR, cDNA synthesis, gel electrophoresis, DNA/RNA extraction
Cell & Plant Work: Cell culture, tissue culture, microscopy
Bioinformatics & Data Analysis: Basic proficiency in sequence analysis tools
Professional: Research, scientific writing, presentations, medical analysis
Soft Skills: Communication, teamwork, adaptability, problem-solving
Digital Tools: MS Office, Google Workspace`
    },
    {
      icon: <LucideIcons.Globe size={28} className="text-blue-400" />,
      title: "Languages",
      content: `Arabic (Native), English (Excellent – TOEFL 2021)`
    },
    {
      icon: <LucideIcons.Award size={28} className="text-blue-400" />,
      title: "Certifications",
      content: `Clinical Pathology & Genetics Internship – 57357 Hospital (2024)
TOEFL Certificate (2021)`
    }
  ];

  return (
    <section
      id="About-section"
      className=" py-10 relative min-h-screen flex flex-col items-center justify-center px-8 md:px-16 text-gray-200 overflow-hidden"
    >
      {/* خلفية Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* الكونتنت */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-blue-400 mb-12 text-center drop-shadow-lg"
        >
          About Me
        </Motion.h1>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {cards.map((card, i) => (
            <Motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-950/20 border border-blue-800/50 shadow-xl hover:shadow-blue-600/50 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="flex items-center mb-4 gap-3">
                {card.icon}
                <h2 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors">{card.title}</h2>
              </div>
              <p className="text-gray-200 whitespace-pre-line group-hover:text-gray-100 transition-colors">
                {card.content}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
