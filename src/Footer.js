// import React from 'react';
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
// } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-white border-t border-gray-200 mt-16 pt-10 pb-6">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Left: Profile Info */}
//         <div className="flex items-center gap-4">
//           <img
//             src="/profile.png"
//             alt="Bsrat Wellerufael"
//             className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-sm object-cover"
//           />
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">Bsrat Wellerufael</h2>
//             <div className="flex items-center text-sm text-gray-600 mt-1">
//               <FaMapMarkerAlt className="mr-1 text-blue-500" />
//               Mekelle, Tigray
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Links */}
//         <div className="flex flex-col space-y-2 text-sm text-gray-700">
//           <a
//             href="https://github.com/bsratWellerufael2024"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center hover:text-blue-600 transition"
//           >
//             <FaGithub className="mr-2 text-xl" />
//             GitHub
//           </a>

//           <a
//             href="https://linkedin.com/in/bsrat-wellerufael-91524529b"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center hover:text-blue-600 transition"
//           >
//             <FaLinkedin className="mr-2 text-xl text-blue-600" />
//             LinkedIn
//           </a>

//           <a
//             href="mailto:bsratwellerufael2024@gmail.com"
//             className="flex items-center hover:text-blue-600 transition"
//           >
//             <FaEnvelope className="mr-2 text-xl text-red-500" />
//             bsratwellerufael2024@gmail.com
//           </a>

//           <div className="flex items-center">
//             <FaPhone className="mr-2 text-xl text-green-500" />
//             <span>0963000598</span>
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-xs text-gray-400 mt-8">
//         © {new Date().getFullYear()} Bsrat Wellerufael. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Profile Info */}
        <div className="flex items-center gap-4">
          <img
            src="/profile.png"
            alt="Bsrat Wellerufael"
            className="w-16 h-16 rounded-full border-2 border-blue-500 shadow-sm object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Bsrat Wellerufael</h2>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
              <FaMapMarkerAlt className="mr-1 text-blue-500 dark:text-blue-400" />
              Mekelle, Tigray
            </div>
          </div>
        </div>

        {/* Right: Contact Links */}
        <div className="flex flex-col space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/bsratWellerufael2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub className="mr-2 text-xl" />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/bsrat-wellerufael-91524529b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin className="mr-2 text-xl text-blue-600 dark:text-blue-400" />
            LinkedIn
          </a>

          <a
            href="mailto:bsratwellerufael2024@gmail.com"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope className="mr-2 text-xl text-red-500 dark:text-red-400" />
            bsratwellerufael2024@gmail.com
          </a>

          <div className="flex items-center">
            <FaPhone className="mr-2 text-xl text-green-500 dark:text-green-400" />
            <span>0963000598</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-8">
        © {new Date().getFullYear()} Bsrat Wellerufael. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
