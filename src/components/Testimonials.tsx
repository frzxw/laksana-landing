import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      name: t("home.testimonials.author1"),
      role: t("home.testimonials.role1"),
      content: t("home.testimonials.quote1"),
      rating: 5,
    },
    {
      name: t("home.testimonials.author2"),
      role: t("home.testimonials.role2"),
      content: t("home.testimonials.quote2"),
      rating: 5,
    },
    {
      name: t("home.testimonials.author3"),
      role: t("home.testimonials.role3"),
      content: t("home.testimonials.quote3"),
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">{t("home.testimonials.title")}</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("home.testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="gradient-border rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-teal-400/20" size={40} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <Star
                      size={16}
                      className="fill-teal-400 text-teal-400"
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <div className="text-white">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
