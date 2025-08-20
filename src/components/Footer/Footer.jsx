import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle } from "lucide-react"; // أيكونات

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#0a0f1a] to-black py-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        {/* الاسم */}
        <Motion.p
          className="text-gray-400 text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} developed by{" "}
          <span className="text-blue-400 font-semibold">Youssef Shoukry</span>
        </Motion.p>

        {/* الرقم */}
        <a href="https://wa.me/+201204470794" >
         
        <Motion.p
        
          className="text-gray-400 text-sm md:text-base mt-3 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
       <MessageCircle className=" text-blue-700  -mx-8  absolute"></MessageCircle>  +20 120 447 0794   
           
        </Motion.p>
         
        </a>

      </div>
    </footer>
  );
}
