import { motion } from "framer-motion";
import { Scale, MapPin } from "lucide-react";
import Container from "../Container";
import Image from "../Image";
import mdYousufAbout from "../../assets/md-yousuf-about.jpg";

const chambers = [
  {
    court: "Judge Court Chamber",
    firm: "Sayed Nazrul Islam & Associates",
    address:
      "Room No. 205 (1st Floor), Dhaka Bar Association Building, Kotowali, Dhaka-1100",
  },
  {
    court: "High Court Chamber",
    firm: "Md. Shafe Ullah & Associates",
    address:
      "Room No. 8050 (7th Floor), Huseyn Shaheed Suhrawardy Bhaban, Supreme Court Bar Association, Shahbagh, Dhaka-1000",
  },
];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-offwhite py-24 px-4"
    >
      <Container className="px-0 md:px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-4/5 w-full max-w-sm rounded-2xl overflow-hidden border border-navy/10">
            <Image
              imgSrc={mdYousufAbout}
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
            Grounded in diligence and growing expertise
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-4">
            I hold an LL.B (Hons) and LL.M, and I am currently working as an
            assistant to a senior advocate at the Judge Court and another
            senior advocate at the High Court Division, gaining hands-on
            exposure to real courtroom practice.
          </p>
          <p className="text-charcoal/70 leading-relaxed mb-10">
            This period of close mentorship under experienced seniors has
            shaped my approach to the law — one built on careful preparation,
            attention to detail, and a genuine commitment to every client I
            will serve.
          </p>

          <div className="space-y-5 border-t border-navy/10 pt-8">
            {chambers.map((chamber) => (
              <div
                key={chamber.firm}
                className="rounded-xl border border-navy/10 bg-white/60 p-5"
              >
                <p className="text-gold text-xs tracking-wide mb-1">
                  {chamber.court}
                </p>
                <p className="text-charcoal font-serif text-lg mb-2">
                  {chamber.firm}
                </p>
                <div className="flex items-start gap-2 text-charcoal/60 text-sm leading-snug">
                  <MapPin
                    size={16}
                    className="text-navy/50 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{chamber.address}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;