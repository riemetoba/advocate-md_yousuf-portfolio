import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Container from '../Container'; 
import Button from '../Button'; 
import Image from '../Image'; 
import mdYusufImage from '../../assets/md-yusuf.jpg';

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-navy overflow-hidden"
    >
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.08),transparent_60%)]" />

      <Container className="px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-24 md:pt-0">
        
        {/* Left Column: Text Content */}
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
              onClick={handleScrollToContact}
              className="inline-block"
            >
              <Button 
                btnText="Book Consultation"
                className="bg-gold text-navy px-8 py-3 rounded-full text-sm font-medium hover:bg-gold/90 transition-colors cursor-pointer"
              />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="relative flex justify-end w-full"
        >
          <div className="aspect-[3/4] w-full max-w-md ml-auto rounded-2xl border border-gold/20 bg-navy/40 flex items-center justify-center overflow-hidden">
            <Image
              imgSrc={mdYusufImage}
              alt="Advocate Md. Yusuf Hossain portrait"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>

      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate/40"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;