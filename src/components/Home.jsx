// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-[90vh] flex flex-col items-center justify-center 
//                  bg-gradient-to-b from-[#0a0f1f] via-[#0d1528] to-[#020617]
//                  text-center px-6 relative overflow-hidden"
//     >
//       {/* Subtle glowing overlay */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_60%)] pointer-events-none"></div>

//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-4xl md:text-6xl font-bold text-white mb-4"
//       >
//         Hi, I'm{" "}
//         <span className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-transparent bg-clip-text">
//           Sundari M
//         </span>
//       </motion.h1>

//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-2xl md:text-3xl font-semibold text-[#a5b4fc] flex items-center justify-center gap-2"
//       >
//         I’m into{" "}
//         <TypeAnimation
//           sequence={[
//             "Frontend Development",
//             2000,
//             "Backend Development",
//             2000,
//             "Web Development",
//             2000,
//           ]}
//           wrapper="span"
//           speed={50}
//           repeat={Infinity}
//           className="text-[#60a5fa]"
//         />
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3, duration: 1 }}
//         className="mt-4 text-[#c7d2fe] text-[16px] max-w-xl leading-relaxed"
//       >
//         A passionate developer focused on building clean, user-friendly web
//         applications with elegant UI and modern technologies.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6, duration: 0.8 }}
//         className="flex gap-4 mt-8"
//       >
//         <a
//           href="#projects"
//           className="px-5 py-2 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-black font-semibold rounded-lg 
//                      hover:from-[#0ea5e9] hover:to-[#6366f1] hover:text-white 
//                      shadow-[0_0_20px_#38bdf8] hover:shadow-[0_0_30px_#818cf8] transition"
//         >
//           View My Work
//         </a>
//         <a
//           href="#contact"
//           className="px-5 py-2 border border-[#60a5fa] text-[#60a5fa] rounded-lg 
//                      hover:bg-[#60a5fa] hover:text-black transition shadow-[0_0_15px_#60a5fa]"
//         >
//           Contact Me
//         </a>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: [0, 1, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 text-[#60a5fa]"
//       >
//         <i className="fa-solid fa-chevron-down"></i>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center 
                 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1c1c1c]
                 text-center px-6 relative overflow-hidden text-white"
    >
      {/* Soft gold glow overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_65%)] pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-4"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-[#D4AF37] to-[#c4a24f] text-transparent bg-clip-text">
          Sundari M
        </span>
      </motion.h1>

      {/* Typing Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-3xl font-semibold text-[#e0d8b0] flex items-center justify-center gap-2"
      >
        I’m into{" "}
        <TypeAnimation
          sequence={[
            "Frontend Development",
            2000,
            "Backend Development",
            2000,
            "Web Development",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-[#D4AF37]"
        />
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-4 text-gray-300 text-[16px] max-w-xl leading-relaxed"
      >
        A passionate developer focused on crafting clean, user-friendly web
        applications with elegant design, modern technologies, and seamless user experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex gap-4 mt-8"
      >
        <a
          href="#projects"
          className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#c4a24f] text-black font-semibold rounded-lg 
                     hover:from-[#e8c55c] hover:to-[#f0d676] hover:text-black 
                     shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-lg 
                     hover:bg-[#D4AF37] hover:text-black transition shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Floating Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: [0, 1, 0.8, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-[#D4AF37]"
      >
        <i className="fa-solid fa-chevron-down text-xl"></i>
      </motion.div>
    </section>
  );
};

export default Home;