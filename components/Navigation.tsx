"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  onItemClick?: () => void;
  mobile?: boolean;
}

const Navigation = ({ onItemClick, mobile }: NavigationProps) => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className={`${mobile ? "flex flex-col space-y-6" : "flex items-center gap-8"}`}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <motion.div
            key={link.href}
            className="relative"
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
          >
            <Link
              href={link.href}
              onClick={onItemClick}
              className={`relative text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                isActive
                  ? "text-white bg-gradient-to-r from-sky-500 to-teal-400 shadow-lg"
                  : "text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/20"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-400 rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Navigation;
