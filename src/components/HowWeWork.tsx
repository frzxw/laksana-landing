import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HowWeWork() {
  const { t } = useTranslation();
  
  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      title: t("home.howWeWork.step1.title"),
      description: t("home.howWeWork.step1.desc"),
    },
    {
      icon: Code,
      number: "02",
      title: t("home.howWeWork.step2.title"),
      description: t("home.howWeWork.step2.desc"),
    },
    {
      icon: Rocket,
      number: "03",
      title: t("home.howWeWork.step3.title"),
      description: t("home.howWeWork.step3.desc"),
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">{t("home.howWeWork.title")}</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("home.howWeWork.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/50 via-white/30 to-teal-400/50" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 mb-16 last:mb-0 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                }`}
              >
                <div className="gradient-border rounded-2xl p-8 inline-block group hover:scale-105 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-frosted-lg rounded-xl w-16 h-16 flex items-center justify-center transition-all duration-300">
                      <step.icon size={28} className="text-teal-400" />
                    </div>
                    <div className="text-6xl text-white/90">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-white text-2xl mb-3">{step.title}</h3>
                  <p className="text-white/60">{step.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-white neon-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
