'use client';
import { motion } from 'framer-motion';

const skillsData = [
  {
    front: "Full Stack",
    back: ["React", "Next.js", "TypeScript", "Node.js", "Python", "Django"]
  },
  {
    front: "Mobile Development", 
    back: ["React Native", "iOS", "Android", "Mobile UI/UX"]
  },
  {
    front: "Database",
    back: ["MongoDB", "PostgreSQL", "MySQL"]
  },
  {
    front: "UI/UX",
    back: ["Tailwind CSS", "HTML5", "CSS3", "Figma", "Responsive Design"]
  },
  {
    front: "Tools",
    back: ["VS Code", "Postman", "GitHub", "Docker"]
  },
  {
    front: "Soft Skills",
    back: ["Problem Solving", "Team Collaboration", "Agile/Scrum", "Communication"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-12 sm:py-16 md:py-24 bg-[#E6C9A8] dark:bg-[#2C1810] transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light text-[#2C1810] dark:text-[#E6C9A8] mb-8 sm:mb-12 md:mb-16 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#D4A574]/10 dark:bg-white/5 rounded-2xl p-6 sm:p-8
                border border-[#2C1810]/10 dark:border-[#E6C9A8]/10
                hover:border-[#2C1810]/30 dark:hover:border-[#E6C9A8]/30
                hover:shadow-lg dark:hover:shadow-[#E6C9A8]/5
                transition-all duration-300"
            >
              <h3 className="text-base sm:text-lg font-medium text-[#2C1810] dark:text-[#E6C9A8] mb-6 text-center">
                {skill.front}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                {skill.back.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="text-xs sm:text-sm text-[#2C1810]/80 dark:text-[#E6C9A8]/80 py-2 px-3
                      bg-[#2C1810]/10 dark:bg-[#E6C9A8]/10 rounded-lg
                      border border-[#2C1810]/10 dark:border-[#E6C9A8]/10
                      hover:border-[#2C1810]/30 dark:hover:border-[#E6C9A8]/30
                      transition-all duration-200 text-center"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;