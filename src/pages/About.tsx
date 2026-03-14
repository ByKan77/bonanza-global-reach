import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Eye, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80";
const WAREHOUSE_IMG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80";
const TEAM_IMG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

const TEAM_PHOTOS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
];

const About = () => {
  const { t } = useLanguage();
  const p = t.aboutPage;
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  const valuesList = "presence" in p.values
    ? [
        { Icon: MapPin, title: p.values.presence.title, desc: p.values.presence.desc },
        { Icon: Eye, title: p.values.transparency.title, desc: p.values.transparency.desc },
        { Icon: Clock, title: p.values.reliability.title, desc: p.values.reliability.desc },
      ]
    : [
        { Icon: MapPin, title: p.values.integrity.title, desc: p.values.integrity.desc },
        { Icon: Eye, title: p.values.precision.title, desc: p.values.precision.desc },
        { Icon: Clock, title: p.values.reactivity.title, desc: p.values.reactivity.desc },
      ];

  const hasTeamText = "sectionText" in p.team && p.team.sectionText;
  const hasTeamMembers = p.team.members && p.team.members.length > 0;
  const conclusion = "conclusion" in p ? p.conclusion : null;
  const intro = "intro" in p ? p.intro : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-12">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-accent/80 backdrop-blur-[2px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            {p.heroTitle}
          </h1>
        </motion.div>
      </section>

      {/* Histoire */}
      <section ref={historyRef} className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          >
            <div className="text-center md:text-left order-2 md:order-1">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-5 sm:mb-8">
                {p.history.title}
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                {p.history.p1}
              </p>
              {"p2" in p.history && p.history.p2 && (
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 sm:mt-6">
                  {p.history.p2}
                </p>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-muted order-1 md:order-2"
            >
              <img
                src={WAREHOUSE_IMG}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-accent/20" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valeurs */}
      <section ref={valuesRef} className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground text-center mb-10 sm:mb-16"
          >
            {p.values.sectionTitle}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {valuesList.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-background rounded-xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center md:text-left"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 sm:mb-6 mx-auto md:mx-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-medium text-foreground mb-2 sm:mb-3">
                  {title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-xs sm:text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe, même mise en page que Notre histoire : texte à gauche, image à droite */}
      <section ref={teamRef} className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={teamInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-muted order-1 md:order-1"
            >
              <img
                src={TEAM_IMG}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-accent/20" />
            </motion.div>
            <div className="order-2 md:order-2 text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground mb-5 sm:mb-8">
                {p.team.sectionTitle}
              </h2>
              {hasTeamText && (
                <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {p.team.sectionText}
                </p>
              )}
              {!hasTeamText && hasTeamMembers && (
                <div className="flex flex-wrap justify-center md:justify-start gap-5 sm:gap-8 mt-6">
                  {p.team.members.map((member, i) => (
                    <div key={member.name} className="w-full max-w-[280px] bg-muted/50 rounded-xl overflow-hidden border border-border/50">
                      <div className="aspect-square relative">
                        <img src={TEAM_PHOTOS[i]} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-display text-lg font-medium text-foreground">{member.name}</h3>
                        <p className="font-body text-sm text-primary font-medium mt-1">{member.role}</p>
                        <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conclusion / CTA, sans bouton contact */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-sm sm:text-base text-muted-foreground">
            {conclusion || intro || ""}
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
