import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  name: string;
  path: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; // Updated to accept event
}

const NavItem: React.FC<NavItemProps> = ({ name, path, onClick }) => (
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={path}
      onClick={onClick}
      className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
    >
      {name}
    </Link>
  </motion.div>
);

interface NavigationProps {
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onItemClick }) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/#skills" },
    { name: "Projects", path: "/#projects" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // If it's an internal link (path starts with '/#')
    if (path.startsWith('/#')) {
      e.preventDefault();
      const targetId = path.split('#')[1];
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Trigger onItemClick if provided
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <>
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          name={item.name}
          path={item.path}
          onClick={(e) => handleClick(e, item.path)} // Pass the event
        />
      ))}
    </>
  );
};

export default Navigation;
