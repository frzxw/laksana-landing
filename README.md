
# Laksana - Software Agency

[![English Coverage](https://img.shields.io/badge/English-100%25-brightgreen)](./src/i18n/locales/en.ts)
[![Indonesian Coverage](https://img.shields.io/badge/Indonesian-100%25-brightgreen)](./src/i18n/locales/id.ts)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://react.dev/)
[![i18n](https://img.shields.io/badge/i18n-Type--Safe-success)](./I18N_IMPLEMENTATION.md)

## Overview

Laksana is a premium software development agency specializing in building scalable digital solutions for UMKM (Micro, Small & Medium Enterprises), startups, and enterprise clients. This repository contains the official marketing website and portfolio showcase for Laksana, built with modern web technologies and best practices.

### About the Website

This is a fully-featured, production-ready agency website with a sophisticated design system inspired by Apple's glassmorphism aesthetic. The site serves as both a marketing platform and portfolio showcase, demonstrating our expertise in building high-quality web applications.

**Key Capabilities:**
- **Bilingual Content Delivery** - Seamless English and Indonesian language support with type-safe internationalization
- **Portfolio Showcase** - Dynamic case studies featuring real-world projects including FinTech platforms, Enterprise Analytics, and POS systems
- **Lead Generation** - Integrated contact forms, newsletter subscription, and clear call-to-action flows
- **SEO Optimized** - Comprehensive meta tags, structured data (Schema.org), and local SEO for Indonesian market targeting
- **Performance First** - Built with Vite for lightning-fast load times and optimal Core Web Vitals scores

### Target Audience

The website is designed to serve three primary market segments:
1. **UMKM & Small Business** - Local Indonesian businesses seeking digital transformation
2. **Startups** - Early-stage companies requiring MVP development and scalable architecture
3. **Enterprise** - Large organizations needing custom software solutions and system integration

### Design Philosophy

The interface employs a premium, minimalist design language with:
- **Glassmorphism UI** - Frosted glass effects with subtle gradients and blur
- **Neon Accents** - Strategic use of glowing effects for CTAs and interactive elements
- **Dark Theme** - Modern dark mode aesthetics with high contrast ratios
- **Fluid Animations** - Smooth transitions powered by Framer Motion for enhanced UX
- **Responsive Design** - Mobile-first approach ensuring perfect rendering across all devices

## ✨ Features

- 🌐 **Full i18n Support** - English & Indonesian with type-safety
- 🎨 **Apple Glassmorphism** - Modern frosted glass UI design
- ⚡ **Vite + React** - Lightning-fast development
- 🔒 **TypeScript** - Full type safety across the codebase
- 🎭 **Framer Motion** - Smooth animations and transitions
- 🧪 **E2E Tests** - Playwright tests for all routes
- 🤖 **CI/CD** - Automated i18n validation & PR generation
- 📱 **Responsive** - Mobile-first design

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🌐 Internationalization

This project uses **react-i18next** with TypeScript for type-safe translations.

### Available Scripts

```bash
# Validate translations (coverage, missing keys)
npm run i18n-check

# Extract translatable strings from source
npm run extract-i18n

# Generate coverage badges
npm run generate-badges

# Run all validations (i18n + typecheck)
npm run i18n:validate

# Full i18n update (extract + validate + badges)
npm run i18n:update
```

### Current Coverage

- 🇺🇸 **English:** 100%
- 🇮🇩 **Indonesian:** 100%

See [I18N_IMPLEMENTATION.md](./I18N_IMPLEMENTATION.md) for complete documentation.

## 🧪 Testing

```bash
# Run all E2E tests
npm run test

# Run i18n smoke tests only
npm run test:e2e:smoke

# Run tests in UI mode
npm run test:ui
```

## 📁 Project Architecture

```
laksana-landing/
├── src/
│   ├── components/           # React components
│   │   ├── pages/           # Full-page components (About, Services, Work, etc.)
│   │   ├── ui/              # Reusable UI components (shadcn/ui)
│   │   ├── figma/           # Figma-synced components
│   │   └── *.tsx            # Layout components (Hero, Navbar, Footer, etc.)
│   ├── i18n/                # Internationalization infrastructure
│   │   ├── config.ts        # i18next configuration & setup
│   │   ├── types.ts         # TypeScript type definitions for translations
│   │   ├── utils.ts         # Translation helper utilities
│   │   └── locales/         # Translation dictionaries
│   │       ├── en.ts        # English (primary language)
│   │       └── id.ts        # Indonesian (Bahasa Indonesia)
│   ├── assets/              # Static assets (images, logos, icons)
│   ├── styles/              # Global CSS and Tailwind configuration
│   ├── guidelines/          # Development guidelines and documentation
│   ├── App.tsx              # Root application component with routing
│   └── main.tsx             # Application entry point
├── public/                  # Static public assets
│   ├── clients/             # Client logo assets (SVG)
│   ├── favicon.svg          # Site favicon and variants
│   └── site.webmanifest     # PWA manifest
├── scripts/                 # Build and automation scripts
│   ├── extract-i18n.ts      # Extract translatable strings
│   ├── i18n-check.ts        # Validate translation coverage
│   └── generate-i18n-badges.ts  # Generate coverage badges
├── tests/                   # End-to-end testing suite
│   └── i18n-smoke.spec.ts   # i18n integration tests
├── build/                   # Production build output (git-ignored)
└── .github/workflows/       # CI/CD automation
    └── i18n-validation.yml  # Automated translation validation
```

### Component Organization

The project follows a modular architecture with clear separation of concerns:

- **Page Components** - Full-page views with routing integration
- **Layout Components** - Reusable sections (Hero, Services, Testimonials)
- **UI Components** - Atomic design elements from shadcn/ui library
- **Figma Components** - Design-synced components with fallback handling

## 🛠️ Technology Stack

### Core Framework
- **React 18.3** - Modern React with hooks and concurrent features
- **TypeScript 5.3** - Strict type safety across the entire codebase
- **Vite 6.4** - Next-generation frontend tooling with HMR and optimized builds

### Styling & Design
- **Tailwind CSS 3.4** - Utility-first CSS framework with custom design tokens
- **Framer Motion 11.0** - Production-ready animation library for React
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful, consistent icon library

### Internationalization
- **react-i18next 14.0** - Industry-standard i18n framework
- **Custom Type System** - Fully typed translations with TypeScript inference
- **Automated Validation** - CI/CD pipeline ensures translation coverage

### Development & Testing
- **Playwright 1.48** - End-to-end testing framework
- **ESLint + Prettier** - Code quality and formatting enforcement
- **GitHub Actions** - Automated testing and deployment workflows

### Build & Deployment
- **Vite Build** - Optimized production bundles with code splitting
- **Static Site Generation** - Pre-rendered HTML for optimal SEO
- **Asset Optimization** - Automatic image optimization and lazy loading

## 🤖 Automated Workflows

### GitHub Actions

The project includes automated CI/CD workflows:

1. **i18n Validation** - Runs on every push/PR
   - Validates translation coverage
   - Checks for missing keys
   - Runs TypeScript type checking
   - Builds the project
   - Runs E2E smoke tests

2. **Auto-PR Generation** - Runs when missing translations detected
   - Creates branch `i18n/auto-sync-<timestamp>`
   - Adds translation stubs to `id.ts`
   - Opens PR with missing keys list
   - Labels: `i18n`, `needs-translation`, `auto-generated`

See [.github/workflows/i18n-validation.yml](./.github/workflows/i18n-validation.yml) for details.

## 📝 Development Guidelines

### Adding New Features

1. **Create Feature Branch** - Follow naming convention: `feature/descriptive-name`
2. **Component Development** - Place new components in appropriate directories
3. **Add Translations** - Update both `en.ts` and `id.ts` locale files
4. **Type Safety** - Ensure TypeScript compilation passes with no errors
5. **Testing** - Add relevant E2E tests for new pages or critical flows
6. **Documentation** - Update this README if adding major features

### Translation Workflow

1. Add English key to `src/i18n/locales/en.ts` (primary language)
2. Add Indonesian translation to `src/i18n/locales/id.ts`
3. Use in component: `const { t } = useTranslation(); t('your.new.key')`
4. Run validation: `npm run i18n:validate`
5. Verify coverage badges are updated

### Code Quality Standards

- **TypeScript Strict Mode** - All code must pass strict type checking
- **ESLint Rules** - Follow configured linting rules for consistency
- **Prettier Formatting** - Automatic code formatting on save
- **Conventional Commits** - Use semantic commit messages
- **Component Patterns** - Follow existing patterns for state management and props

### Best Practices

- **Performance** - Use lazy loading, memoization, and code splitting
- **Accessibility** - Ensure WCAG 2.1 AA compliance for all interactive elements
- **Responsive Design** - Test on mobile, tablet, and desktop viewports
- **SEO** - Add appropriate meta tags and structured data for new pages
- **Browser Support** - Test on modern browsers (Chrome, Firefox, Safari, Edge)

## 🚀 Deployment

### Production Build

```bash
# Create optimized production build
npm run build

# Build output located in ./build directory
# Includes minified JS/CSS, optimized assets, and pre-rendered HTML
```

### Deployment Targets

This static site can be deployed to various hosting platforms:

- **Vercel** - Recommended for automatic deployments with GitHub integration
- **Netlify** - Alternative with similar features and edge functions
- **Azure Static Web Apps** - Enterprise-grade hosting with global CDN
- **AWS S3 + CloudFront** - Custom infrastructure with full control
- **GitHub Pages** - Free hosting for public repositories

### Environment Configuration

Create `.env.local` for environment-specific variables:

```env
VITE_API_URL=https://api.laksana.dev
VITE_CONTACT_EMAIL=contact@laksana.dev
VITE_GTM_ID=GTM-XXXXXXX
```

## 📊 Performance Metrics

The website is optimized for Core Web Vitals:

- **Largest Contentful Paint (LCP)** - < 2.5s
- **First Input Delay (FID)** - < 100ms
- **Cumulative Layout Shift (CLS)** - < 0.1
- **Lighthouse Score** - 95+ across all categories

Performance optimizations include:
- Code splitting and lazy loading
- Image optimization with WebP format
- Preloading critical assets
- Efficient CSS delivery
- Minimal third-party scripts

## 🔒 Security

Security measures implemented:

- **Content Security Policy (CSP)** - Restricts resource loading
- **XSS Protection** - Sanitized user inputs and outputs
- **HTTPS Only** - Enforced secure connections
- **Dependency Scanning** - Automated vulnerability checks
- **Environment Variables** - Sensitive data not in source code

## 📄 License

This project is proprietary and confidential. All rights reserved by Laksana Software Agency.

Unauthorized copying, distribution, or use of this software is strictly prohibited.

## 📞 Contact & Support

**Website:** [laksana.dev](https://laksana.dev)  
**Email:** contact@laksana.dev  
**Location:** Bandung, Jawa Barat, Indonesia

For technical inquiries, business partnerships, or project consultations, please reach out through our website contact form or email.

---

## 👥 Team

**Founders:**
- Igin Adigholib - Founder
- Fariz Wibisono - Co-Founder  
- Rahmat Hidayat - Co-Founder

---

**Original Figma Design:** [View on Figma](https://www.figma.com/design/lfKbfk9aaBVAN0KoHLJNqi/laksana-landing)

**Built with precision by the Laksana Team** | © 2025 Laksana. All rights reserved.
  