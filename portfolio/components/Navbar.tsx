'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      href: '#home',
      label: 'Navigate to home section',
      icon: (
        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2zm0 2.83L19.17 12H18v8h-4v-6H10v6H6v-8H4.83L12 4.83z" />
      ),
    },
    {
      href: '#skills',
      label: 'Navigate to skills section',
      icon: (
        <>
          <path d="M11.9 2C8.2 2 5.2 5 5.2 8.7c0 3.4 2.2 6.3 5.2 7.3v4c0 .6.4 1 1 1s1-.4 1-1v-4c3-.9 5.2-3.8 5.2-7.3C17.6 5 14.6 2 11.9 2zm0 12c-2.9 0-5.2-2.3-5.2-5.3S9 3.5 11.9 3.5s5.2 2.3 5.2 5.3-2.3 5.2-5.2 5.2z" />
          <path d="M11.9 6.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-1 2.2-2.2-1-2.2-2.2-2.2z" />
        </>
      ),
    },
   
    {
      href: '#projects',
      label: 'Navigate to projects section',
      icon: (
        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.2l2 2H20v10z" />
      ),
    },
    {
      href: '#about',
      label: 'Navigate to about section', 
      icon: (
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z" />
      ),
    },
    {
      href: '#contact',
      label: 'Navigate to contact section',
      icon: (
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
      ),
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed md:right-8 md:top-1/2 md:-translate-y-1/2 md:space-y-4 z-50 
                 bottom-0 md:bottom-auto left-0 right-0 md:left-auto bg-[white]/20 dark:bg-[#2C1810]/80  md:bg-transparent 
                 backdrop-blur-sm md:backdrop-blur-none flex md:flex-col justify-center 
                 items-center space-x-12 md:space-x-1 p-4 md:p-0"
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.href.substring(1);
        return (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`block w-8 h-8 transition-colors ${
              isActive 
                ? 'text-[#2C1810] dark:text-[#E6C9A8]' 
                : 'text-[#2C1810]/50 dark:text-[#E6C9A8]/60 hover:text-[#2C1810] dark:hover:text-[#E6C9A8]'
            }`}
            aria-label={item.label}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              {item.icon}
            </svg>
          </motion.a>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;