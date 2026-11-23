import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "figma:asset/31ea46452f944af4461f5358e042df33ea1e739e.png";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    { label: t("nav.services"), page: "services" },
    { label: t("nav.work"), page: "work" },
    { label: t("nav.about"), page: "about" },
    { label: t("nav.faq"), page: "faq" },
    { label: t("nav.contact"), page: "contact" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      <motion.div
        className="glass-strong rounded-3xl px-6 py-4 shadow-2xl"
        whileHover={{
          boxShadow: "0 0 30px rgba(20, 184, 166, 0.2)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("home")}
            aria-label="Go to Laksana homepage"
          >
            <img 
              src={logo} 
              alt="Laksana logo" 
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="text-white tracking-tight text-lg">Laksana</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`text-sm tracking-wide transition-colors relative ${
                  currentPage === item.page ? "text-white" : "text-white/80 hover:text-white"
                }`}
                aria-label={`Navigate to ${item.label}`}
                aria-current={currentPage === item.page ? "page" : undefined}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-white rounded-full"
                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  />
                )}
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="md:hidden mt-4 pt-4 border-t border-white/10"
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.page}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.page)}
                  className={`block w-full text-left py-2 transition-colors text-sm ${
                    currentPage === item.page ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={currentPage === item.page ? "page" : undefined}
                >
                  {item.label}
                </motion.button>
              ))}
              <LanguageSwitcher />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
