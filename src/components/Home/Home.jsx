import React from "react";
import { motion as Motion } from "framer-motion";
import img from "../../assets/img/IMG-20250816-WA0061.jpg";

export default function Home() {
  return (
   <section
  id="Home-section"
  className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 md:px-16 text-gray-200 overflow-hidden"
>
  {/* خلفية مع Gradient + Blur */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-gray-900 to-blue-900" />
  <div className="absolute inset-0 -z-10 backdrop-blur-3xl" />

  {/* صورة البروفايل */}
<Motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-52 h-52 md:w-72 md:h-72 rounded-full border-4 border-blue-700 shadow-lg bg-cover bg-center"
  style={{ backgroundImage: `url(${img})` , backgroundPosition: "20% 20%"}}
/>
  {/* النصوص */}
  <Motion.div
    className="text-center md:text-left max-w-xl"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
  >
    <h1 className="text-2xl md:text-5xl font-bold text-blue-400 mb-4">
      Hey, I'm <span className="text-gray-100">Joyce Bekhet</span>
    </h1>

    <p className="text-sm md:text-xl text-gray-300 mb-6">
      I am a{" "}
      <span className="text-blue-400 font-medium">
        Biotechnologist
      </span>
    </p>

    {/* زرار */}
    <Motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-blue-700 text-white font-semibold shadow-md 
      hover:bg-blue-600 transition-all duration-300"
    >
      Know More
    </Motion.button>
  </Motion.div>
</section>
  );
}