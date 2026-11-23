import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
      {/* Ambient glow effects with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={16} className="text-teal-400" />
          </motion.div>
          <span className="text-white/80 text-sm">{t("home.hero.clients")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
          style={{ contentVisibility: 'auto' }}
        >
          {t("home.hero.title1")}
          <br />
          <motion.span
            className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent neon-text inline-block"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {t("home.hero.title2")}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto tracking-wide"
        >
          {t("home.hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton
            onClick={() => onNavigate && onNavigate("contact")}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 neon-glow flex items-center gap-2 font-medium"
            aria-label="Start your project - Contact us now"
          >
            {t("home.hero.cta")}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </MagneticButton>
          <MagneticButton
            onClick={() => onNavigate && onNavigate("work")}
            className="px-8 py-4 rounded-full glass-strong text-white"
            aria-label="View our case studies and portfolio"
          >
            {t("home.work.viewCase")}
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
        >
          {[
            { value: t("home.hero.stat1Value"), label: t("home.hero.stat1Label") },
            { value: t("home.hero.stat2Value"), label: t("home.hero.stat2Label") },
            { value: t("home.hero.stat3Value"), label: t("home.hero.stat3Label") },
            { value: t("home.hero.stat4Value"), label: t("home.hero.stat4Label") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="text-3xl md:text-4xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
