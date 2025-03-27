'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website showcasing my work and skills, built with Next.js and Framer Motion.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/Rozinagebrehiwet/Portfolio",
      image: "/images/portfolio.png"
    },
    {
      title: "Food Delivery Platform", 
      description: "Full-stack food delivery platform with advanced features. Led as Scrum Master, implementing Agile practices and managing sprints through Jira for efficient project delivery.",
      tech: ["React", "Django", "Agile", "Tailwind CSS", "Jira"],
      link: "https://github.com/Rozinagebrehiwet/food-delivery",
      image: "/images/food-delivery.png"
    },
    {
      title: "Network Traffic Detection",
      description: "Network traffic detection tool that uses machine learning to detect and classify network traffic.",
      tech: ["Python", "Keras", "TensorFlow", "Flask"],
      link: "https://github.com/Rozinagebrehiwet/Network-traffic-detections",
      hasNoImage: true
    }
  ];

  return (
    <section id='projects' className="py-12 sm:py-16 md:py-24  bg-[#E6C9A8] dark:bg-[#2C1810]  transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-[#2C1810] dark:text-[#E6C9A8] mb-12 sm:mb-16 md:mb-20 text-center"
        >
          Selected Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl overflow-hidden
                border border-[#2C1810]/10 dark:border-[#E6C9A8]/10
                hover:border-[#2C1810]/30 dark:hover:border-[#E6C9A8]/30 
                hover:shadow-xl dark:hover:shadow-[#E6C9A8]/5
                transform hover:-translate-y-1
                transition-all duration-300 ease-in-out"
            >
              {!project.hasNoImage && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || ''}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              {project.hasNoImage && (
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#2C1810]/20 to-[#D4A574]/20 dark:from-[#E6C9A8]/20 dark:to-[#2C1810]/20 p-6 flex items-center justify-center">
                  <div className="text-[#2C1810] dark:text-[#E6C9A8] opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-medium text-[#2C1810] dark:text-[#E6C9A8] mb-3 sm:mb-4
                  transform group-hover:translate-x-1 transition-transform duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[#2C1810]/60 dark:text-[#E6C9A8]/60 mb-6
                  transform group-hover:translate-x-1 transition-transform duration-200 delay-75 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={tech}
                      className={`text-xs sm:text-sm px-4 py-2 rounded-xl border  bg-black/5 dark:bg-black/20
                        ${techIndex % 2 === 0 
                          ? 'bg-[] text-yellow-500 border-yellow-500 ' 
                          : 'border-green-500 text-green-500 '}
                        transform hover:scale-110 transition-transform duration-300
                        shadow-sm hover:shadow-md`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-base sm:text-lg font-medium text-[#2C1810] dark:text-[#E6C9A8] 
                    relative overflow-hidden group/link
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                    after:bg-current after:origin-left after:scale-x-0 after:transition-transform
                    hover:after:scale-x-100 focus:outline-none"
                  whileHover={{ x: 10 }}
                >
                  Explore Project 
                  <span className="ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
