import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 bg-secondary/20">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <h3 className="text-lg font-serif font-semibold mb-5 blue-gradient-text">
              Activa Capital Group
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              54-56 Avenue Hoche<br />
              75008 Paris, France
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              +33 7 71 49 03 71
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              contact@activaacapitalgroup.eu
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5 text-primary">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("nav.home")}
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("nav.about")}
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("nav.services")}
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] mb-5 text-primary">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("footer.privacy")}
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("footer.terms")}
              </Link>
              <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                {t("footer.cookies")}
              </Link>
            </nav>
          </div>
        </div>
        <div className="subtle-gradient-line mt-14" />
        <p className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} Activa Capital Group Ltd. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
