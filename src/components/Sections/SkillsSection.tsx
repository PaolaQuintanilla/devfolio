import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { useTheme } from "../../context/useTheme";
import { containerVariants, itemVariants } from "../../utils/helper";
import { SKILLS_CATEGORY } from "../../utils/data";

export const SkillsSection = () => {
  const { isDarkmode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };
  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 ${
        isDarkmode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkmode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${
            isDarkmode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className={`max-w-6xl mx-auto relative z-10`}>
        {/* Section header */}
        <motion.div
          initial={itemVariants}
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants as Variants}
            className={`text-sm uppercase tracking-widest ${
              isDarkmode ? "text-gary-500" : "text-gray-600"
            } mb-4`}
          >
            Technical Expertise
          </motion.div>
          <motion.h2
            variants={itemVariants as Variants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills &
            <span className="text-blue-500 font-medium">Technologies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants as Variants}
            className={`text-xl ${
              isDarkmode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to development
          </motion.p>
        </motion.div>
        {/* Skills grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className=""
        >
          {SKILLS_CATEGORY.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants as Variants}
              className={``}
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
