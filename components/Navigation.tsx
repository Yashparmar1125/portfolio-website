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
              className={`text-base font-medium transition-colors duration-300 ${
                isActive
                  ? "text-sky-600 dark:text-sky-400"
                  : "text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              }`}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-600 dark:bg-sky-400"
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
