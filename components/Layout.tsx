import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
