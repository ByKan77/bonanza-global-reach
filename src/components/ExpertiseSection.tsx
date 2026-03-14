import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ExpertiseSection = () => {
  const { t } = useLanguage();
  const e = t.expertise;
  const pillars = e.pillars;
  const titleParts = e.sectionTitle.split(". ");
  const titleLine1 = titleParts[0] ? `${titleParts[0]}.` : e.sectionTitle;
  const titleLine2 = titleParts.slice(1).join(". ");

  return (
    <section id="expertise" className="relative py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-muted-foreground mb-3 sm:mb-4">
            {e.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-light text-foreground max-w-xl mx-auto leading-tight md:leading-[1.15]">
            {titleLine2 ? (
              <>
                <span className="md:whitespace-nowrap">{titleLine1}</span>
                <span className="md:hidden"> </span>
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap">{titleLine2}</span>
              </>
            ) : (
              e.sectionTitle
            )}
          </h2>
        </motion.div>

        {/* Grille : items-stretch pour que toutes les cards aient la même hauteur (celle de la plus haute) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-9 items-stretch">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-7 sm:p-9 md:p-11 border border-border/50 hover:shadow-md transition-shadow flex flex-col h-full min-h-0 justify-start items-center text-center"
            >
              {/* Zone titre à hauteur fixe pour que le paragraphe commence au même niveau dans les 3 cards */}
              <h3 className={`font-display text-lg sm:text-xl md:text-2xl lg:text-[1.6rem] font-light text-foreground shrink-0 min-h-[2.8em] sm:min-h-[2.8em] md:min-h-[2.6em] flex items-start justify-center mb-3 sm:mb-4 ${i === 1 ? "flex-col" : ""}`}>
                {i === 1 ? (
                  <>
                    <span className="whitespace-nowrap">{pillar.title.split(" ").slice(0, -1).join(" ")}</span>
                    <span className="block w-full text-center">{pillar.title.split(" ").slice(-1)[0]}</span>
                  </>
                ) : i === 2 ? (
                  <span className="md:whitespace-nowrap">{pillar.title}</span>
                ) : (
                  pillar.title
                )}
              </h3>
              {/* Paragraphe : légèrement plus serré sur la 3e card si texte long pour rapprocher la hauteur totale */}
              <p
                className={`font-body text-muted-foreground flex-1 min-h-0 ${
                  i === 2 ? "text-sm sm:text-base md:text-[0.95rem] leading-snug" : "text-sm sm:text-base md:text-[0.95rem] leading-relaxed"
                }`}
              >
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
