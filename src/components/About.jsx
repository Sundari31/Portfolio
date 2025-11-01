// import React from "react";
// import { motion } from "framer-motion";
// import profileImg from "../assets/profile.jpg";
// import resumePDF from "../assets/Sundari_Resume.pdf";

// const About = () => {
//   return (
//     <motion.section
//       id="about"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: true }}
//       className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] py-20 px-6 md:px-16 text-[#f8fafc]"
//     >
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center text-4xl font-bold mb-16"
//       >
//         About{" "}
//         <span className="bg-gradient-to-r from-[#60a5fa] to-[#eab308] text-transparent bg-clip-text">
//           Me
//         </span>
//       </motion.h1>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         {/* Profile Image */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex justify-center"
//         >
//           <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(96,165,250,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)] transition-shadow duration-500">
//             <motion.img
//               src={profileImg}
//               alt="Sundari M"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* Text Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-5"
//         >
//           <h2 className="text-4xl font-bold">
//             I'm{" "}
//             <span className="bg-gradient-to-r from-[#60a5fa] to-[#eab308] text-transparent bg-clip-text">
//               Sundari M
//             </span>
//           </h2>
//           <h3 className="text-lg font-medium text-[#60a5fa]">
//             MERN Stack Developer
//           </h3>

//           <p className="text-[15px] text-gray-300 leading-relaxed">
//             Hi! I’m Sundari M, a passionate and detail-oriented developer who loves
//             building responsive and user-focused web applications. I enjoy solving
//             problems, learning new technologies, and creating seamless digital
//             experiences that blend functionality with design.
//           </p>

//           <p className="text-[15px] text-gray-300 leading-relaxed">
//             I specialize in working with the{" "}
//             <span className="font-semibold text-[#eab308]">MERN Stack</span>,
//             building complete web solutions from frontend interfaces to backend APIs.
//           </p>

//           <p className="text-[15px] text-gray-300 leading-relaxed">
//             My goal is to grow as a{" "}
//             <span className="font-semibold text-[#eab308]">
//               Full Stack Developer
//             </span>{" "}
//             and collaborate on impactful projects that make technology more meaningful
//             and accessible for everyone.
//           </p>

//           {/* Resume Button */}
//           <div className="pt-4">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               href={resumePDF}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-gradient-to-r from-[#60a5fa] to-[#eab308] text-[#0f172a] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-lg"
//             >
//               View Resume
//             </motion.a>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import resumePDF from "../assets/Sundari_Resume.pdf";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1c1c1c] py-20 px-6 md:px-16 text-[#f8fafc] relative overflow-hidden"
    >
      {/* Soft gold background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_70%)] pointer-events-none"></div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-16 relative z-10"
      >
        About{" "}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#c4a24f] text-transparent bg-clip-text">
          Me
        </span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500">
            <motion.img
              src={profileImg}
              alt="Sundari M"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h2 className="text-4xl font-bold">
            I'm{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#c4a24f] text-transparent bg-clip-text">
              Sundari M
            </span>
          </h2>
          <h3 className="text-lg font-medium text-[#D4AF37] tracking-wide">
            MERN Stack Developer
          </h3>

          <p className="text-[15px] text-gray-300 leading-relaxed">
            Hi! I’m <span className="text-[#D4AF37] font-medium">Sundari M</span>, a passionate and detail-oriented developer who loves
            crafting responsive and engaging web applications. I enjoy turning
            creative ideas into functional designs that connect people through
            technology.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed">
            I specialize in working with the{" "}
            <span className="font-semibold text-[#D4AF37]">MERN Stack</span> —
            developing robust full-stack solutions from interactive frontends to
            powerful backend APIs.
          </p>

          <p className="text-[15px] text-gray-300 leading-relaxed">
            My goal is to grow as a{" "}
            <span className="font-semibold text-[#D4AF37]">
              Full Stack Developer
            </span>{" "}
            and collaborate on impactful projects that inspire innovation and
            elevate user experience.
          </p>

          {/* Resume Button */}
          <div className="pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D4AF37] text-black px-6 py-3 rounded-lg font-semibold 
                         hover:bg-[#e8c55c] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              View Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;