import React from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle } from "lucide-react"; // أيكونات

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      link: "joycebekhet44@gmail.com", // ✉️ غيّر الايميل هنا
      icon: <Mail className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/yourprofile", // 🔗 غيّر لينكدإن هنا
      icon: <Linkedin className="w-6 h-6 text-blue-400" />,
    },
    {
      name: "WhatsApp",
      link: "https://wa.me/+201284747449", // 📱 غيّر الرقم هنا بصيغة دولية
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section
      id="Contact-section"
      className="min-h-screen w-full bg-gradient-to-b from-black via-[#0a0f1a] to-[#020202] py-20 px-6 md:px-16 flex flex-col items-center justify-center"
    >
      <Motion.h2
        className="text-3xl md:text-5xl font-bold text-blue-400 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Contact Me
      </Motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-4xl w-full">
        {contacts.map((c, i) => (
          <Motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#0b0f19] to-black rounded-2xl shadow-lg p-8 hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800 hover:border-blue-500/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{c.icon}</div>
            <h3 className="text-lg font-semibold text-blue-300">{c.name}</h3>
          </Motion.a>
        ))}
      </div>
    </section>
  );
}
