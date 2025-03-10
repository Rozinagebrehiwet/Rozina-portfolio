'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const nameLetters = "Rozina Gebrehiwet".split('');

  return (
    <section id='home' className="min-h-screen flex items-center justify-center bg-[#E6C9A8] dark:bg-[#2C1810] relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto relative z-10 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-wider mb-6 sm:mb-8 font-langar">
            <motion.div 
              className="flex flex-col sm:flex-row justify-center flex-wrap gap-2 sm:gap-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex justify-center sm:justify-start text-[#2C1810] dark:text-[#E6C9A8] transition-colors duration-300">
                {nameLetters.slice(0, 6).map((letter, index) => (
                  <motion.span 
                    key={index} 
                    className="transition-all duration-300 hover:text-[#D4A574]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-center sm:justify-start sm:ml-2 text-[#2C1810] dark:text-[#E6C9A8] transition-colors duration-300">
                {nameLetters.slice(6).map((letter, index) => (
                  <motion.span 
                    key={index + 6} 
                    className="transition-all duration-300 hover:text-[#D4A574]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 6) * 0.1 }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </h1>

          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-thin tracking-wide text-[#2C1810] dark:text-[#E6C9A8] mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
              <span>Full Stack Developer</span>
              <span className="hidden sm:inline text-3xl md:text-4xl text-[#2C1810]/30 dark:text-[#E6C9A8]/50">|</span>
              <span>Mobile App Developer</span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a
              whileHover={{ 
                scale: 1.02,
                letterSpacing: "0.05em"
              }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto bg-[#2C1810] text-[#E6C9A8] dark:bg-[#E6C9A8] dark:text-[#2C1810] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-light tracking-wider transition-all duration-300 text-center min-w-[200px] hover:shadow-lg"
            >
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.02,
                backgroundColor: 'rgba(44, 24, 16, 0.1)',
                letterSpacing: "0.05em"
              }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="w-full sm:w-auto bg-transparent text-[#2C1810] dark:text-[#E6C9A8] hover:bg-[#2C1810]/10 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-light tracking-wider transition-all duration-300 text-center min-w-[200px] border border-[#2C1810] dark:border-[#E6C9A8] hover:shadow-lg"
            >
              View Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-16 md:bottom-10 align-center  transform -translate-x-1/2 cursor-pointer z-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          opacity: { duration: 0.5, delay: 1.5 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })}
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 border border-[#2C1810] dark:border-[#E6C9A8] rounded-full flex justify-center hover:border-opacity-70 transition-all duration-300">
          <motion.div 
            className="w-1 sm:w-1.5 h-2.5 sm:h-3 bg-[#2C1810] dark:bg-[#E6C9A8] rounded-full mt-2"
            animate={{
              opacity: [0.8, 0.4, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;