import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Container from '../Container';

const faqs = [
  {
    question: 'What should I bring to the first consultation?',
    answer: 'Any documents related to your matter — contracts, notices, prior correspondence — along with a brief written timeline of events, if you have one. This helps me understand your case faster.',
  },
  {
    question: 'How is your consultation fee structured?',
    answer: 'The initial consultation fee is discussed upfront, before any commitment. Ongoing case fees depend on the complexity and scope of the matter, which we agree on together.',
  },
  {
    question: 'How long does a typical case take?',
    answer: 'It varies widely depending on the type of matter and court schedules. After reviewing your case, I will give you a realistic timeline rather than a generic estimate.',
  },
  {
    question: 'Can I reach you directly during my case?',
    answer: 'Yes. You will have direct access to me throughout your matter, not a rotating team of assistants, so you always know who to ask.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-navy py-24 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Container className="px-0 md:px-6 max-w-3xl">
        <div className="mb-16">
          <p className="text-gold text-sm mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-serif text-slate">
            Common questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border border-slate/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/50"
                >
                  <span className="text-slate text-sm md:text-base font-medium">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={14} className="text-gold" aria-hidden="true" />
                    ) : (
                      <Plus size={14} className="text-gold" aria-hidden="true" />
                    )}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-slate/60 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;