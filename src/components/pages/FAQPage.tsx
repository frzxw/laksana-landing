import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageCircle, Mail, Phone, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    {
      title: t("faq.general.title"),
      faqs: [
        {
          question: t("faq.general.q1"),
          answer: t("faq.general.a1"),
        },
        {
          question: t("faq.general.q2"),
          answer: t("faq.general.a2"),
        },
        {
          question: t("faq.general.q3"),
          answer: t("faq.general.a3"),
        },
      ],
    },
    {
      title: t("faq.process.title"),
      faqs: [
        {
          question: t("faq.process.q1"),
          answer: t("faq.process.a1"),
        },
        {
          question: t("faq.process.q2"),
          answer: t("faq.process.a2"),
        },
        {
          question: t("faq.process.q3"),
          answer: t("faq.process.a3"),
        },
        {
          question: t("faq.process.q4"),
          answer: t("faq.process.a4"),
        },
      ],
    },
    {
      title: t("faq.technical.title"),
      faqs: [
        {
          question: t("faq.technical.q1"),
          answer: t("faq.technical.a1"),
        },
        {
          question: t("faq.technical.q2"),
          answer: t("faq.technical.a2"),
        },
        {
          question: t("faq.technical.q3"),
          answer: t("faq.technical.a3"),
        },
        {
          question: t("faq.technical.q4"),
          answer: t("faq.technical.a4"),
        },
      ],
    },
    {
      title: t("faq.pricingSupport.title"),
      faqs: [
        {
          question: t("faq.pricingSupport.q1"),
          answer: t("faq.pricingSupport.a1"),
        },
        {
          question: t("faq.pricingSupport.q2"),
          answer: t("faq.pricingSupport.a2"),
        },
        {
          question: t("faq.pricingSupport.q3"),
          answer: t("faq.pricingSupport.a3"),
        },
        {
          question: t("faq.pricingSupport.q4"),
          answer: t("faq.pricingSupport.a4"),
        },
      ],
    },
    {
      title: t("faq.gettingStarted.title"),
      faqs: [
        {
          question: t("faq.gettingStarted.q1"),
          answer: t("faq.gettingStarted.a1"),
        },
        {
          question: t("faq.gettingStarted.q2"),
          answer: t("faq.gettingStarted.a2"),
        },
        {
          question: t("faq.gettingStarted.q3"),
          answer: t("faq.gettingStarted.a3"),
        },
        {
          question: t("faq.gettingStarted.q4"),
          answer: t("faq.gettingStarted.a4"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("faq.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("faq.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            {t("faq.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
          >
            <MessageCircle size={16} className="text-teal-400" />
            <span className="text-white/80 text-sm">{t("faq.hero.badge")}</span>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto space-y-16">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-white mb-8"
              >
                {category.title}
              </motion.h2>

              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = catIndex * 100 + faqIndex;
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: faqIndex * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="gradient-border rounded-2xl overflow-hidden"
                    >
                      <motion.button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full p-6 flex items-center justify-between text-left bg-black/20 hover:bg-black/30 transition-colors"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white text-lg pr-8">{faq.question}</span>
                        <motion.div
                          animate={{ rotate: openIndex === globalIndex ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        >
                          {openIndex === globalIndex ? (
                            <Minus size={24} className="text-teal-400 flex-shrink-0" />
                          ) : (
                            <Plus size={24} className="text-teal-400 flex-shrink-0" />
                          )}
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openIndex === globalIndex && (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-white mb-8 text-center"
          >
            {t("faq.contact.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MessageCircle,
                title: t("faq.contact.chat.title"),
                description: t("faq.contact.chat.desc"),
                action: t("faq.contact.chat.action"),
              },
              {
                icon: Mail,
                title: t("faq.contact.email.title"),
                description: t("faq.contact.email.desc"),
                action: t("faq.contact.email.action"),
              },
              {
                icon: Phone,
                title: t("faq.contact.phone.title"),
                description: t("faq.contact.phone.desc"),
                action: t("faq.contact.phone.action"),
              },
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="gradient-border rounded-2xl p-8 text-center group cursor-pointer"
              >
                <motion.div
                  className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-all duration-300"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                >
                  <option.icon size={28} className="text-teal-400" />
                </motion.div>
                <h3 className="text-white text-xl mb-2">{option.title}</h3>
                <p className="text-white/60 mb-4">{option.description}</p>
                <span className="text-teal-400 text-sm">{option.action} →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              <h2 className="text-3xl md:text-5xl text-white mb-4">{t("faq.cta.title")}</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("faq.cta.subtitle")}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium inline-flex items-center gap-2 group"
              >
                {t("faq.cta.button")}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
