// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 py-6 text-center text-gray-500 text-sm">
//       © 2025 Sundari M. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0a0a0a] to-[#1c1c1c] py-6 text-center relative overflow-hidden">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none"></div>

      {/* Footer Text */}
      <p className="text-[#D4AF37] text-sm font-medium tracking-wide relative z-10">
        © 2025 {" "}
        <span className="text-gray-300 hover:text-[#D4AF37] transition-colors duration-300">
          Sundari M
        </span>
        . All rights reserved.
      </p>

      {/* Decorative gold line */}
      <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-3 rounded-full shadow-[0_0_12px_rgba(212,175,55,0.4)]"></div>
    </footer>
  );
};

export default Footer;
