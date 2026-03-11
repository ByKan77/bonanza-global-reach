import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Crosshair, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80";
const WAREHOUSE_IMG =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80";
const TEAM_PHOTOS = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
];

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const About = () => {
  const { t } = useLanguage();
  const p = t.aboutPage;
  const carouselRef = useRef<HTMLDivElement>(null);

  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const historyInView = useInView(historyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-80px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-36 md:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-accent/80 backdrop-blur-[2px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight">
            {p.heroTitle}
          </h1>
          <p className="font-body text-white/80 mt-6 text-lg max-w-2xl mx-auto">
            {p.trust}
          </p>
        </motion.div>
      </section>

      {/* Notre Histoire */}
      <section
        ref={historyRef}
        className="py-20 md:py-28 px-6 bg-background"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={historyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
                {p.history.title}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {p.history.p1}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {p.history.p2}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-muted"
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

      {/* Section Valeurs */}
      <section
        ref={valuesRef}
        className="py-20 md:py-28 px-6 bg-muted/40"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-16"
          >
            {p.values.sectionTitle}
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                key: "integrity" as const,
                Icon: Shield,
                title: p.values.integrity.title,
                desc: p.values.integrity.desc,
              },
              {
                key: "precision" as const,
                Icon: Crosshair,
                title: p.values.precision.title,
                desc: p.values.precision.desc,
              },
              {
                key: "reactivity" as const,
                Icon: Zap,
                title: p.values.reactivity.title,
                desc: p.values.reactivity.desc,
              },
            ].map(({ key, Icon, title, desc }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-background rounded-xl p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Carousel */}
      <section
        ref={teamRef}
        className="py-20 md:py-28 px-6 bg-background overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-14"
          >
            {p.team.sectionTitle}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:overflow-visible md:flex-wrap md:justify-center"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "hsl(var(--primary)) transparent",
            }}
          >
            {p.team.members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="bg-muted/50 rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={TEAM_PHOTOS[i]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="font-body text-sm text-primary font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-3 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <motion.div
          {...fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-muted-foreground mb-8">
            {p.intro}
          </p>
          <a
            href="/#contact"
            className="inline-block font-body text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all"
          >
            {t.nav.contact}
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
