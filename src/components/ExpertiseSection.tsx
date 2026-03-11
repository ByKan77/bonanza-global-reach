import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ExpertiseSection = () => {
  const { t } = useLanguage();
  const e = t.expertise;
  const pillars = e.pillars;

  return (
    <section id="expertise" className="relative py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {e.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground">
            {e.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-8 md:p-10 border border-border/50 hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
