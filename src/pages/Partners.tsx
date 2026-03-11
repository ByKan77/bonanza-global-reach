import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { FlaskConical, Truck, ShieldCheck } from "lucide-react";

import logoAllegiant from "@/assets/partenaires/ALLEGIANT_logo.png";
import logoAlvogen from "@/assets/partenaires/Alvogen.png";
import logoAngelini from "@/assets/partenaires/Angelini.png";
import logoChemo from "@/assets/partenaires/Chemo.png";
import logoDoppel from "@/assets/partenaires/Doppel.png";
import logoFinAid from "@/assets/partenaires/FinAidLLC.png";
import logoHerkel from "@/assets/partenaires/Herkel.png";
import logoHillestad from "@/assets/partenaires/Hillestad.png";
import logoItalfarmaco from "@/assets/partenaires/Italfarmaco.png";
import logoJelfa from "@/assets/partenaires/Jelfa.png";
import logoKevelt from "@/assets/partenaires/Kevelt.png";
import logoMedtronic from "@/assets/partenaires/Medtronic.png";
import logoMucos from "@/assets/partenaires/mucos.png";
import logoNaturProdukt from "@/assets/partenaires/NaturProdukt.png";
import logoHtn from "@/assets/partenaires/square-logo-htn.webp";
import logoTeva from "@/assets/partenaires/Teva.png";
import logoValeant from "@/assets/partenaires/Valeant.png";
import logoZentiva from "@/assets/partenaires/Zentiva_Logo.jpg";

const PARTNER_LIST = [
  { name: "Allegiant", logo: logoAllegiant, url: "http://allegiant-health.com/", category: "logistics" as const },
  { name: "Alvogen", logo: logoAlvogen, url: "https://www.alvogen.com", category: "pharma" as const },
  { name: "Angelini", logo: logoAngelini, url: "https://www.angelinipharma.com", category: "pharma" as const },
  { name: "Chemo", logo: logoChemo, url: "https://www.insudpharma.com", category: "pharma" as const },
  { name: "Doppel", logo: logoDoppel, url: "http://www.doppel.it/", category: "pharma" as const },
  { name: "FinAid", logo: logoFinAid, url: "https://www.linkedin.com/company/finaid-llc", category: "logistics" as const },
  { name: "Herkel", logo: logoHerkel, url: "https://www.royalherkel.com", category: "logistics" as const },
  { name: "Hillestad", logo: logoHillestad, url: "https://www.hillestadlabs.com", category: "compliance" as const },
  { name: "Italfarmaco", logo: logoItalfarmaco, url: "https://www.italfarmaco.com", category: "pharma" as const },
  { name: "Jelfa", logo: logoJelfa, url: "https://www.jelfa.com.pl/", category: "pharma" as const },
  { name: "Kevelt", logo: logoKevelt, url: "https://www.kevelt.ee", category: "logistics" as const },
  { name: "Medtronic", logo: logoMedtronic, url: "https://www.medtronic.com", category: "compliance" as const },
  { name: "Mucos", logo: logoMucos, url: "https://www.mucos.berlin", category: "pharma" as const },
  { name: "NaturProdukt", logo: logoNaturProdukt, url: "https://www.natur-produkt.ru", category: "pharma" as const },
  { name: "HTN", logo: logoHtn, url: "https://www.htnnaturally.com", category: "logistics" as const },
  { name: "Teva", logo: logoTeva, url: "https://www.tevapharm.com", category: "pharma" as const },
  { name: "Valeant", logo: logoValeant, url: "https://www.bauschhealth.com", category: "pharma" as const },
  { name: "Zentiva", logo: logoZentiva, url: "https://www.zentiva.com", category: "pharma" as const },
];

const HERO_BG = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80";
const WORLD_MAP_IMAGE = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const isPercent = value.endsWith("%");
  const numericStr = isPercent ? value.slice(0, -1) : value;
  const isNumeric = /^\d+$/.test(numericStr);
  const [count, setCount] = useState(0);
  const target = isNumeric ? parseInt(numericStr, 10) : 0;

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, isNumeric, target]);

  const displayValue = isNumeric ? `${count}${isPercent ? "%" : ""}` : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center rounded-xl py-6 px-4 bg-background shadow-sm border border-border/50"
    >
      <div className="font-display text-2xl md:text-3xl font-light text-foreground">
        {displayValue}
      </div>
      <div className="font-body text-sm text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}

const Partners = () => {
  const { t } = useLanguage();
  const p = t.partnersPage;
  const [activeCategory, setActiveCategory] = useState<"pharma" | "logistics" | "compliance">("pharma");
  const statsRef = useRef(null);
  const mapRef = useRef(null);
  const gridRef = useRef(null);
  const certsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const certsInView = useInView(certsRef, { once: true, margin: "-80px" });

  const categories: { id: "pharma" | "logistics" | "compliance"; label: string; Icon: typeof FlaskConical }[] = [
    { id: "pharma", label: p.categories.pharma, Icon: FlaskConical },
    { id: "logistics", label: p.categories.logistics, Icon: Truck },
    { id: "compliance", label: p.categories.compliance, Icon: ShieldCheck },
  ];

  const partnersByCategory = {
    pharma: PARTNER_LIST.filter((x) => x.category === "pharma"),
    logistics: PARTNER_LIST.filter((x) => x.category === "logistics"),
    compliance: PARTNER_LIST.filter((x) => x.category === "compliance"),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — même style que page À propos */}
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
          <p className="font-body text-white/80 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            {p.heroSubtitle}
          </p>
        </motion.div>
      </section>

      {/* Chiffres clés */}
      <section ref={statsRef} className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-12"
          >
            {p.statsSectionTitle}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {p.stats.map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Carte écosystème — éclaircie */}
      <section ref={mapRef} className="relative py-20 md:py-28 px-6 overflow-hidden bg-muted/30">
        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-14"
          >
            {p.mapTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[2/1] max-h-[360px] w-full max-w-4xl rounded-xl overflow-hidden shadow-xl border border-border/50"
          >
            <img
              src={WORLD_MAP_IMAGE}
              alt=""
              className="absolute inset-0 w-full h-full object-cover brightness-[0.55] contrast-110 grayscale"
            />
            <div className="absolute inset-0 bg-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full h-full text-primary drop-shadow-lg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="glow-partners">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="200" cy="95" r="10" fill="currentColor" filter="url(#glow-partners)" className="animate-pulse" opacity="0.95" />
                <circle cx="280" cy="85" r="6" fill="currentColor" opacity="0.85" />
                <circle cx="320" cy="100" r="6" fill="currentColor" opacity="0.85" />
                <circle cx="260" cy="120" r="6" fill="currentColor" opacity="0.85" />
                <circle cx="300" cy="130" r="6" fill="currentColor" opacity="0.85" />
                <line x1="200" y1="95" x2="280" y2="85" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                <line x1="200" y1="95" x2="320" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                <line x1="200" y1="95" x2="260" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
                <line x1="200" y1="95" x2="300" y2="130" stroke="currentColor" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
              </svg>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm text-foreground/90">
              France → Hubs Europe & Eurasie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille partenaires par catégorie */}
      <section ref={gridRef} className="py-20 md:py-28 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 border-b border-border pb-8 mb-12"
          >
            {categories.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-xl border transition-all ${
                  activeCategory === id
                    ? "border-border bg-primary/15 text-foreground shadow-sm"
                    : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </button>
            ))}
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {partnersByCategory[activeCategory].map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group block rounded-xl p-6 bg-background shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-20 w-full object-contain transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Normes — même style que section Valeurs À propos */}
      <section ref={certsRef} className="py-20 md:py-28 px-6 bg-muted/40">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={certsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl md:text-4xl font-light text-foreground text-center mb-12"
          >
            {p.certifications.title}
          </motion.h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {p.certifications.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={certsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="font-body text-muted-foreground px-5 py-3 rounded-xl bg-background shadow-sm border border-border/50"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — même style que page À propos */}
      <section className="py-16 px-6 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
            {p.ctaBanner}
          </p>
          <a
            href="/#contact"
            className="inline-block font-body text-sm px-8 py-3.5 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all"
          >
            {p.ctaButton}
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
