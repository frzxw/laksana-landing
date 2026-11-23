import { test, expect } from '@playwright/test';

const ROUTES = [
  { path: '/', title: 'Home' },
  { path: '/services', title: 'Services' },
  { path: '/work', title: 'Work' },
  { path: '/about', title: 'About' },
  { path: '/careers', title: 'Careers' },
  { path: '/pricing', title: 'Pricing' },
  { path: '/contact', title: 'Contact' },
  { path: '/blog', title: 'Blog' },
  { path: '/faq', title: 'FAQ' },
];

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'id', name: 'Indonesian' },
];

test.describe('i18n Smoke Tests', () => {
  LANGUAGES.forEach(language => {
    test.describe(`${language.name} (${language.code})`, () => {
      test.beforeEach(async ({ page }) => {
        // Set language before each test
        await page.addInitScript((lang) => {
          localStorage.setItem('language', lang);
        }, language.code);
      });

      ROUTES.forEach(route => {
        test(`should load ${route.title} page in ${language.name}`, async ({ page }) => {
          // Navigate to route
          await page.goto(route.path);

          // Wait for page to load
          await page.waitForLoadState('networkidle');

          // Check that page loaded successfully
          await expect(page).not.toHaveTitle(/error/i);

          // Check that language is set correctly
          const htmlLang = await page.getAttribute('html', 'lang');
          expect(htmlLang).toBe(language.code);

          // Check that there are no missing translation keys (t('...')  or {{...}})
          const bodyText = await page.textContent('body');
          expect(bodyText).not.toMatch(/\{\{[^}]+\}\}/);
          expect(bodyText).not.toMatch(/t\(['"][^'"]+['"]\)/);

          // Take screenshot for visual verification
          await page.screenshot({
            path: `screenshots/${language.code}-${route.path.replace(/\//g, '-') || 'home'}.png`,
            fullPage: false,
          });
        });
      });

      test(`should switch language to ${language.name}`, async ({ page }) => {
        await page.goto('/');

        // Find and click language switcher
        const languageSwitcher = page.locator('[aria-label*="language" i], [aria-label*="bahasa" i]').first();
        
        if (await languageSwitcher.isVisible()) {
          await languageSwitcher.click();

          // Select the language
          const languageOption = page.locator(`text=${language.name}`).first();
          await languageOption.click();

          // Wait for page to update
          await page.waitForTimeout(500);

          // Verify language changed
          const htmlLang = await page.getAttribute('html', 'lang');
          expect(htmlLang).toBe(language.code);

          // Verify localStorage updated
          const storedLang = await page.evaluate(() => localStorage.getItem('language'));
          expect(storedLang).toBe(language.code);
        }
      });

      test(`should persist language preference on reload`, async ({ page }) => {
        // Set language
        await page.addInitScript((lang) => {
          localStorage.setItem('language', lang);
        }, language.code);

        await page.goto('/');

        // Check language is set
        let htmlLang = await page.getAttribute('html', 'lang');
        expect(htmlLang).toBe(language.code);

        // Reload page
        await page.reload();

        // Check language is still set
        htmlLang = await page.getAttribute('html', 'lang');
        expect(htmlLang).toBe(language.code);
      });
    });
  });

  test('should not have console errors related to i18n', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        const text = msg.text();
        if (text.includes('i18n') || text.includes('translation') || text.includes('Missing')) {
          consoleErrors.push(text);
        }
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Navigate to a few pages
    await page.click('a[href="/services"]');
    await page.waitForLoadState('networkidle');

    await page.click('a[href="/contact"]');
    await page.waitForLoadState('networkidle');

    // Check that there were no i18n-related console errors
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have proper meta tags in both languages', async ({ page }) => {
    for (const lang of LANGUAGES) {
      await page.addInitScript((language) => {
        localStorage.setItem('language', language);
      }, lang.code);

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Check meta tags
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);

      const description = await page.getAttribute('meta[name="description"]', 'content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(0);

      // Check og tags
      const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content');
      const ogDescription = await page.getAttribute('meta[property="og:description"]', 'content');

      if (ogTitle) expect(ogTitle.length).toBeGreaterThan(0);
      if (ogDescription) expect(ogDescription.length).toBeGreaterThan(0);
    }
  });
});
