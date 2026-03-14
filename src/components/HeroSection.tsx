import { motion } from "framer-motion";
import ParticleField from "./ParticleField";
import { useLanguage } from "@/contexts/LanguageContext";
import videoEntrepot from "@/assets/video_bonanza/0310.mp4";

const HeroSection = () => {
  const { t } = useLanguage();
  const hero = t.hero;
  const videoTitle = "videoTitle" in hero ? hero.videoTitle : null;

  return (
    <section id="hero" className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-x-hidden overflow-y-auto bg-accent pt-24 pb-12 md:pt-0 md:pb-0 md:overflow-hidden">
      {/* Video en fond — object-position adapté mobile (cadrage centré-haut) vs desktop (centre) */}
      <div className="absolute inset-0">
        <video
          src={videoEntrepot}
          className="absolute inset-0 w-full h-full object-cover object-[50%_35%] sm:object-[50%_38%] md:object-center"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-accent/75 backdrop-blur-[1px]" aria-hidden />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0"
      >
        <ParticleField />
      </motion.div>

      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center w-full max-w-2xl"
        >
          {videoTitle && (
            <p className="font-body text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-accent-foreground/80 mb-3 sm:mb-6">
              {videoTitle}
            </p>
          )}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.15] mb-4 sm:mb-6 text-accent-foreground break-words">
            <span className="md:whitespace-nowrap">{hero.titleLine1}</span>
            <span className="md:hidden"> </span>
            <br className="hidden md:block" />
            <span className="text-gradient-gold md:whitespace-nowrap">{hero.titleLine2}</span>
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed">
            {hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <a
              href="#contact"
              className="font-body text-sm px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-sm hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.35)] transition-all duration-300 text-center w-full sm:w-auto min-w-0"
            >
              {hero.ctaQuote}
            </a>
            <a
              href="#expertise"
              className="font-body text-sm px-6 sm:px-8 py-3 sm:py-3.5 border border-accent-foreground/20 text-accent-foreground rounded-sm hover:bg-accent-foreground/10 transition-all duration-300 text-center w-full sm:w-auto min-w-0"
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
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent-foreground/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
