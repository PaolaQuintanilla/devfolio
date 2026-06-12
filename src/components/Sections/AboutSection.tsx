import { useRef } from "react";
import { useTheme } from "../../context/useTheme";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Code2,
  Briefcase,
  GraduationCap,
  Rocket,
  Award,
  Zap,
  Heart,
  Coffee,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { containerVariants, itemVariants } from "../../utils/helper";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";

const ICON_MAP: Record<string, LucideIcon> = {
  Code2,
  Briefcase,
  GraduationCap,
  Rocket,
  Award,
  Zap,
  Heart,
  Coffee,
  BookOpen,
};

export const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timeLineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timeLineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5
          ${isDarkMode ? "bg-blue-500" : "bg-blue-400"}`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5
            ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants as Variants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Get to Know me
          </motion.div>

          <motion.h2
            variants={itemVariants as Variants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About
            <span className="text-blue-500 font-medium"> Me</span>
          </motion.h2>
        </motion.div>

        {/* Personal Story + Passions */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 mb-20"
        >
          {/* My Mission */}
          <motion.div
            variants={itemVariants as Variants}
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
            }`}
          >
            <h3 className="text-2xl font-medium mb-4">My Mission</h3>
            <p
              className={`text-lg leading-relaxed mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I believe technology should be a bridge that connects people and
              solves real-world problems. My passion lies in crafting digital
              experiences that are not just functional, but delightful and
              accessible to everyone.
            </p>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              When I'm not coding, you'll find me exploring new frameworks,
              contributing to open source, or mentoring aspiring developers. I
              love the constant evolution of web technologies and the endless
              possibilities they bring to create meaningful digital
              experiences.
            </p>
          </motion.div>

          {/* What I Love Building */}
          <motion.div variants={itemVariants as Variants}>
            <h3 className="text-2xl font-medium mb-6">What I Love Building</h3>
            <div className="space-y-4">
              {PASSIONS.map((passion) => {
                const Icon = ICON_MAP[passion.icon] ?? Heart;
                return (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants as Variants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`flex-shrink-0 p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <Icon size={22} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{passion.title}</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-light">
            My <span className="text-blue-500 font-medium">Journey</span>
          </h3>
        </div>

        <motion.div
          ref={timeLineRef}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={timelineVariants}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline Line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-px ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
          />

          <div className="space-y-8">
            {JOURNEY_STEPS.map((step) => {
              const Icon = ICON_MAP[step.icon] ?? Code2;
              return (
                <motion.div
                  key={`${step.year}-${step.title}`}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="group relative flex items-start gap-6"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  {/* Content */}
                  <div
                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                        : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                    } backdrop-blur-sm`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-medium">{step.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } mb-3`}
                    >
                      {step.company}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
