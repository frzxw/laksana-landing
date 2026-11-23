import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export function LanguageSwitcher() {
  const location = useLocation();
  const navigate = useNavigate();
  // Since Navbar/LanguageSwitcher is outside the Routes, useParams won't work for getting the lang param.
  // We parse the pathname manually.
  const isEnglish = !location.pathname.startsWith("/id");

  const toggleLanguage = () => {
    const newLang = isEnglish ? "id" : "en";
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/").filter(Boolean);

    // If we're at root, just go to new lang
    if (pathParts.length === 0) {
      navigate(`/${newLang}`);
      return;
    }

    // If first part is lang code, replace it
    if (pathParts[0] === "en" || pathParts[0] === "id") {
      pathParts[0] = newLang;
      navigate(`/${pathParts.join("/")}`);
    } else {
      // If no lang code (shouldn't happen with strict routing, but fallback), prepend
      navigate(`/${newLang}/${pathParts.join("/")}`);
    }
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1 px-1 py-1 rounded-full glass-strong border border-white/10 overflow-hidden"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(20, 184, 166, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Liquid Glass Sliding Background */}
      <motion.div
        className="absolute top-0.5 bottom-0.5 w-[42px] rounded-full bg-gradient-to-br from-teal-400/30 via-white/20 to-teal-300/30 backdrop-blur-xl shadow-lg"
        animate={{
          left: isEnglish ? "2px" : "calc(100% - 44px)"
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
          mass: 0.8
        }}
        style={{
          boxShadow: "0 2px 8px rgba(20, 184, 166, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)"
        }}
      />

      {/* EN Text */}
      <motion.span
        className="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-300"
        animate={{
          color: isEnglish ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"
        }}
      >
        EN
      </motion.span>

      {/* ID Text */}
      <motion.span
        className="relative z-10 px-3 py-1 text-xs font-medium transition-colors duration-300"
        animate={{
          color: !isEnglish ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"
        }}
      >
        ID
      </motion.span>
    </motion.button>
  );
}
