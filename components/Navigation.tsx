import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  name: string;
  path: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ name, path, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
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

const Navigation: React.FC<NavigationProps> = ({ onItemClick }: NavigationProps) => {
  const navItems = [
    { name: "Home", path: "/#home" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Projects", path: "/#projects" },
    
    { name: "Contact", path: "/#contact" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string): void => {
    e.preventDefault();
    const targetId = path.split('#')[1];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
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
          onClick={(e) => handleClick(e, item.path)}
        />
      ))}
    </>
  );
};

export default Navigation;
