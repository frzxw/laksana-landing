import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Users, Zap, Award, Globe, Heart, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useRef } from "react";
import { MagneticButton } from "../MagneticButton";
import { useTranslation } from "react-i18next";

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const values = [
    {
      icon: Target,
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.desc"),
    },
    {
      icon: Users,
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.desc"),
    },
    {
      icon: Zap,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.desc"),
    },
    {
      icon: Heart,
      title: t("about.values.integrity.title"),
      description: t("about.values.integrity.desc"),
    },
  ];

  const team = [
    {
      name: t("about.team.founder.name"),
      role: t("about.team.founder.role"),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: t("about.team.founder.bio"),
    },
    {
      name: t("about.team.cofounder1.name"),
      role: t("about.team.cofounder1.role"),
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: t("about.team.cofounder1.bio"),
    },
    {
      name: t("about.team.cofounder2.name"),
      role: t("about.team.cofounder2.role"),
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400",
      bio: t("about.team.cofounder2.bio"),
    },
  ];

  const stats = [
    { value: t("about.stats.founded"), label: t("about.stats.foundedLabel") },
    { value: t("about.stats.projects"), label: t("about.stats.projectsLabel") },
    { value: t("about.stats.team"), label: t("about.stats.teamLabel") },
    { value: t("about.stats.countries"), label: t("about.stats.countriesLabel") },
  ];

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/15 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
          >
            {t("about.hero.title1")}
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-200 to-white bg-clip-text text-transparent">
              {t("about.hero.title2")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-xl text-white/60 mb-12 max-w-2xl mx-auto"
          >
            {t("about.hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="gradient-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">{t("about.story.title")}</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                {t("about.story.p1")}
              </p>
              <p>
                {t("about.story.p2")}
              </p>
              <p>
                {t("about.story.p3")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 mb-32 relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/8 rounded-full blur-[120px] pointer-events-none" 
        />

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t("about.values.title")}</h2>
            <p className="text-xl text-white/60">{t("about.values.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="gradient-border rounded-2xl p-8"
              >
                <motion.div 
                  className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <value.icon size={28} className="text-teal-400" />
                </motion.div>
                <h3 className="text-white text-2xl mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t("about.team.title")}</h2>
            <p className="text-xl text-white/60">{t("about.team.subtitle")}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="gradient-border rounded-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-xl">
                  <h3 className="text-white text-xl mb-1">{member.name}</h3>
                  <p className="text-teal-400 text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm">{member.bio}</p>
                </div>
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
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="gradient-border rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-white/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl text-white mb-4">{t("about.cta.title")}</h2>
              <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
                {t("about.cta.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton 
                  onClick={() => onNavigate && onNavigate("careers")}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-400 to-white text-gray-900 font-medium neon-glow"
                >
                  {t("about.cta.careers")}
                </MagneticButton>
                <MagneticButton 
                  onClick={() => onNavigate && onNavigate("contact")}
                  className="px-8 py-4 rounded-full glass-strong text-white"
                >
                  {t("about.cta.partner")}
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
