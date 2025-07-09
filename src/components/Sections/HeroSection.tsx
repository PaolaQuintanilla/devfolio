import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import PROFILE_PIC from "../assets/images/profile-img.jpg";
import { useTheme } from "../../context/useTheme";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
      }`}
    >
      {/* Decorative animated circles */}
      <div className="hidden md:block">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      {/* Mobile Layout - Centered */}
      <div className="md:hidden flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          {/* Profile Image - Mobile */}
          <motion.div variants={imageVariants} className="mb-8">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full h-64 rounded-2xl overflow-hidden border-4 ${
                  isDarkMode ? "border-gray-800" : "border-gray-300"
                } shadow-2xl`}
              >
                <img
                  src={PROFILE_PIC}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute -inset-4 rounded-full border-2 ${
                  isDarkMode ? "border-blue-500/30" : "border-blue-400/30"
                }`}
              />
            </div>
          </motion.div>

          {/* Content - Mobile */}
          <motion.div
            variants={textVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Full Stack Developer
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-6"
          >
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              Building digital
            </span>
            <br />
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              experiences
            </span>
            <br />
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              that matter
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
          >
            I craft beautiful, functional web applications with modern
            technologies and thoughtful user experiences.
          </motion.p>

          {/* CTA Buttons - Mobile */}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
