import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';
import Container from '../Container';
import Button from '../Button';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'How I Work', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-navy/90 backdrop-blur-md border-b border-gold/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <Container className="px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')} 
          className="flex items-center gap-2 text-slate"
          aria-label="Home"
        >
          <Scale size={22} className="text-gold" aria-hidden="true" />
          <span className="text-lg tracking-tight font-serif">MD. YOUSUF HOSSAIN</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-slate/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <Button 
            btnText="Book Consultation"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-sm border border-gold text-gold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition-colors cursor-pointer"
            aria-label="Book Consultation"
          />
        </nav>

        <button
          className="md:hidden text-slate p-1 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-md border-t border-gold/20"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-left text-slate/90 text-sm py-2 hover:text-gold transition-colors block"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                btnText="Book Consultation"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="mt-2 w-full text-sm border border-gold text-gold px-5 py-3 rounded-full text-center hover:bg-gold hover:text-navy transition-colors cursor-pointer"
                aria-label="Book Consultation"
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;