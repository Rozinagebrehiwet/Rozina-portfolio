'use client';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const About = () => {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies like React, Next.js, Node.js and databases'
    },
    {
      title: 'Mobile Development', 
      description: 'Creating native and cross-platform mobile apps using React Native and modern mobile frameworks'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and aesthetically pleasing user experiences'
    }
  ];

  return (
    <section id='about' className="min-h-screen flex items-center py-16 sm:py-24 bg-[#E6C9A8] dark:bg-[#2C1810] border-collapse transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-light text-[#2C1810] dark:text-[#E6C9A8] mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-base sm:text-lg text-[#2C1810]/80 dark:text-[#E6C9A8]/80 leading-relaxed">
            Passionate about crafting clean, efficient web applications. Currently pursuing my degree while freelancing and building a robust experience.      
           </p>
            <p className="text-base sm:text-lg text-[#2C1810]/80 dark:text-[#E6C9A8]/80 leading-relaxed">
            Focused on responsive design and cutting-edge web technologies, I continuously learn and apply new skills to solve real-world challenges through innovative coding.            </p>

            <motion.a
              href="/assets/cv/CV.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-6 py-3 mt-4 text-sm
                bg-[#2C1810] dark:bg-[#E6C9A8]
                text-[#E6C9A8] dark:text-[#2C1810]
                rounded-xl transition-all duration-200
                hover:bg-[#2C1810]/90 dark:hover:bg-[#E6C9A8]/90
                focus:outline-none focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-xl
                    bg-gradient-to-br from-[#D4A574]/20 to-[#D4A574]/5 
                    dark:from-white/10 dark:to-white/5 backdrop-blur-sm
                    border border-[#2C1810]/10 dark:border-[#E6C9A8]/10 
                    hover:border-[#2C1810]/30 dark:hover:border-[#E6C9A8]/30 
                    hover:shadow-xl dark:hover:shadow-[#E6C9A8]/5
                    transform hover:-translate-y-1
                    transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-medium text-[#2C1810] dark:text-[#E6C9A8] mb-3
                      group-hover:text-[#2C1810] dark:group-hover:text-[#E6C9A8]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#2C1810]/70 dark:text-[#E6C9A8]/70
                      group-hover:text-[#2C1810]/90 dark:group-hover:text-[#E6C9A8]/90">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;