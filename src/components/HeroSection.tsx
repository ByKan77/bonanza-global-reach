import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ParticleField from "./ParticleField";
import logo from "@/assets/logo-bonanza.png";

const HeroSection = () => {
  const [phase, setPhase] = useState<"black" | "logo" | "reveal">("black");
  const letters = "BONANZA".split("");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 300);
    const t2 = setTimeout(() => setPhase("reveal"), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particle field */}
      <AnimatePresence>
        {phase === "reveal" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <ParticleField />
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsla(228,76%,57%,0.08)_0%,transparent_60%)]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Animated logo */}
        {(phase === "logo" || phase === "reveal") && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 1 }}
            animate={phase === "reveal" ? { opacity: 0, y: -40 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                  className="font-display text-5xl md:text-7xl font-light tracking-[0.3em] text-gradient-gold"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hero text */}
        {phase === "reveal" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6">
              Global Logistics.
              <br />
              <span className="text-gradient-gold">Pharmaceutical Precision.</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Spécialiste de l'import-export pharmaceutique, nous mettons notre rigueur
              et notre réseau mondial au service de vos besoins de sourcing les plus
              exigeants — quel que soit votre secteur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="font-body text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:shadow-[0_4px_16px_hsla(43,56%,52%,0.25)] transition-all duration-300"
              >
                Get a Quote
              </a>
              <a
                href="#expertise"
                className="font-body text-sm px-8 py-3.5 border border-border text-foreground rounded-sm hover:bg-secondary transition-all duration-300"
              >
                Discover Our Expertise
              </a>
            </div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {phase === "reveal" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
