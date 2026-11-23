import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { useTranslation } from "react-i18next";

interface CTABannerProps {
  onNavigate?: (page: string) => void;
}

export function CTABanner({ onNavigate }: CTABannerProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <motion.div
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/15 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="gradient-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} className="text-teal-400" />
              </motion.div>
              <span className="text-white/80 text-sm">Limited slots available</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl text-white mb-6">
              {t("home.cta.title")}
            </h2>

            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              {t("home.cta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton 
                onClick={() => onNavigate && onNavigate("contact")}
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 neon-glow flex items-center justify-center gap-2 font-medium"
              >
                {t("home.cta.button")}
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
              >
                {t("home.hero.viewWork")}
              </MagneticButton>
            </div>

            <p className="text-white/40 text-sm mt-8">
              {t("home.hero.clients")} · {t("home.hero.clientValue")} · {t("home.hero.satisfaction")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
