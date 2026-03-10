import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [sector, setSector] = useState("pharma");

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
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Let's Build Your <span className="text-gradient-gold">Supply Chain</span>
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
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Acme Corp."
              />
            </div>
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-2 block">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label className="font-body text-sm text-muted-foreground mb-3 block">
              Sector
            </label>
            <div className="flex gap-3">
              {[
                { value: "pharma", label: "Pharmaceutical" },
                { value: "other", label: "Other Industry" },
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
            <label className="font-body text-sm text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your logistics needs..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground rounded-sm font-body text-sm hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.3)] hover:brightness-110 transition-all duration-300"
          >
            Request a Quote
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
