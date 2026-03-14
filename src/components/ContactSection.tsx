import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;
const CONTACT_EMAIL = "info@bonanza-europe.com";

const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const { t } = useLanguage();
  const c = t.contact;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_FORM_ID) {
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          company,
          email,
          message,
          _replyto: email,
          _subject: `Contact - ${company || "Site web"}`,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSuccess(true);
      setFullName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="font-body text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase text-muted-foreground mb-3 sm:mb-4">
            {c.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light max-w-xl mx-auto">
            {c.titleHighlight ? (
              <> {c.title} <span className="text-gradient-gold">{c.titleHighlight}</span>{c.titleSuffix} </>
            ) : (
              c.title
            )}
          </h2>
        </motion.div>

        {success ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg p-5 sm:p-6 md:p-12 text-center bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/50"
          >
            <p className="font-body text-sm sm:text-base text-foreground mb-4">{c.successMessage}</p>
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="text-sm text-primary hover:underline"
            >
              {c.submitAgain}
            </button>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-lg p-5 sm:p-6 md:p-12 space-y-5 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="rounded-sm bg-destructive/10 border border-destructive/30 px-4 py-3 font-body text-sm text-destructive">
                {c.errorMessage}{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                  {CONTACT_EMAIL}
                </a>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">{c.fullName}</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={c.fullNamePlaceholder}
                />
              </div>
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">{c.company}</label>
                <input
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder={c.companyPlaceholder}
                />
              </div>
            </div>

            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">{c.email}</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder={c.emailPlaceholder}
              />
            </div>

            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">{c.message}</label>
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-muted border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder={c.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-primary text-primary-foreground rounded-sm font-body text-sm hover:shadow-[0_4px_16px_hsla(40,56%,52%,0.3)] hover:brightness-110 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "..." : c.submit}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
