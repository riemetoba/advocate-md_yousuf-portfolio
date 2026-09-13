import { motion } from 'framer-motion';
import { PhoneCall, SearchCheck, Target, CheckCircle2 } from 'lucide-react';
import Container from '../Container';

const steps = [
  {
    icon: PhoneCall,
    step: '01',
    title: 'Initial Consultation',
    desc: 'We discuss your matter in detail so I understand exactly what you are facing.',
  },
  {
    icon: SearchCheck,
    step: '02',
    title: 'Case Assessment',
    desc: 'Your documents and facts are reviewed carefully before any advice is given.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Strategy & Action',
    desc: 'A clear plan is laid out, and I proceed with filings or negotiations on your behalf.',
  },
  {
    icon: CheckCircle2,
    step: '04',
    title: 'Resolution & Follow-up',
    desc: 'You are kept informed at every stage until the matter is fully resolved.',
  },
];

const Process = () => {
  return (
    <section id="process" aria-labelledby="process-heading" className="bg-offwhite py-24 px-6">
      <Container className="px-6">
        <div className="max-w-xl mb-16">
          <p className="text-gold text-sm mb-3">How I Work</p>
          <h2 id="process-heading" className="text-3xl md:text-4xl font-serif text-charcoal">
            What to expect, step by step
          </h2>
        </div>

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white border border-navy/10 rounded-xl p-7"
              >
                <span className="text-gold/30 text-3xl font-serif absolute top-5 right-6">
                  {item.step}
                </span>
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center mb-6">
                  <Icon size={20} className="text-navy" />
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
};

export default Process;