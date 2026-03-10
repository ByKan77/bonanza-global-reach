import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
const About = () => {
  const { t } = useLanguage();
  const p = t.aboutPage;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl font-light text-foreground mb-8">
            {p.title}
          </h1>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            {p.intro}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            {p.mission}
          </p>
          <a
            href="/#contact"
            className="inline-block font-body text-sm px-6 py-3 bg-primary text-primary-foreground rounded-sm hover:brightness-110 transition-all"
          >
            {t.nav.contact}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
