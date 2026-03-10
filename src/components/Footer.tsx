const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-sm font-light tracking-[0.3em] text-gradient-gold">
        BONANZA
      </span>
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bonanza International. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
