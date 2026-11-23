import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./i18n/config";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { LanguageLayout } from "./components/LanguageLayout";

// Lazy load all page components for better performance
const ServicesPage = lazy(() => import("./components/pages/ServicesPage").then(m => ({ default: m.ServicesPage })));
const WorkPage = lazy(() => import("./components/pages/WorkPage").then(m => ({ default: m.WorkPage })));
const TestimonialsPage = lazy(() => import("./components/pages/TestimonialsPage").then(m => ({ default: m.TestimonialsPage })));
const FAQPage = lazy(() => import("./components/pages/FAQPage").then(m => ({ default: m.FAQPage })));
const AboutPage = lazy(() => import("./components/pages/AboutPage").then(m => ({ default: m.AboutPage })));
const CareersPage = lazy(() => import("./components/pages/CareersPage").then(m => ({ default: m.CareersPage })));
const BlogPage = lazy(() => import("./components/pages/BlogPage").then(m => ({ default: m.BlogPage })));
const BlogDetailPage = lazy(() => import("./components/pages/BlogDetailPage").then(m => ({ default: m.BlogDetailPage })));
const PrivacyPage = lazy(() => import("./components/pages/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import("./components/pages/TermsPage").then(m => ({ default: m.TermsPage })));
const SupportPage = lazy(() => import("./components/pages/SupportPage").then(m => ({ default: m.SupportPage })));
const PricingPage = lazy(() => import("./components/pages/PricingPage").then(m => ({ default: m.PricingPage })));
const CaseStudyPage = lazy(() => import("./components/pages/CaseStudyPage").then(m => ({ default: m.CaseStudyPage })));
const ContactPage = lazy(() => import("./components/pages/ContactPage").then(m => ({ default: m.ContactPage })));
const StatusPage = lazy(() => import("./components/pages/StatusPage").then(m => ({ default: m.StatusPage })));
const SecurityPage = lazy(() => import("./components/pages/SecurityPage").then(m => ({ default: m.SecurityPage })));

export default function App() {
  const location = useLocation();
  // Extract current page for Navbar active state logic, defaulting to 'home'
  // URL structure: /:lang/:page
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentPage = pathParts.length > 1 ? pathParts[1] : 'home';

  // Helper to handle navigation: since we are using Router now, 
  // onNavigate should just navigate efficiently or use Links. 
  // However, for compatibility with existing components that expect onNavigate,
  // we can mock it or update components. For now, components might need refactoring 
  // to use <Link> or useNavigate but keeping onNavigate as a prop that does nothing or logs 
  // might be safer if we don't want to refactor all children deeply right now. 
  // But strictly speaking, Navbar links should rely on Router.
  // We will pass a dummy function or use it to programmatically navigate?
  // Let's rely on standard routing. Navbar needs an update to use Link/navigate.

  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const validLang = ['en', 'id'].includes(pathParts[0]) ? pathParts[0] : 'en';
    const targetPath = page === 'home' ? '' : page;
    navigate(`/${validLang}/${targetPath}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-white/60">Loading...</div>
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              {/* Redirect root to /en */}
              <Route path="/" element={<Navigate to="/en" replace />} />

              {/* Language Layout wraps all pages */}
              <Route path="/:lang" element={<LanguageLayout />}>
                <Route index element={<HomePage onNavigate={handleNavigate} />} />
                <Route path="services" element={<ServicesPage />} />
                <Route path="work" element={<WorkPage onNavigate={handleNavigate} />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="faq" element={<FAQPage />} />
                <Route path="about" element={<AboutPage onNavigate={handleNavigate} />} />
                <Route path="careers" element={<CareersPage onNavigate={handleNavigate} />} />
                <Route path="blog" element={<BlogPage onNavigate={handleNavigate} />} />
                <Route path="blog-detail" element={<BlogDetailPage onNavigate={handleNavigate} />} />
                <Route path="privacy" element={<PrivacyPage />} />
                <Route path="terms" element={<TermsPage />} />
                <Route path="support" element={<SupportPage />} />
                <Route path="pricing" element={<PricingPage onNavigate={handleNavigate} />} />
                <Route path="case-study" element={<CaseStudyPage onNavigate={handleNavigate} />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="status" element={<StatusPage />} />
                <Route path="security" element={<SecurityPage />} />
                <Route path="press" element={<BlogPage />} />
                {/* Fallback to home if page not found within valid lang */}
                <Route path="*" element={<HomePage onNavigate={handleNavigate} />} />
              </Route>
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
