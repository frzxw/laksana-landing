import { motion } from "framer-motion";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function TermsPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="icon-frosted-lg w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow"
          >
            <Scale size={40} className="text-teal-400" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("terms.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("terms.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-6"
          >
            {t("terms.hero.subtitle")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/50"
          >
            {t("terms.hero.updated")}: November 20, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12 space-y-12"
          >
            {/* Section 1 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <CheckCircle size={24} className="text-teal-400" />
                {t("terms.sections.acceptance.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.acceptance.p1")}
              </p>
              <p className="text-white/70 leading-relaxed">
                {t("terms.sections.acceptance.p2")}
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <FileText size={24} className="text-teal-400" />
                {t("terms.sections.services.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.services.intro")}
              </p>
              <ul className="space-y-2">
                {[t("terms.sections.services.item1"), t("terms.sections.services.item2"), t("terms.sections.services.item3"), t("terms.sections.services.item4"), t("terms.sections.services.item5")].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <Scale size={24} className="text-teal-400" />
                {t("terms.sections.obligations.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.obligations.intro")}
              </p>
              <ul className="space-y-2">
                {[t("terms.sections.obligations.item1"), t("terms.sections.obligations.item2"), t("terms.sections.obligations.item3"), t("terms.sections.obligations.item4"), t("terms.sections.obligations.item5")].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <FileText size={24} className="text-teal-400" />
                {t("terms.sections.ip.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.ip.intro")}
              </p>
              <ul className="space-y-2">
                {[t("terms.sections.ip.item1"), t("terms.sections.ip.item2"), t("terms.sections.ip.item3")].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2" />
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <AlertCircle size={24} className="text-teal-400" />
                {t("terms.sections.liability.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.liability.p1")}
              </p>
              <p className="text-white/70 leading-relaxed">
                {t("terms.sections.liability.p2")}
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <FileText size={24} className="text-teal-400" />
                {t("terms.sections.termination.title")}
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                {t("terms.sections.termination.p1")}
              </p>
              <p className="text-white/70 leading-relaxed">
                {t("terms.sections.termination.p2")}
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-white text-2xl mb-4 flex items-center gap-3">
                <Scale size={24} className="text-teal-400" />
                {t("terms.sections.law.title")}
              </h2>
              <p className="text-white/70 leading-relaxed">
                {t("terms.sections.law.p1")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl text-white mb-4">{t("terms.cta.title")}</h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                {t("terms.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium"
              >
                {t("terms.cta.button")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
