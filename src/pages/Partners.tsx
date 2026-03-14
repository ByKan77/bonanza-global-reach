import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

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
import logoBonanza from "@/assets/logo_Bonanza/logoBonanzaOriginal.png";

const BONANZA_AM = {
  name: "Bonanza",
  url: "https://www.bonanza.am",
  logo: logoBonanza,
};

const OTHER_PARTNERS = [
  { name: "Allegiant", logo: logoAllegiant, url: "http://allegiant-health.com/" },
  { name: "Alvogen", logo: logoAlvogen, url: "https://www.alvogen.com" },
  { name: "Angelini", logo: logoAngelini, url: "https://www.angelinipharma.com" },
  { name: "Chemo", logo: logoChemo, url: "https://www.insudpharma.com" },
  { name: "Doppel", logo: logoDoppel, url: "http://www.doppel.it/" },
  { name: "FinAid", logo: logoFinAid, url: "https://www.linkedin.com/company/finaid-llc" },
  { name: "Herkel", logo: logoHerkel, url: "https://www.royalherkel.com" },
  { name: "Hillestad", logo: logoHillestad, url: "https://www.hillestadlabs.com" },
  { name: "Italfarmaco", logo: logoItalfarmaco, url: "https://www.italfarmaco.com" },
  { name: "Jelfa", logo: logoJelfa, url: "https://www.jelfa.com.pl/" },
  { name: "Kevelt", logo: logoKevelt, url: "https://www.kevelt.ee" },
  { name: "Medtronic", logo: logoMedtronic, url: "https://www.medtronic.com" },
  { name: "Mucos", logo: logoMucos, url: "https://www.mucos.berlin" },
  { name: "NaturProdukt", logo: logoNaturProdukt, url: "https://www.natur-produkt.ru" },
  { name: "HTN", logo: logoHtn, url: "https://www.htnnaturally.com" },
  { name: "Teva", logo: logoTeva, url: "https://www.tevapharm.com" },
  { name: "Valeant", logo: logoValeant, url: "https://www.bauschhealth.com" },
  { name: "Zentiva", logo: logoZentiva, url: "https://www.zentiva.com" },
];

// Bannière hero Partenaires (image + dégradé de secours si l'image ne charge pas)
const HERO_BG =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80&fit=crop";
const WORLD_MAP_IMAGE = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80";

const MAP_POINTS = [
  { id: "france", x: 195, y: 92, r: 12, label: "France", main: true },
  { id: "georgia", x: 272, y: 98, r: 8, label: "Caucase" },
  { id: "armenia", x: 282, y: 95, r: 7, label: "Arménie" },
  { id: "turkey", x: 258, y: 88, r: 7, label: "Turquie" },
  { id: "eu1", x: 185, y: 78, r: 6, label: "EU Nord" },
  { id: "eu2", x: 175, y: 100, r: 6, label: "EU Ouest" },
  { id: "eu3", x: 218, y: 85, r: 6, label: "EU Est" },
  { id: "russia", x: 295, y: 75, r: 7, label: "Russie" },
  { id: "kazakhstan", x: 318, y: 88, r: 6, label: "Asie centrale" },
];

const Partners = () => {
  const { t } = useLanguage();
  const p = t.partnersPage;
  const mapRef = useRef(null);
  const gridRef = useRef(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const showStats = p.stats && p.stats.length > 0;
  const showCerts = p.certifications?.items?.length > 0;
  const showCta = p.ctaBanner && p.ctaButton;

  const introParagraphs = p.intro ? p.intro.split("\n\n").filter(Boolean) : [];
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-12 bg-gradient-to-br from-accent via-accent/95 to-primary/20">
        {!heroImageError && (
          <img
            src={HERO_BG}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={() => setHeroImageError(true)}
          />
        )}
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
          {p.heroSubtitle && (
            <p className="font-body text-white/80 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {p.heroSubtitle}
            </p>
          )}
        </motion.div>
      </section>

      <section ref={mapRef} className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-muted/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[2/1] md:aspect-[4/3] w-full md:flex-1 min-h-[280px] rounded-xl overflow-hidden shadow-xl border border-border/50 flex-shrink-0"
          >
            <img
              src={WORLD_MAP_IMAGE}
              alt=""
              className="absolute inset-0 w-full h-full object-cover brightness-[0.5] contrast-110 grayscale"
            />
            <div className="absolute inset-0 bg-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full h-full text-primary drop-shadow-lg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="glow-partners">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {MAP_POINTS.filter((pt) => !pt.main).map((pt) => (
                  <g key={pt.id}>
                    <line
                      x1={MAP_POINTS.find((m) => m.main)!.x}
                      y1={MAP_POINTS.find((m) => m.main)!.y}
                      x2={pt.x}
                      y2={pt.y}
                      stroke="currentColor"
                      strokeWidth="1.2"
                      opacity="0.5"
                      strokeLinecap="round"
                    />
                    <circle cx={pt.x} cy={pt.y} r={pt.r} fill="currentColor" opacity="0.9" />
                  </g>
                ))}
                <circle
                  cx={MAP_POINTS.find((m) => m.main)!.x}
                  cy={MAP_POINTS.find((m) => m.main)!.y}
                  r={MAP_POINTS.find((m) => m.main)!.r}
                  fill="currentColor"
                  filter="url(#glow-partners)"
                  className="animate-pulse"
                  opacity="0.95"
                />
                {MAP_POINTS.map((pt) => (
                  <text
                    key={pt.id}
                    x={pt.x}
                    y={pt.y + (pt.main ? -18 : 22)}
                    textAnchor="middle"
                    className="fill-foreground/90 text-[10px] font-body"
                  >
                    {pt.label}
                  </text>
                ))}
              </svg>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm text-foreground/90">
              France → Europe & Eurasie
            </p>
          </motion.div>
          {introParagraphs.length > 0 && (
            <div className="mt-8 sm:mt-10 md:mt-0 md:flex-1 space-y-3 sm:space-y-4 flex flex-col justify-center text-center md:text-left">
              {introParagraphs.map((paragraph, i) => (
                <p key={i} className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      <section ref={gridRef} className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-10 sm:mb-14 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground">
              {p.title}
            </h2>
            <div className="mt-2 sm:mt-3 w-12 sm:w-16 h-0.5 bg-primary rounded-full" aria-hidden />
          </div>
          <div className="mb-10 sm:mb-14">
            <a
              href={BONANZA_AM.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center rounded-xl p-4 sm:p-5 md:p-6 bg-muted/50 border-2 border-primary/30 hover:border-primary/60 hover:shadow-lg transition-all duration-300 w-full max-w-[200px] sm:w-fit sm:max-w-none mx-auto"
            >
              {BONANZA_AM.logo ? (
                <img src={BONANZA_AM.logo} alt={BONANZA_AM.name} className="max-h-14 sm:max-h-16 w-full max-w-[120px] sm:max-w-[140px] object-contain" />
              ) : (
                <span className="font-display text-xl sm:text-2xl md:text-3xl font-light text-foreground text-gradient-gold">
                  {BONANZA_AM.name}
                </span>
              )}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {OTHER_PARTNERS.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group block rounded-xl p-4 sm:p-5 md:p-6 bg-background shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 sm:max-h-16 md:max-h-20 w-full object-contain transition-all duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {showCerts && (
        <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 bg-muted/40">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-foreground text-center mb-8 sm:mb-12"
            >
              {p.certifications.title}
            </motion.h2>
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {p.certifications.items.map((item: string, i: number) => (
                <li key={i} className="font-body text-xs sm:text-sm text-muted-foreground px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-background shadow-sm border border-border/50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {showCta && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-muted/30">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-display text-xl sm:text-2xl md:text-3xl font-light text-foreground mb-6 sm:mb-8">{p.ctaBanner}</p>
            <a
              href="/#contact"
              className="inline-block font-body text-sm px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all"
            >
              {p.ctaButton}
            </a>
          </motion.div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Partners;
