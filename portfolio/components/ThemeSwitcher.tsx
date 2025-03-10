'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('system');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize theme
    const initTheme = () => {
      const storedTheme = localStorage.getItem('theme') || 'system';
      if (storedTheme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        applyTheme(systemTheme);
        setTheme('system');
      } else {
        applyTheme(storedTheme);
        setTheme(storedTheme);
      }
    };

    initTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const applyTheme = (newTheme: string) => {
    const root = document.documentElement;
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.remove('light', 'dark');
      root.classList.add(systemTheme);
      root.style.colorScheme = systemTheme;
    } else {
      root.classList.remove('light', 'dark');
      root.classList.add(newTheme);
      root.style.colorScheme = newTheme;
    }
  };

  const setNewTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-[60]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center text-sm font-medium transition-colors 
                     focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E6C9A8] 
                     disabled:pointer-events-none disabled:opacity-50 h-9 w-9
                     bg-inherit"
          type="button"
          aria-label="Toggle theme"
        >
          {/* Sun icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:text-[#E6C9A8] text-[#2C1810]"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>

          {/* Moon icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-[#E6C9A8] backdrop-blur"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>

          <span className="sr-only">Toggle theme</span>
        </motion.button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-32 bg-inherit py-1"
          >
            <button
              onClick={() => setNewTheme('light')}
              className="block w-full px-4 py-2 text-sm dark:text-[#E6C9A8] text-[#2C1810] hover:border hover:border-[#2C1810] dark:hover:border dark:hover:border-[#E6C9A8]  rounded-md"
            >
              Light
            </button>
            <button
              onClick={() => setNewTheme('dark')}
              className="block w-full px-4 py-2 text-sm dark:text-[#E6C9A8] text-[#2C1810] hover:border hover:border-[#2C1810] dark:hover:border dark:hover:border-[#E6C9A8]  rounded-md"
            >
              Dark
            </button>
            <button
              onClick={() => setNewTheme('system')}
              className="block w-full px-4 py-2 text-sm dark:text-[#E6C9A8] text-[#2C1810] hover:border hover:border-[#2C1810] dark:hover:border dark:hover:border-[#E6C9A8]  rounded-md"
            >
              System
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;