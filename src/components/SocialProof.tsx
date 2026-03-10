import { motion } from "framer-motion";

const certifications = [
  "WHO-GMP",
  "ISO 9001",
  "GDP Certified",
  "AEO Status",
  "IATA Approved",
  "EU-GMP",
];

const SocialProof = () => {
  return (
    <section id="network" className="relative py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Trusted & Certified
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {certifications.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="glass-panel-subtle px-6 py-3 rounded-sm"
            >
              <span className="font-display text-sm font-light tracking-wider text-muted-foreground">
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "40+", label: "Countries" },
            { value: "99.7%", label: "On-time Delivery" },
            { value: "500+", label: "SKUs Managed" },
            { value: "24/7", label: "Cold Chain Monitoring" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-light text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
