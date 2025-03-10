'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E6C9A8] dark:bg-[#2C1810] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 border-t border-[#2C1810]/10 dark:border-[#E6C9A8]/10">
          <div className="text-center text-[#2C1810]/80 dark:text-[#E6C9A8]/80 text-sm">
            <p>© {currentYear} Rozina Gebrehiwet. All rights reserved.</p>
          </div>

          <motion.a
            href="#top"
            className="fixed bottom-16 md:bottom-8 right-2 md:right-8 bg-[#2C1810] dark:bg-[#E6C9A8] text-[#E6C9A8] dark:text-[#2C1810] z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;