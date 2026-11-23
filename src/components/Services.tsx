import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Smartphone,
  Layout,
  Package,
  Calendar,
  ShoppingCart,
  Briefcase,
} from "lucide-react";

export function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Smartphone,
      title: t("home.services.mobile.title"),
      description: t("home.services.mobile.desc"),
    },
    {
      icon: Layout,
      title: t("home.services.landing.title"),
      description: t("home.services.landing.desc"),
    },
    {
      icon: Package,
      title: t("home.services.inventory.title"),
      description: t("home.services.inventory.desc"),
    },
    {
      icon: Calendar,
      title: t("home.services.booking.title"),
      description: t("home.services.booking.desc"),
    },
    {
      icon: ShoppingCart,
      title: t("home.services.pos.title"),
      description: t("home.services.pos.desc"),
    },
    {
      icon: Briefcase,
      title: t("home.services.web.title"),
      description: t("home.services.web.desc"),
    },
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">{t("home.services.title")}</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("home.services.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="gradient-border rounded-3xl p-8 group cursor-pointer"
            >
              <motion.div 
                className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <service.icon size={32} className="text-teal-400" />
              </motion.div>
              <h3 className="text-white text-2xl mb-3">{service.title}</h3>
              <p className="text-white/60 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
