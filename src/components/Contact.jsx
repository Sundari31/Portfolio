// import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
// import { FaLinkedin, FaGithub } from "react-icons/fa";

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     emailjs
//       .sendForm(
//         "service_acu26nb", 
//         "template_iz55cg8", 
//         form.current,
//         "XvicWQA-AHusyeb1l" 
//       )
//       .then(
//         () => {
//           setStatus("success");
//           e.target.reset();
//         },
//         (error) => {
//           console.log(error.text);
//           setStatus("error");
//         }
//       );
//   };

//   return (
//     <section
//       id="contact"
//       className="py-24 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] text-[#1e293b] px-6"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6 text-[#0ea5e9]">
//           Let’s Connect 💬
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//           Have a project in mind, collaboration idea, or just want to say hello?
//           Feel free to reach out — I’d love to hear from you!
//         </p>

//         {/* Contact Form */}
//         <div className="w-full md:w-[60%] mx-auto">
//         <form
//           ref={form}
//           onSubmit={sendEmail}
//           className="bg-white/80 backdrop-blur-lg  border border-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-left"
//         >
//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0ea5e9]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0ea5e9]"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-medium mb-2">
//               Message
//             </label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0ea5e9]"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#0ea5e9] text-white py-3 rounded-lg hover:bg-[#0284c7] shadow-md hover:shadow-lg transition"
//           >
//             {status === "sending" ? "Sending..." : "Send Message"}
//           </button>

//           {status === "success" && (
//             <p className="text-green-600 mt-4 text-center">
//               ✅ Message sent successfully!
//             </p>
//           )}
//           {status === "error" && (
//             <p className="text-red-600 mt-4 text-center">
//               ❌ Something went wrong. Try again.
//             </p>
//           )}
//         </form>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-6 mt-12">
//           <a
//             href="https://www.linkedin.com/in/sundari-m/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#0ea5e9] text-4xl hover:text-[#0284c7] transition transform hover:scale-110"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="https://github.com/Sundari31"
//             target="_blank"
//             rel="noreferrer"
//             className="text-[#0ea5e9] text-4xl hover:text-[#0284c7] transition transform hover:scale-110"
//           >
//             <FaGithub />
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_acu26nb",  
        "template_iz55cg8", 
        form.current,
        "XvicWQA-AHusyeb1l"  
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] text-gray-300 px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
          Let’s Connect 💬
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Have a project in mind, collaboration idea, or just want to say hello?
          Feel free to reach out — I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <div className="w-full md:w-[60%] mx-auto">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#111]/90 backdrop-blur-lg border border-[#D4AF37]/30 p-8 rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-500 text-left"
          >
            <div className="mb-4">
              <label className="block text-[#D4AF37] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 bg-transparent border border-[#D4AF37]/40 rounded-lg text-gray-200 focus:outline-none focus:border-[#D4AF37] transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#D4AF37] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 bg-transparent border border-[#D4AF37]/40 rounded-lg text-gray-200 focus:outline-none focus:border-[#D4AF37] transition"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#D4AF37] font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-3 bg-transparent border border-[#D4AF37]/40 rounded-lg text-gray-200 focus:outline-none focus:border-[#D4AF37] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#b8860b] text-black font-semibold py-3 rounded-lg hover:opacity-90 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-500 mt-4 text-center">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 mt-4 text-center">
                ❌ Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://www.linkedin.com/in/sundari-m/"
            target="_blank"
            rel="noreferrer"
            className="text-[#0A66C2] text-4xl hover:text-[#D4AF37] transition transform hover:scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Sundari31"
            target="_blank"
            rel="noreferrer"
            className="text-[#cfcfcf] text-4xl hover:text-[#D4AF37] transition transform hover:scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
