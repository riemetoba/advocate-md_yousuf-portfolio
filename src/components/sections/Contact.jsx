import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Container from '../Container';
import Button from '../Button';

const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="bg-offwhite py-24 px-6" aria-labelledby="contact-heading">
      <Container className="px-6 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-sm mb-3">Contact</p>
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
            Book a consultation
          </h2>
          <p className="text-charcoal/60 leading-relaxed mb-10 max-w-sm">
            Share a few details about your matter and I will get back to you
            within one business day.
          </p>

          <address className="flex flex-col gap-5 not-italic">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-gold shrink-0" aria-hidden="true" />
              <a href="tel:+8801977263182" className="text-charcoal/70 text-sm hover:text-gold transition-colors" aria-label="Call +880 1977-263182">
                +880 1977-263182
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-gold shrink-0" aria-hidden="true" />
              <a href="mailto:yousufhossainsujan@gmail.com" className="text-charcoal/70 text-sm hover:text-gold transition-colors" aria-label="Email yousufhossainsujan@gmail.com">
                yousufhossainsujan@gmail.com
              </a>
            </div>
          </address>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-navy/10 rounded-2xl p-8 flex flex-col gap-5"
          aria-label="Contact Form"
        >
          <div>
            <label htmlFor="name" className="text-sm text-charcoal/70 mb-1.5 block">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              className="w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-charcoal/70 mb-1.5 block">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-charcoal/70 mb-1.5 block">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-navy/15 rounded-lg px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-gold resize-none"
            />
          </div>

          <Button
            type="submit"
            btnText={status === 'sending' ? 'Sending...' : 'Send Message'}
            disabled={status === 'sending'}
            className="bg-navy text-slate px-6 py-3 rounded-full text-sm font-medium hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          />

          <div aria-live="polite" aria-atomic="true">
            {status === 'success' && (
              <p className="text-sm text-green-600">Message sent successfully.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </motion.form>
      </Container>
    </section>
  );
};

export default Contact;