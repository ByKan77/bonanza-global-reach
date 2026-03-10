import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const hero = t.hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0"
      >
        <ParticleField />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-accent-foreground">
            {hero.titleLine1}
            <br />
            <span className="text-gradient-gold">{hero.titleLine2}</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-accent-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="font-body text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.35)] transition-all duration-300"
            >
              {hero.ctaQuote}
            </a>
            <a
              href="#expertise"
              className="font-body text-sm px-8 py-3.5 border border-accent-foreground/20 text-accent-foreground rounded-sm hover:bg-accent-foreground/10 transition-all duration-300"
            >
              {hero.ctaExpertise}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
