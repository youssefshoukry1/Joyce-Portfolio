import React from "react";
import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="About-section"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-16 text-gray-200 overflow-hidden"
    >
      {/* خلفية Gradient احترافية */}
      <div className="absolute inset-0 z-0">
        {/* طبقة عميقة من الأسود + الأزرق */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950 to-black"></div>

        {/* إضاءة خفيفة Radial في النص */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.2),transparent_70%)]"></div>

        {/* Blur ناعم */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* الكونتنت */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* العنوان */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {["Creative Designer", "Frontend Developer", "Problem Solver"].map(
            (text, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/30 to-blue-950/20 border border-blue-800/50 shadow-xl hover:shadow-blue-900/50 hover:-translate-y-2 transition-all duration-500"
              >
                {/* تأثير داخلي Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

                <p className="relative z-10 text-lg leading-relaxed text-gray-200">
                  {text}
                </p>
              </Motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
