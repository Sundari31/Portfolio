import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostman, SiFigma, SiTailwindcss, SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-[#f87171]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#60a5fa]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#facc15]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#00BCFF]"/>},
  { name: "React", icon: <FaReact className="text-[#67e8f9]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#22c55e]" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#4ade80]" /> },
  { name: "REST APIs", icon: <FaNodeJs className="text-[#14b8a6]" /> },
  { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />},
  { name: "Git & GitHub", icon: <FaGitAlt className="text-[#f87171]" /> },
  { name: "VS Code", icon: <VscVscode className="text-[#3b82f6]" /> },
  { name: "Postman", icon: <SiPostman className="text-[#fb923c]" /> },
  { name: "Figma", icon: <SiFigma className="text-[#e879f9]" /> },
];

const SkillCard = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="flex flex-col items-center justify-center rounded-xl p-6 
               bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] border border-[#D4AF37]/30
               shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]
               transition-all duration-500 cursor-default"
  >
    <div className="text-4xl mb-3 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">{icon}</div>
    <h4 className="font-medium text-[#f8f9fa]">{name}</h4>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white relative overflow-hidden"
    >
      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <h2 className="text-4xl font-bold mb-4">
          Technical <span className="text-[#D4AF37]">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to design, build, and maintain elegant, high-performance web applications.
        </p>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard icon={skill.icon} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
