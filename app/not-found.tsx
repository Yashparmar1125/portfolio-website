"use client";

import Link from "next/link";
import { Home, Code, Rocket, AlertTriangle } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function NotFound() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
    // Set theme to dark mode by default
    setTheme('dark');
  }, [setTheme]);
  
  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }
  
  const isDark = resolvedTheme === 'dark';
  
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden ${
      isDark 
        ? "bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100" 
        : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900"
    }`}>
      {/* Simple background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean gradient overlay */}
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.05)_0%,transparent_70%)]" 
            : "bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.1)_0%,transparent_70%)]"
        }`} />
        
        {/* Subtle grid lines */}
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-[linear-gradient(rgba(2,132,199,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" 
            : "bg-[linear-gradient(rgba(2,132,199,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        }`} />
        
        {/* Simple floating particles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              isDark ? "bg-sky-400/30" : "bg-sky-600/40"
            }`}
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(1px)",
              animation: `float ${8 + i * 2}s infinite linear`
            }}
          />
        ))}
      </div>
      
      <div className="text-center max-w-2xl relative z-10">
        <div className="animate-fade-in">
          <h1 className={`text-7xl font-bold mb-4 relative ${
            isDark ? "text-sky-400" : "text-sky-600"
          }`}>
            404
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
          </h1>
          <h2 className={`text-3xl font-semibold mb-2 ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}>Signal Lost</h2>
          <p className={`mb-8 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            The coordinates you&apos;re looking for have been lost in the digital void.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
          <Link 
            href="/" 
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-colors shadow-lg ${
              isDark 
                ? "bg-sky-600 hover:bg-sky-700 text-white hover:shadow-sky-500/20" 
                : "bg-sky-600 hover:bg-sky-700 text-white hover:shadow-sky-500/20"
            }`}
          >
            <Home className="w-5 h-5" />
            Return to Base
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left animate-fade-in-up">
          <div className={`p-6 backdrop-blur-sm rounded-xl shadow-lg border transition-all duration-300 ${
            isDark 
              ? "bg-gray-800/80 border-gray-700/50 hover:shadow-sky-500/10" 
              : "bg-white/80 border-gray-200/50 hover:shadow-sky-500/10"
          }`}>
            <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}>
              <Code className="w-5 h-5 text-sky-500" />
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className={`p-6 backdrop-blur-sm rounded-xl shadow-lg border transition-all duration-300 ${
            isDark 
              ? "bg-gray-800/80 border-gray-700/50 hover:shadow-sky-500/10" 
              : "bg-white/80 border-gray-200/50 hover:shadow-sky-500/10"
          }`}>
            <h3 className={`text-xl font-semibold mb-3 flex items-center gap-2 ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}>
              <Rocket className="w-5 h-5 text-sky-500" />
              Featured Projects
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#projects" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  StockSage AI
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  LangSQL
                </Link>
              </li>
              <li>
                <Link href="/#projects" className={`hover:underline flex items-center gap-2 group ${
                  isDark ? "text-sky-400" : "text-sky-600"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 group-hover:scale-150 transition-transform"></span>
                  EduAI
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-12 p-4 rounded-lg border animate-fade-in ${
          isDark 
            ? "bg-sky-900/20 border-sky-800/50" 
            : "bg-sky-50 border-sky-200/50"
        }`}>
          <div className={`flex items-center gap-3 ${
            isDark ? "text-sky-300" : "text-sky-700"
          }`}>
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">
              If you believe this is an error, please <Link href="/#contact" className="underline">contact me</Link>.
            </p>
          </div>
        </div>
        
        
      </div>
    </div>
  );
} 