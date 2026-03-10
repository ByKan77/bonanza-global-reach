import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ExpertiseSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();
  const e = t.expertise;

  return (
    <section id="expertise" className="relative py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {e.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light">
            {e.title1} <span className="text-gradient-gold">{e.title2}</span>.
            <br />
            {e.title3}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-lg overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-[60%] p-8 md:p-12">
              <div className="inline-block px-3 py-1 rounded-full border border-primary/30 mb-6">
                <span className="font-body text-xs tracking-wider uppercase text-primary">
                  {e.coreLabel}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-light mb-6">
                {e.pharmaTitle}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {e.pharmaDesc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {e.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span className="font-body text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block w-px bg-border" />
            <div className="lg:hidden h-px bg-border mx-8" />

            <div className="lg:w-[40%] p-8 md:p-12 flex flex-col justify-center gap-8">
              {e.secondary.map((item, i) => (
                <div
                  key={item.title}
                  className="relative cursor-default group"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h4 className="font-display text-lg font-light text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {item.title}
                  </h4>
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: hoveredIndex === i ? "120px" : "0",
                      opacity: hoveredIndex === i ? 1 : 0,
                    }}
                  >
                    <p className="font-body text-sm text-muted-foreground leading-relaxed pt-2">
                      {item.description}
                    </p>
                  </div>
                  {i === 0 && <div className="mt-8 h-px bg-border" />}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
