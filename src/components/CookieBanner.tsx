import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookieBanner = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (type: string) => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="container-narrow glass-card p-4 sm:p-6 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-between border-primary/15">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          {t("cookie.text")}
        </p>
        <div className="flex flex-wrap justify-center gap-2 shrink-0">
          <button
            onClick={() => handleConsent("rejected")}
            className="text-xs font-medium px-4 py-2.5 border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
          >
            {t("cookie.reject")}
          </button>
          <button
            onClick={() => handleConsent("custom")}
            className="text-xs font-medium px-4 py-2.5 border border-border/50 rounded-lg text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
          >
            {t("cookie.customize")}
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="text-xs font-semibold px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/85 transition-all duration-300 shadow-md shadow-primary/15"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
