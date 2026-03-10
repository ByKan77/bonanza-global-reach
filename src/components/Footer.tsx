import logo from "@/assets/logo-bonanza.png";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="Bonanza Europe" className="h-8 w-auto" />
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Bonanza International. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
