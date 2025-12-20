"use client";

import React from "react";
import Link from "next/link";

const quickLinks = [
  { name: "About Yash Parmar", href: "/#about" }, // SEO: Descriptive anchor text
  { name: "Technical Skills", href: "/#skills" }, // SEO: Keyword-rich anchor text
  { name: "Featured Projects", href: "/#projects" }, // SEO: Keyword-rich anchor text
  { name: "Contact Yash", href: "/#contact" }, // SEO: Name-rich anchor text
  { name: "Services Provided", href: "/#services" }, // SEO: Added more internal links per audit
  { name: "Certifications", href: "/#certifications" }, // SEO: Added more internal links per audit
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-600 dark:text-gray-400">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Yash Parmar</h3>
            <p className="text-sm max-w-md">
              Professional Software Developer and AI Engineer specializing in building exceptional digital experiences. 
              Let&apos;s work together to bring your ideas to life.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Explore My Portfolio</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-sky-500 transition-colors inline-block py-1 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {currentYear} Yash Parmar. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy" className="hover:text-sky-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-sky-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//Version 10.4.0
