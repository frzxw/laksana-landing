import { motion, useScroll, useTransform } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Layers, Monitor, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export function VisualShowcase() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: t("visualShowcase.projects.project1.title"),
      category: t("visualShowcase.projects.project1.category"),
      image: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYzNDY4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("visualShowcase.projects.project2.title"),
      category: t("visualShowcase.projects.project2.category"),
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM1NDM4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: t("visualShowcase.projects.project3.title"),
      category: t("visualShowcase.projects.project3.category"),
      image: "https://images.unsplash.com/photo-1722159475082-0a2331580de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzUxNDAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Floating device frames */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Sparkles, delay: 0.1 },
            { icon: Monitor, delay: 0.2 },
            { icon: Layers, delay: 0.3 },
          ].map((item, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -30 * (index + 1)]
            );

            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="gradient-border rounded-3xl p-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="icon-frosted-lg rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon size={32} className="text-teal-400" />
                </motion.div>
                <h3 className="text-white text-xl mb-2">
                  {index === 0
                    ? t("visualShowcase.mobileFirst.title")
                    : index === 1
                      ? t("visualShowcase.webExcellence.title")
                      : t("visualShowcase.crossPlatform.title")}
                </h3>
                <p className="text-white/60">
                  {index === 0
                    ? t("visualShowcase.mobileFirst.desc")
                    : index === 1
                      ? t("visualShowcase.webExcellence.desc")
                      : t("visualShowcase.crossPlatform.desc")}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Neon-lined project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="gradient-border rounded-2xl overflow-hidden group cursor-pointer"
              role="article"
              aria-label={`View showcase: ${project.title} - ${project.category}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Handle navigation if needed
                }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6 bg-black/40 backdrop-blur-xl">
                <div className="text-teal-400 text-sm mb-2">{project.category}</div>
                <h3 className="text-white text-xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
