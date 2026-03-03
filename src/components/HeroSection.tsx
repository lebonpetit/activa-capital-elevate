import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import logo from "@/assets/logo-acg.jpeg";
import heroVideo from "@/assets/finance.mp4";

const servicesEN = [
  "Structured Finance",
  "Project Financing",
  "Investment Advisory",
  "Asset-Backed Transactions",
  "International Capital Solutions",
  "Trade Finance Services",
];

const servicesFR = [
  "Finance Structurée",
  "Financement de Projets",
  "Conseil en Investissement",
  "Transactions Adossées aux Actifs",
  "Solutions de Capital International",
  "Trade Finance Services",
];

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const services = lang === "fr" ? servicesFR : servicesEN;

  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentService = services[serviceIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayText.length < currentService.length) {
        setDisplayText(currentService.slice(0, displayText.length + 1));
      } else {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        setDisplayText(currentService.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setServiceIndex((prev) => (prev + 1) % services.length);
        return;
      }
    }
  }, [displayText, isDeleting, currentService, services.length]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  // Reset when language changes
  useEffect(() => {
    setServiceIndex(0);
    setDisplayText("");
    setIsDeleting(false);
  }, [lang]);

  const fixedText = lang === "fr"
    ? "Votre partenaire de confiance en"
    : "Your trusted partner in";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 container-narrow px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 pt-20 sm:pt-24 pb-16 sm:pb-20 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo Integration */}
          <div className="relative inline-block">
            <img
              src={logo}
              alt="Activa Capital Group"
              className="relative h-16 sm:h-24 md:h-32 w-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Fixed text */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold leading-tight mb-3 sm:mb-4 text-white drop-shadow-lg tracking-wide">
            {fixedText}
          </h2>

          {/* Typewriter service name */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-sans font-bold leading-tight mb-8 sm:mb-12 text-[#c59c5d] drop-shadow-lg tracking-wide min-h-[1.2em] break-words w-full">
            {displayText}
            <span className="inline-block w-[3px] h-[0.85em] bg-[#c59c5d] ml-1 align-middle animate-pulse" />
          </h2>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto px-4 sm:px-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#c59c5d] text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#b08b53] transition-colors duration-300 shadow-lg"
            >
              {t("hero.cta1")}
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center border-2 border-[#c59c5d] text-[#c59c5d] px-6 sm:px-8 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-[#c59c5d]/10 transition-colors duration-300"
            >
              {t("hero.cta2")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

