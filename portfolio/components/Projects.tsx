'use client';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills, built with Next.js and Framer Motion",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/Rozinagebrehiwet/Portfolio"
    },
    {
      title: "Food Delivery Platform", 
      description: "Full-stack food delivery platform with advanced features ",
      tech: ["React", "Django", "Tailwind CSS", ],
      link: "https://github.com/Rozinagebrehiwet/food-delivery"
    },
    {
      title: "Network Traffic Detection",
      description: "Network traffic detection tool that uses machine learning to detect and classify network traffic",
      tech: ["Python", "Keras", "TensorFlow", "Flask"],
      link: "https://github.com/Rozinagebrehiwet/Network-traffic-detections"
    }
  ];

  return (
    <section id='projects' className="py-12 sm:py-16 md:py-24 bg-[#E6C9A8] dark:bg-[#2C1810] transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-[#2C1810] dark:text-[#E6C9A8] mb-8 sm:mb-12 md:mb-16 text-center"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#D4A574]/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 
                border border-[#2C1810]/10 dark:border-[#E6C9A8]/10 
                hover:border-[#2C1810]/30 dark:hover:border-[#E6C9A8]/30 
                hover:shadow-lg dark:hover:shadow-[#E6C9A8]/5
                transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-medium text-[#2C1810] dark:text-[#E6C9A8] mb-2 sm:mb-3">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2C1810]/80 dark:text-[#E6C9A8]/80 mb-4 sm:mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="text-[10px] sm:text-xs px-2 py-1 rounded-full 
                      bg-[#2C1810]/10 dark:bg-[#E6C9A8]/10 
                      text-[#2C1810] dark:text-[#E6C9A8]
                      border border-[#2C1810]/5 dark:border-[#E6C9A8]/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs sm:text-sm text-[#2C1810] dark:text-[#E6C9A8] 
                  hover:opacity-70 transition-all duration-300
                  hover:underline focus:outline-none focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20 rounded"
                whileHover={{ x: 5 }}
              >
                View Project 
                <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;