import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Container from "../Container";
import Image from "../Image";
import mdYusufAbout from "../../assets/md-yusuf-about.jpg";

const stats = [
  { value: "2+", label: "Years of Practice" },
  { value: "50+", label: "Cases Handled" },
  { value: "95%", label: "Client Satisfaction" },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-offwhite py-24 px-6"
    >
      <Container className="px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] w-full max-w-sm rounded-2xl overflow-hidden border border-navy/10">
            <Image
              imgSrc={mdYusufAbout}
              alt="Advocate Md. Yusuf Hossain at his law office in Bangladesh"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-navy text-slate rounded-xl px-6 py-4 flex items-center gap-3 shadow-lg">
            <Scale size={20} className="text-gold" aria-hidden="true" />
            <span className="text-sm">Bangladesh Bar Council</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-gold text-sm mb-3">About</p>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-serif text-charcoal mb-6"
          >
            Counsel built on precision and patience
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            I handle civil, criminal, and family law matters with thorough case
            preparation and a direct, honest approach with every client.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-10">
            My practice is built on the belief that good legal counsel listens
            first, then acts with clarity — I never rush a client toward a
            decision they don't fully understand.
          </p>

          <dl className="grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl md:text-3xl font-serif text-navy mb-1">
                  {stat.value}
                </dt>
                <dd className="text-xs text-charcoal/60 leading-snug">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;