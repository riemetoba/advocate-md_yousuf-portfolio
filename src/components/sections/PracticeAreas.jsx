import { motion } from 'framer-motion';
import { FileText, Gavel, Shield, Users } from 'lucide-react';
import Container from '../Container';

const practiceAreas = [
  {
    icon: FileText,
    title: 'Legal Drafting',
    desc: 'Contracts, agreements, and legal documents drafted with precision and enforceability in mind.',
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    desc: 'Diligent representation in property, contract, and tort disputes from filing through resolution.',
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    desc: 'Attentive, thoroughly prepared defense counsel at every stage of criminal proceedings.',
  },
  {
    icon: Users,
    title: 'Family Law',
    desc: 'Compassionate guidance through divorce, custody, and inheritance matters.',
  },
];

const PracticeAreas = () => {
  return (
    <section id="services" className="bg-navy py-24 px-6">
      <Container className="px-6">
        <div className="max-w-xl mb-16">
          <p className="text-gold text-sm mb-3">Practice Areas</p>
          <h2 className="text-3xl md:text-4xl font-serif text-slate">
            Where I can help
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group bg-white/[0.03] border border-slate/10 rounded-xl p-7 transition-colors hover:border-gold/40"
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="text-lg font-medium text-slate mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-slate/60 leading-relaxed">
                  {area.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PracticeAreas;