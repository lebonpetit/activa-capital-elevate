import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-acg.jpeg";

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "nav.home", to: "/" },
    { key: "nav.about", to: "/about" },
    { key: "nav.services", to: "/services" },
    { key: "nav.track", to: "/track-record" },
    { key: "nav.leadership", to: "/leadership" },
    { key: "nav.faq", to: "/faq" },
    { key: "nav.contact", to: "/contact" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    if (to.startsWith("/#")) return location.pathname === "/" && location.hash === to.slice(1);
    return location.pathname === to;
  };

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    if (to.startsWith("/#")) {
      const id = to.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/90 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-black/10"
        : "bg-transparent"
        }`}
    >
      <div className="container-narrow flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Activa Capital Group"
            className="h-14 sm:h-16 md:h-20 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ key, to }) => (
            <Link
              key={key}
              to={to}
              onClick={() => handleNavClick(to)}
              className={`relative text-sm font-medium transition-colors duration-300 tracking-wide uppercase ${isActive(to)
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t(key)}
              {isActive(to) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border/50 rounded-lg hover:border-primary/30"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <Link
            to="/contact"
            className="text-sm font-semibold bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/85 transition-all duration-300 shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25"
          >
            {t("nav.cta")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-background/95 backdrop-blur-2xl border-t border-border/30 transition-all duration-400 overflow-hidden ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map(({ key, to }) => (
            <Link
              key={key}
              to={to}
              onClick={() => handleNavClick(to)}
              className={`text-sm font-medium transition-colors uppercase tracking-wide ${isActive(to) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex gap-3 pt-4 border-t border-border/30">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="text-sm font-semibold text-muted-foreground border border-border/50 rounded-lg px-3 py-2"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold bg-primary text-primary-foreground px-6 py-2 rounded-lg"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
