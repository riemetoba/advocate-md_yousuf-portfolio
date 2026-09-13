import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Container from '../Container';
import Image from '../Image';
import mdYusufImage from '../../assets/md-yusuf.jpg';

const Hero = () => {
  const handleScrollToSection = (e, targetId) => {
    if (e) e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
      aria-label="Introduction"
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_60%)]" 
        aria-hidden="true" 
      />

      <Container className="px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-24 md:pt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-gold text-sm tracking-wide mb-4">
            Legal Consultant, Corporate & Civil Law
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-slate leading-tight mb-6">
            Md. Yusuf Hossain
          </h1>
          <p className="text-slate/70 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Fifteen years of steady, precise counsel for individuals and
            businesses navigating complex legal matters.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, '#contact')}
              className="inline-block bg-gold text-navy px-8 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors cursor-pointer text-center"
              aria-label="Book a consultation with Md. Yusuf Hossain"
            >
              Book Consultation
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-end w-full"
        >
          <div className="aspect-[3/4] w-full max-w-md ml-auto rounded-2xl border border-gold/20 bg-navy/40 flex items-center justify-center overflow-hidden">
            <Image
              imgSrc={mdYusufImage}
              alt="Advocate Md. Yusuf Hossain"
              className="w-full h-full object-cover"
              fetchPriority="high"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

      </Container>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          opacity: { duration: 1, delay: 0.8 },
          y: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a 
          href="#about"
          onClick={(e) => handleScrollToSection(e, '#about')}
          className="text-slate/40 hover:text-gold transition-colors p-3 flex items-center justify-center cursor-pointer"
          aria-label="Scroll down to About section"
        >
          <ArrowDown size={24} aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;