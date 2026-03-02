import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const useCountUp = (target: number, inView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return count;
};

const TrackRecordSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 1.2, prefix: "$", suffix: "B", label: t("track.capital"), target: 12 },
    { value: 85, prefix: "", suffix: "", label: t("track.projects"), target: 85 },
    { value: 24, prefix: "", suffix: "", label: t("track.countries"), target: 24 },
    { value: 15, prefix: "", suffix: "+", label: t("track.expertise"), target: 15 },
  ];

  return (
    <section id="track-record" className="section-padding" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="premium-divider mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-5">
            {t("track.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("track.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <TrackCard key={i} {...stat} inView={inView} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TrackCard = ({
  prefix, suffix, label, target, inView, delay,
}: {
  prefix: string; suffix: string; label: string; target: number; inView: boolean; delay: number;
}) => {
  const count = useCountUp(target, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-8 sm:p-10 text-center group hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
    >
      <p className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold blue-gradient-text mb-3">
        {prefix}{target === 12 ? (count / 10).toFixed(1) : count}{suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-[0.15em] font-medium">
        {label}
      </p>
    </motion.div>
  );
};

export default TrackRecordSection;
