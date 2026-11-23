import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("home.faq.q1"),
      answer: t("home.faq.a1"),
    },
    {
      question: t("home.faq.q2"),
      answer: t("home.faq.a2"),
    },
    {
      question: t("home.faq.q3"),
      answer: t("home.faq.a3"),
    },
    {
      question: t("home.faq.q4"),
      answer: t("home.faq.a4"),
    },
    {
      question: t("home.faq.q5"),
      answer: t("home.faq.a5"),
    },
    {
      question: t("home.faq.q6"),
      answer: t("home.faq.a6"),
    },
    {
      question: t("home.faq.q7"),
      answer: t("home.faq.a7"),
    },
    {
      question: t("home.faq.q8"),
      answer: t("home.faq.a8"),
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">{t("home.faq.title")}</h2>
          <p className="text-xl text-white/60">
            {t("home.faq.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="gradient-border rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left bg-black/20 hover:bg-black/30 transition-colors"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  {openIndex === index ? (
                    <Minus size={24} className="text-teal-400 flex-shrink-0" />
                  ) : (
                    <Plus size={24} className="text-teal-400 flex-shrink-0" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 bg-black/10">
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
