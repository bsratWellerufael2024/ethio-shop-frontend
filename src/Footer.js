import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 mt-16 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-gray-700">
        {/* Left: Avatar and contact info */}
        <div className="flex items-center gap-4 mb-6 sm:mb-0">
          <img
            src="/profile.png"
            alt="Profile"
            className="rounded-full w-14 h-14 border border-gray-400"
          />
          <div>
            <p className="font-semibold text-lg">Bsrat Wellerufael</p>
            <div className="flex items-center text-sm gap-1">
              <FaMapMarkerAlt className="text-blue-600" />
              Mekelle, Tigray
            </div>
          </div>
        </div>

        {/* Right: Links */}
        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex items-center gap-2">
            <FaGithub className="text-xl text-gray-700" />
            <a
              href="https://github.com/bsratWellerufael2024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin className="text-xl text-blue-600" />
            <a
              href="https://linkedin.com/in/bsrat-wellerufael-91524529b"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl text-red-500" />
            <a href="mailto:bsratwellerufael2024@gmail.com" className="hover:text-blue-600">
              bsratwellerufael2024@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl text-green-500" />
            <span>0963000598</span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Bsrat Wellerufael. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
