// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Yash Parmar. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/Yashparmar1125"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yashparmar1125"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/yash11_25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 mx-2"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


//Version 10.4.0