import { motion, type Variants } from "framer-motion";

export const ProjectCard = ({ project, index, isDarkMode }) => {
  const cardVariants = {
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
  return (
    <motion.div
      variants={cardVariants as Variants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
        } blackdrop-blur-sm`}
      >
        {/* project image */}
        <div>
          <img src={project.image} alt={project.title} className="" />
          {/* Featured badged */}
          {project.Featured && (
            <div>
              <span>Featured</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
