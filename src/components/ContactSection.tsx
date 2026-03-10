import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const [sector, setSector] = useState("pharma");
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section id="contact" className="relative py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {c.eyebrow}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            {c.title} <span className="text-gradient-gold">{c.titleHighlight}</span>{c.titleSuffix}
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-lg p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">{c.fullName}</label>
              <input
                type="text"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder={c.fullNamePlaceholder}
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">{c.company}</label>
              <input
                type="text"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder={c.companyPlaceholder}
              />
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">{c.email}</label>
            <input
              type="email"
              className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder={c.emailPlaceholder}
            />
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-3 block">{c.sector}</label>
            <div className="flex gap-3">
              {[
                { value: "pharma", label: c.pharmaceutical },
                { value: "other", label: c.otherIndustry },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setSector(opt.value)}
                  className={`px-5 py-2.5 rounded-sm font-body text-sm transition-all duration-300 border ${
                    sector === opt.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted text-muted-foreground border-border hover:border-foreground/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">{c.message}</label>
            <textarea
              rows={4}
              className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder={c.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground rounded-sm font-body text-sm hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.3)] hover:brightness-110 transition-all duration-300"
          >
            {c.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
