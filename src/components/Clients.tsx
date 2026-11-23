import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Clients() {
  const { t } = useTranslation();
  const clients = [
    { name: "Client 1", logo: "/clients/logo-1.svg" },
    { name: "Client 2", logo: "/clients/logo-2.svg" },
    { name: "Client 3", logo: "/clients/logo-3.svg" },
    { name: "Client 4", logo: "/clients/logo-4.svg" },
    { name: "Client 5", logo: "/clients/logo-5.svg" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            {t("home.clients.title")}
          </h2>
          <p className="text-lg text-white/60">
            {t("home.clients.subtitle")}
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...clients, ...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="glass rounded-2xl px-8 py-6 flex-shrink-0 min-w-[200px] flex items-center justify-center group cursor-pointer"
                role="img"
                aria-label={`Trusted by ${client.name}`}
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo - trusted client of Laksana`}
                  width={120}
                  height={32}
                  className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
