// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", to: "home" },
//     { name: "About", to: "about" },
//     { name: "Projects", to: "projects" },
//     { name: "Skills", to: "skills" },
//     { name: "Certificates", to: "certificates" },
//     { name: "Contact", to: "contact" },
//   ];

//   return (
//     <nav className="fixed w-full z-50 bg-gradient-to-r from-[#a1c4fd]/90 to-[#c2e9fb]/90 backdrop-blur-md shadow-lg transition-all duration-300">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-[#1e3a8a] tracking-wide hover:scale-105 transition-transform duration-300">
//           Sundari M
//         </h1>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 text-[#1e293b] font-medium">
//           {links.map((link, i) => (
//             <li key={i} className="relative group">
//               <Link
//                 to={link.to}
//                 smooth
//                 duration={500}
//                 className="cursor-pointer transition-colors duration-300 group-hover:text-[#2563eb]"
//               >
//                 {link.name}
//               </Link>
//               {/* Underline Animation */}
//               <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden text-[#1e3a8a]">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle Menu"
//             className="transition-transform duration-300 hover:rotate-90"
//           >
//             {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-500 ${
//           menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } bg-white/90 backdrop-blur-sm border-t border-gray-200`}
//       >
//         <ul className="flex flex-col items-center py-4 space-y-4 font-medium">
//           {links.map((link, i) => (
//             <li key={i}>
//               <Link
//                 to={link.to}
//                 smooth
//                 duration={500}
//                 onClick={() => setMenuOpen(false)}
//                 className="text-[#1e293b] hover:text-[#2563eb] transition duration-300"
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-[#0a0a0a]/95 to-[#1c1c1c]/95 backdrop-blur-lg border-b border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-[#D4AF37] tracking-wide drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] hover:scale-105 transition-transform duration-300 cursor-pointer">
          Sundari M
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {links.map((link, i) => (
            <li key={i} className="relative group">
              <Link
                to={link.to}
                smooth
                duration={500}
                className="cursor-pointer transition-colors duration-300 group-hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
              {/* Gold underline animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-[#D4AF37]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="transition-transform duration-300 hover:scale-110"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#111]/95 border-t border-[#D4AF37]/30 backdrop-blur-md`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 font-medium text-gray-300">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#D4AF37] transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;