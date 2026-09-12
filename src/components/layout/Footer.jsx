import { Scale, MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaLinkedin  } from "react-icons/fa";
import Container from '../Container';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#services' },
  // { label: 'Credentials', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaLinkedin , href: 'https://linkedin.com', label: 'LinkedIn' },
];

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy border-t border-gold/10 pt-16 pb-8 px-6">
      <Container className="px-6">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-slate/10">
          <div>
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 text-slate mb-4"
            >
              <Scale size={22} className="text-gold" />
              <span className="text-lg font-serif tracking-tight">
                MD. YOUSUF HOSSAIN
              </span>
            </a>
            <p className="text-slate/60 text-sm leading-relaxed max-w-xs">
              Legal counsel for individuals and businesses across civil,
              criminal, and family matters.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full border border-slate/15 flex items-center justify-center text-slate/60 hover:text-gold hover:border-gold/40 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-slate text-sm mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate/60 text-sm hover:text-gold transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate text-sm mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-slate/60 text-sm">
                  Chamber No. 12, Bar Council Building, Dhaka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="text-slate/60 text-sm hover:text-gold transition-colors"
                >
                  +880 1XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:contact@yusufhossain.com"
                  className="text-slate/60 text-sm hover:text-gold transition-colors"
                >
                  contact@yusufhossain.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate/40 text-xs">
            © {new Date().getFullYear()} Md. Yusuf Hossain. All rights reserved.
          </p>
          <p className="text-slate/40 text-xs">Advocate, Supreme Court of Bangladesh</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;