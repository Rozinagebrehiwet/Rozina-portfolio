'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mrbpznzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setShowAlert(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        // Hide alert after 3 seconds
        setTimeout(() => {
          setShowAlert(false);
          setStatus('');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id='contact' className="min-h-screen flex items-center justify-center bg-[#E6C9A8] dark:bg-[#2C1810] relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/5 to-transparent dark:from-[#E6C9A8]/5"
        />
      </div>

      {/* Success Alert */}


      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C1810] dark:text-[#E6C9A8] mb-8 sm:mb-12 text-center"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-[#2C1810]/80 dark:text-[#E6C9A8]/80 mb-12 max-w-2xl mx-auto text-sm sm:text-base"
        >
Got a project or concept to share? Let’s connect and bring it to life!
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 sm:space-y-8 w-full max-w-2xl mx-auto"
        >
          <div className="space-y-4 sm:space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#D4A574]/20 dark:bg-[#3A1F12]/50 
                text-[#2C1810] dark:text-[#E6C9A8] 
                placeholder-[#2C1810]/60 dark:placeholder-[#E6C9A8]/60 
                border border-[#2C1810]/20 dark:border-[#E6C9A8]/20 
                rounded-xl px-5 py-4
                focus:outline-none focus:border-[#2C1810]/50 dark:focus:border-[#E6C9A8]/50
                focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20
                transition-all duration-200"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#D4A574]/20 dark:bg-[#3A1F12]/50 
                text-[#2C1810] dark:text-[#E6C9A8] 
                placeholder-[#2C1810]/60 dark:placeholder-[#E6C9A8]/60 
                border border-[#2C1810]/20 dark:border-[#E6C9A8]/20 
                rounded-xl px-5 py-4
                focus:outline-none focus:border-[#2C1810]/50 dark:focus:border-[#E6C9A8]/50
                focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20
                transition-all duration-200"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full bg-[#D4A574]/20 dark:bg-[#3A1F12]/50 
                text-[#2C1810] dark:text-[#E6C9A8] 
                placeholder-[#2C1810]/60 dark:placeholder-[#E6C9A8]/60 
                border border-[#2C1810]/20 dark:border-[#E6C9A8]/20 
                rounded-xl px-5 py-4
                focus:outline-none focus:border-[#2C1810]/50 dark:focus:border-[#E6C9A8]/50
                focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20
                transition-all duration-200"
                required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full bg-[#D4A574]/20 dark:bg-[#3A1F12]/50 
                text-[#2C1810] dark:text-[#E6C9A8] 
                placeholder-[#2C1810]/60 dark:placeholder-[#E6C9A8]/60 
                border border-[#2C1810]/20 dark:border-[#E6C9A8]/20 
                rounded-xl px-5 py-4
                focus:outline-none focus:border-[#2C1810]/50 dark:focus:border-[#E6C9A8]/50
                focus:ring-2 focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20
                transition-all duration-200 resize-none"
              required
            ></textarea>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#2C1810] dark:bg-[#E6C9A8]
              text-[#E6C9A8] dark:text-[#2C1810] 
              py-4 px-8 rounded-xl font-light
              hover:bg-[#3A1F12] dark:hover:bg-[#D4A574]
              focus:outline-none focus:ring-2 
              focus:ring-[#2C1810]/20 dark:focus:ring-[#E6C9A8]/20
              transform transition-all duration-200
              text-sm sm:text-base"
            disabled={status === 'success'}
          >
            Send Message
          </motion.button>
          
          {status === 'error' && (
            <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
