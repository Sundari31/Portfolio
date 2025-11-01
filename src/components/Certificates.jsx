import React from "react";
import { motion } from "framer-motion";
import webPDF from "../assets/certificates/web.pdf";
import excelPDF from "../assets/certificates/excel.pdf";
import wordpressPDF from "../assets/certificates/wordpress.pdf";
import frontendPDF from "../assets/certificates/frontend.pdf";
import uiPDF from "../assets/certificates/ui.pdf";

const certificates = [
  {
    title: "Industrial Training on Web Development",
    issuer: "Nineteen Hours IT Pvt. Ltd",
    year: "2023",
    file: webPDF,
  },
  {
    title: "Introduction to Microsoft Excel",
    issuer: "Coursera",
    year: "2024",
    file: excelPDF,
  },
  {
    title: "Build a Free Website with WordPress",
    issuer: "Coursera",
    year: "2024",
    file: wordpressPDF,
  },
  {
    title: "Introduction to Frontend Development",
    issuer: "Simplilearn",
    year: "2025",
    file: frontendPDF,
  },
  {
    title: "UI/UX for Beginners",
    issuer: "Simplilearn",
    year: "2025",
    file: uiPDF,
  },
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1c1c1c] text-white px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#D4AF37]">Certificates</span> & Achievements
        </h2>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-12 rounded-full"></div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D4AF37]/80 via-[#fff]/40 to-transparent transform -translate-x-1/2"></div>

          {/* Certificate Cards */}
          <div className="flex flex-col gap-16 relative z-10">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`relative w-full md:w-1/2 ${
                  i % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
                }`}
              >
                {/* Connection Dot */}
                <div
                  className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-[#D4AF37] border-2 border-white ${
                    i % 2 === 0 ? "-left-2" : "-right-2"
                  }`}
                ></div>

                {/* Card */}
                <div
                  className="bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] p-6 rounded-2xl 
                             shadow-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 
                             transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 font-medium">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mt-2">{cert.year}</p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block bg-[#D4AF37] text-black px-4 py-2 rounded-lg 
                               font-medium hover:bg-[#f0d678] transition duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;