import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale } from 'lucide-react';
import Container from '../Container';
import Button from '../Button';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // স্ক্রল স্টেট ট্র্যাকিং
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
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
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} 
          className="flex items-center gap-2 text-slate"
        >
          <Scale size={22} className="text-gold" />
          <span className="text-lg tracking-tight font-serif">MD. YOUSUF HOSSAIN</span>
        </a>

        {/* ডেস্কটপ মেনু */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-slate/80 hover:text-gold transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          
          {/* কাস্টম Button কম্পোনেন্ট */}
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>
            <Button 
              btnText="Book Consultation"
              className="text-sm border border-gold text-gold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition-colors cursor-pointer"
            />
          </a>
        </nav>

        {/* মোবাইল মেনু টগল বাটন */}
        <button
          className="md:hidden text-slate"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* মোবাইল মেনু ড্রপডাউন */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navy/95 backdrop-blur-md border-t border-gold/20"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-slate/90 text-sm py-2"
                >
                  {link.label}
                </button>
              ))}
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="mt-2">
                <Button 
                  btnText="Book Consultation"
                  className="w-full text-sm border border-gold text-gold px-5 py-2 rounded-full text-center hover:bg-gold hover:text-navy transition-colors cursor-pointer"
                />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;