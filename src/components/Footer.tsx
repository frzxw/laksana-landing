import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "figma:asset/31ea46452f944af4461f5358e042df33ea1e739e.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();

  const links = {
    [t("footer.company")]: [
      { label: t("footer.links.about"), page: "about" },
      { label: t("footer.links.careers"), page: "careers" },
      { label: t("footer.links.blog"), page: "blog" },
      { label: t("footer.links.contact"), page: "contact" },
    ],
    [t("footer.services")]: [
      { label: t("footer.links.mobileApps"), page: "services" },
      { label: t("footer.links.webApps"), page: "services" },
      { label: t("footer.links.landing"), page: "services" },
      { label: t("nav.pricing"), page: "pricing" },
    ],
    [t("footer.resources")]: [
      { label: t("footer.links.caseStudies"), page: "work" },
      { label: t("footer.links.support"), page: "support" },
      { label: "Status", page: "status" },
    ],
    [t("footer.legal")]: [
      { label: t("footer.links.privacy"), page: "privacy" },
      { label: t("footer.links.terms"), page: "terms" },
      { label: t("footer.links.security"), page: "security" },
    ],
  };

  const socials = [
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
    { icon: Mail, href: "#" },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative overflow-hidden pt-24 pb-12 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => handleNavigation("home")}
              aria-label="Go to Laksana homepage"
            >
              <img src={logo} alt="Laksana logo" width={48} height={48} className="w-12 h-12 object-contain" />
              <span className="text-white text-xl tracking-tight">Laksana</span>
            </button>
            <p className="text-white/60 mb-6 leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const socialNames = ['Twitter', 'Instagram', 'LinkedIn', 'GitHub', 'Email'];
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
                    aria-label={`Follow us on ${socialNames[index]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon size={18} className="text-white/60" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavigation(item.page)}
                      className="text-white/60 hover:text-white transition-colors text-sm text-left"
                      aria-label={`Navigate to ${item.label} page`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Laksana. All rights reserved.
          </p>
          <p className="text-white/40 text-sm">
            Your dedicated digital partner
          </p>
        </div>
      </div>
    </footer>
  );
}
