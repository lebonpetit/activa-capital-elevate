import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

import ceoPic from "@/assets/team-ceo.png";
import elenaPic from "@/assets/team-elena.png";
import rahulPic from "@/assets/team-rahul.png";
import isabellaPic from "@/assets/team-isabella.png";
import alexanderPic from "@/assets/team-alexander.png";
import mariaPic from "@/assets/team-maria.png";

const team = [
  { name: "James Peter Anderson", role: { en: "Chief Executive Officer", fr: "Directeur General" }, img: ceoPic },
  { name: "Elena Marcus", role: { en: "Managing Director", fr: "Directrice Generale" }, img: elenaPic },
  { name: "Rahul Pradel", role: { en: "Head of Structured Finance", fr: "Responsable Finance Structuree" }, img: rahulPic },
  { name: "Isabella Chen", role: { en: "Director, Investment Advisory", fr: "Directrice, Conseil en Investissement" }, img: isabellaPic },
  { name: "Alexander", role: { en: "Head of Asset-Backed Transactions", fr: "Responsable Transactions Adossees aux Actifs" }, img: alexanderPic },
  { name: "Maria Garcia", role: { en: "Director, International Capital Solutions", fr: "Directrice, Solutions de Capital International" }, img: mariaPic },
];

const LeadershipSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="leadership" className="section-padding bg-secondary/15">
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
            {t("leadership.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("leadership.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-9 text-center group"
            >
              <div className="w-32 h-32 mx-auto mb-7 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-primary/40 transition-all duration-500 shadow-lg shadow-black/20 group-hover:shadow-primary/10">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="font-semibold text-base mb-1.5 font-sans">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role[lang]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
