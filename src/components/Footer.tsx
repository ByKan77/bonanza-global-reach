import logo from "@/assets/logo-bonanza.png";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-accent text-accent-foreground">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Bonanza Europe" className="h-8 w-auto brightness-0 invert" />
      <p className="font-body text-xs text-accent-foreground/50">
        © {new Date().getFullYear()} Bonanza Europe. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
