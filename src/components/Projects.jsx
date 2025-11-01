// import React from "react";
// import { motion } from "framer-motion";
// import bulkmail from "../assets/projects/bulkmail.png";
// import login from "../assets/projects/login.png";
// import task from "../assets/projects/task.png";
// import weather from "../assets/projects/weather.png";
// import apple from "../assets/projects/apple.png";
// import student from "../assets/projects/student.png";
// import greenden from "../assets/projects/greenden.png";
// import movie from "../assets/projects/movie.png";

// const projects = [
//   {
//     title: "BulkMail",
//     desc: "",
//     image: bulkmail,
//     link: "#",
//     code: "#",
//   },
//   {
//     title: "Login Form",
//     desc: "A responsive and modern login form built with HTML, CSS, and React. It demonstrates user authentication UI with validation and a professional layout.",
//     image: login,
//     link: "https://login-azure-ten.vercel.app/",
//     code: "https://github.com/Sundari31/Login",
//   },
//   {
//     title: "Task Management",
//     desc: "A React-based task management app that allows users to add, edit, delete, search, and track daily tasks with pagination and localStorage integration.",
//     image: task,
//     link: "https://task-management-ashen-theta.vercel.app/",
//     code: "https://github.com/Sundari31/Task-Management",
//   },
//   {
//     title: "Weather Report",
//     desc: "A weather forecast app built using React and OpenWeather API to display real-time temperature, humidity, and location-based weather details.",
//     image: weather,
//     link: "https://weather-report-kappa-ten.vercel.app/",
//     code: "https://github.com/Sundari31/Weather-Report",
//   },
//   {
//     title: "Movie App",
//     desc: "A React-based movie search application that fetches data from a movie API to display trending films, ratings, and posters with a clean UI.",
//     image: movie,
//     link: "https://movie-app-lemon-phi-68.vercel.app/",
//     code: "https://github.com/Sundari31/Movie-App",
//   },
//   {
//     title: "Apple Clone",
//     desc: "A pixel-perfect Apple website clone built with React and Tailwind CSS to replicate Apple’s product showcase design and animations.",
//     image: apple,
//     link: "https://apple-clone-navy.vercel.app/",
//     code: "https://github.com/Sundari31/Apple-Clone",
//   },
//   {
//     title: "Student Form",
//     desc: "A simple and functional student registration form using HTML, CSS, and JavaScript with validation for collecting and displaying form details.",
//     image: student,
//     link: "https://sundari31.github.io/Student-form/",
//     code: "https://github.com/Sundari31/Student-form",
//   },
//   {
//     title: "Greenden",
//     desc: "A responsive plant store website created using HTML, CSS, and JavaScript that showcases eco-friendly products with elegant UI and smooth navigation.",
//     image: greenden,
//     link: "https://sundari31.github.io/Greenden/",
//     code: "https://github.com/Sundari31/Greenden",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 bg-gradient-to-b from-[#0a0f1f] via-[#0d1528] to-[#020617] text-white relative overflow-hidden"
//     >
//       {/* Soft glow background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)] pointer-events-none"></div>

//       <div className="max-w-6xl mx-auto text-center relative z-10">
//         {/* Section Title */}
//         <h2 className="text-4xl font-bold mb-4">
//           Featured{" "}
//           <span className="bg-gradient-to-r from-[#60a5fa] to-[#eab308] text-transparent bg-clip-text">
//            Projects
//           </span>
//         </h2>
//         <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] mx-auto mb-10 rounded-full"></div>
//         <p className="text-[#c7d2fe] mb-12 text-lg max-w-2xl mx-auto">
//           A collection of my most impactful web development works showcasing my
//           skills in React, JavaScript, and elegant modern UI design.
//         </p>

//         {/* Project Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((proj, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="relative group border border-[#1e293b]/50 rounded-2xl overflow-hidden shadow-lg 
//                          hover:shadow-[0_0_25px_#38bdf8] transition-all duration-500 
//                          bg-[#0f172a]/70 backdrop-blur-md"
//             >
//               {/* Project Image */}
//               <img
//                 src={proj.image}
//                 alt={proj.title}
//                 className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-500"
//               />

//               {/* Overlay on hover */}
//               <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-500">
//                 <h3 className="text-white text-xl font-semibold mb-3">
//                   {proj.title}
//                 </h3>
//                 <div className="flex gap-4">
//                   <a
//                     href={proj.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
//                   >
//                     Live
//                   </a>
//                   <a
//                     href={proj.code}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-transparent border border-[#38bdf8] text-[#38bdf8] px-4 py-2 rounded-md font-medium hover:bg-[#38bdf8] hover:text-black transition"
//                   >
//                     Code
//                   </a>
//                 </div>
//               </div>

//               {/* Project Description */}
//               <div className="p-5 text-[#cbd5e1] text-sm">{proj.desc}</div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import bulkmail from "../assets/projects/bulkmail.png";
import login from "../assets/projects/login.png";
import task from "../assets/projects/task.png";
import weather from "../assets/projects/weather.png";
import apple from "../assets/projects/apple.png";
import student from "../assets/projects/student.png";
import greenden from "../assets/projects/greenden.png";
import movie from "../assets/projects/movie.png";

const projects = [
  {
    title: "BulkMail",
    desc: "An automated bulk mail sender built using Node.js and React, allowing users to send customized emails efficiently.",
    image: bulkmail,
    link: "#",
    code: "#",
  },
  {
    title: "Login Form",
    desc: "A responsive and modern login form built with React and Tailwind CSS, demonstrating validation and user UI design.",
    image: login,
    link: "https://login-azure-ten.vercel.app/",
    code: "https://github.com/Sundari31/Login",
  },
  {
    title: "Task Management",
    desc: "A React-based task tracker allowing users to manage, filter, and store tasks locally with an intuitive interface.",
    image: task,
    link: "https://task-management-ashen-theta.vercel.app/",
    code: "https://github.com/Sundari31/Task-Management",
  },
  {
    title: "Weather Report",
    desc: "Displays real-time weather data using the OpenWeather API, showing temperature, humidity, and forecasts beautifully.",
    image: weather,
    link: "https://weather-report-kappa-ten.vercel.app/",
    code: "https://github.com/Sundari31/Weather-Report",
  },
  {
    title: "Movie App",
    desc: "A movie search app using a public API to display trending films and ratings with smooth animations and modern UI.",
    image: movie,
    link: "https://movie-app-lemon-phi-68.vercel.app/",
    code: "https://github.com/Sundari31/Movie-App",
  },
  {
    title: "Apple Clone",
    desc: "A pixel-perfect Apple website clone crafted using React and Tailwind to recreate product animations and layout.",
    image: apple,
    link: "https://apple-clone-navy.vercel.app/",
    code: "https://github.com/Sundari31/Apple-Clone",
  },
  {
    title: "Student Form",
    desc: "A registration form using HTML, CSS, and JS with validation and a dynamic display of entered student details.",
    image: student,
    link: "https://sundari31.github.io/Student-form/",
    code: "https://github.com/Sundari31/Student-form",
  },
  {
    title: "Greenden",
    desc: "An eco-friendly online plant store built using HTML, CSS, and JS with elegant transitions and minimalist UI.",
    image: greenden,
    link: "https://sundari31.github.io/Greenden/",
    code: "https://github.com/Sundari31/Greenden",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1c1c1c] text-white relative overflow-hidden"
    >
      {/* Gold shimmer background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#D4AF37] to-[#c4a24f] text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#b8912c] mx-auto mb-10 rounded-full"></div>
        <p className="text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          A showcase of my most creative and functional web projects — blending
          design, performance, and precision in modern UI development.
        </p>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group border border-[#3a3a3a] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.15)] 
                         hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500 
                         bg-[#141414]/80 backdrop-blur-sm"
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-all duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-500">
                <h3 className="text-[#D4AF37] text-xl font-semibold mb-3 tracking-wide">
                  {proj.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4AF37] text-black px-5 py-2 rounded-md font-medium hover:bg-[#e8c55c] transition"
                  >
                    Live
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-md font-medium hover:bg-[#D4AF37] hover:text-black transition"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 text-gray-300 text-sm leading-relaxed">
                {proj.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;