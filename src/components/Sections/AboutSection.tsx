import { useRef } from "react";
import { useTheme } from "../../context/useTheme";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/helper";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";

export const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timeLineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelinInView = useInView(timeLineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
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
          className={`absolute top-40 right-1/3 w-80 rounded-full blur-3xl opacity-5
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
            <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>
        <div>
          {/* Personal Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className=""
          >
            <motion.div
              variants={itemVariants as Variants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="">My Mission</h3>
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
            {/* What I love building */}
            <motion.div>
              <h3 className="">What I Love Building</h3>
              <div>
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants as Variants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hove:bg-gray-800/50"
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  ></motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline Line */}
        <div
          className={`absolute left-8 top-16 w-px ${
            isDarkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        />
        <div className="">
          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={step.year}
              variants={stepVariants as Variants}
              whileHover={{ x: 4 }}
              className=""
            >
              {/* Timeline Dot */}
              <div
                className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon size={24} className="" />
              </div>
              {/* Content */}
              <div
                className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                    : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                } backdrop-blur-sm`}
              >
                <div className="">
                  <h4 className="">{step.title}</h4>
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
          ))}
        </div>
      </div>
    </section>
  );
};
