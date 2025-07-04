import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, X, Menu } from "lucide-react";
import { useTheme } from "../context/useTheme";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // console.log(isDarkMode, "isDarkMode");
  const { scrollYProgress } = useScroll();

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Code2 size={24} className="text-blue-500" />
          <span className="text-lg ml-1">Time to Program</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wider transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </motion.button>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button> */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>
      {/* Mobile menu toggle would go here */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
  // <motion.nav
  //   className={`fixed top-0 w-full z-50 ${
  //     isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  //   }`}
  //   initial={{ y: -100 }}
  //   animate={{ y: 0 }}
  //   transition={{ duration: 0.5 }}
  // >
  //   <div className="container mx-auto px-4 py-3 flex justify-between items-center">
  //     <div className="flex items-center space-x-2 cursor-pointer">
  //       <Code2 className="h-6 w-6" />
  //       <span className="font-bold text-lg">Portfolio</span>
  //     </div>

  //     <div className="hidden md:flex items-center space-x-6">
  //       <button
  //         onClick={() => scrollToSection("projects")}
  //         className="hover:text-blue-500 transition-colors"
  //       >
  //         Projects
  //       </button>
  //       <button
  //         onClick={() => scrollToSection("about")}
  //         className="hover:text-blue-500 transition-colors"
  //       >
  //         About
  //       </button>
  //       <button
  //         onClick={() => scrollToSection("contact")}
  //         className="hover:text-blue-500 transition-colors"
  //       >
  //         Contact
  //       </button>
  //       <button
  //         onClick={toggleDarkMode}
  //         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  //       >
  //         {isDarkMode ? (
  //           <Sun className="h-5 w-5" />
  //         ) : (
  //           <Moon className="h-5 w-5" />
  //         )}
  //       </button>
  //     </div>

  //     <div className="md:hidden flex items-center space-x-4">
  //       <button
  //         onClick={toggleDarkMode}
  //         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  //       >
  //         {isDarkMode ? (
  //           <Sun className="h-5 w-5" />
  //         ) : (
  //           <Moon className="h-5 w-5" />
  //         )}
  //       </button>
  //       <button
  //         onClick={() => setIsMenuOpen(!isMenuOpen)}
  //         className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  //       >
  //         {isMenuOpen ? (
  //           <X className="h-5 w-5" />
  //         ) : (
  //           <Menu className="h-5 w-5" />
  //         )}
  //       </button>
  //     </div>
  //   </div>

  //   <AnimatePresence>
  //     {isMenuOpen && (
  //       <motion.div
  //         initial={{ opacity: 0, height: 0 }}
  //         animate={{ opacity: 1, height: "auto" }}
  //         exit={{ opacity: 0, height: 0 }}
  //         className="md:hidden overflow-hidden"
  //       >
  //         <div className="flex flex-col space-y-3 px-4 pb-4">
  //           <button
  //             onClick={() => {
  //               scrollToSection("projects");
  //               setIsMenuOpen(false);
  //             }}
  //             className="py-2 text-left hover:text-blue-500 transition-colors"
  //           >
  //             Projects
  //           </button>
  //           <button
  //             onClick={() => {
  //               scrollToSection("about");
  //               setIsMenuOpen(false);
  //             }}
  //             className="py-2 text-left hover:text-blue-500 transition-colors"
  //           >
  //             About
  //           </button>
  //           <button
  //             onClick={() => {
  //               scrollToSection("contact");
  //               setIsMenuOpen(false);
  //             }}
  //             className="py-2 text-left hover:text-blue-500 transition-colors"
  //           >
  //             Contact
  //           </button>
  //         </div>
  //       </motion.div>
  //     )}
  //   </AnimatePresence>

  //   <motion.div
  //     className="h-1 bg-blue-500"
  //     style={{ scaleX: scrollYProgress }}
  //   />
  // </motion.nav>
};

export default Navbar;
