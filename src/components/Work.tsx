import { motion, useScroll, useTransform } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

interface WorkProps {
  onNavigate?: (page: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const projects = [
    {
      title: t("home.work.projects.project1.title"),
      category: t("home.work.projects.project1.category"),
      description: t("home.work.projects.project1.description"),
      image: "https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzYzNDY4ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "AWS", "Real-time"],
    },
    {
      title: t("home.work.projects.project2.title"),
      category: t("home.work.projects.project2.category"),
      description: t("home.work.projects.project2.description"),
      image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM1NDM4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "PostgreSQL", "Analytics"],
    },
    {
      title: t("home.work.projects.project3.title"),
      category: t("home.work.projects.project3.category"),
      description: t("home.work.projects.project3.description"),
      image: "https://images.unsplash.com/photo-1722159475082-0a2331580de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzUxNDAyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["TypeScript", "Redis", "Payments"],
    },
    {
      title: t("home.work.projects.project4.title"),
      category: t("home.work.projects.project4.category"),
      description: t("home.work.projects.project4.description"),
      image: "https://images.unsplash.com/photo-1528262004378-a108d795029c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWdufGVufDF8fHx8MTc2MzQ5Nzk3OHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "Calendar API"],
    },
    {
      title: t("home.work.projects.project5.title"),
      category: t("home.work.projects.project5.category"),
      description: t("home.work.projects.project5.description"),
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNzYzNTE3NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "SEO", "A/B Testing"],
    },
    {
      title: t("home.work.projects.project6.title"),
      category: t("home.work.projects.project6.category"),
      description: t("home.work.projects.project6.description"),
      image: "https://images.unsplash.com/photo-1763107228544-2ad5d71c21f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzUwNDA4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Microservices", "Docker", "GraphQL"],
    },
  ];

  return (
    <section id="work" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">{t("home.work.title")}</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("home.work.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [50, -50]
            );

            return (
              <motion.div
                key={index}
                style={{ y: index % 2 === 0 ? 0 : yOffset }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="gradient-border rounded-2xl overflow-hidden group cursor-pointer"
                role="article"
                aria-label={`View project: ${project.title} - ${project.category}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Handle navigation if needed
                  }
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-6 bg-black/40 backdrop-blur-xl">
                  <div className="text-teal-400 text-sm mb-2">{project.category}</div>
                  <h3 className="text-white text-xl mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full glass text-white/70 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate && onNavigate("work")}
            className="px-8 py-4 rounded-full glass-strong text-white"
          >
            {t("home.work.viewAll")}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
