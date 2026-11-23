#!/usr/bin/env node
/**
 * i18n Coverage Badge Generator
 * 
 * Generates a shields.io badge showing translation coverage
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface CoverageData {
  en: number;
  id: number;
  timestamp: string;
}

/**
 * Generate badge markdown
 */
function generateBadgeMarkdown(coverage: CoverageData): string {
  const enColor = coverage.en >= 95 ? 'brightgreen' : coverage.en >= 80 ? 'yellow' : 'red';
  const idColor = coverage.id >= 95 ? 'brightgreen' : coverage.id >= 80 ? 'yellow' : 'red';
  
  return `
## 🌐 Translation Coverage

[![English Coverage](https://img.shields.io/badge/English-${coverage.en}%25-${enColor})](./src/i18n/locales/en.ts)
[![Indonesian Coverage](https://img.shields.io/badge/Indonesian-${coverage.id}%25-${idColor})](./src/i18n/locales/id.ts)

*Last updated: ${new Date(coverage.timestamp).toLocaleDateString()}*
`.trim();
}

/**
 * Generate coverage JSON for CI
 */
function generateCoverageJSON(coverage: CoverageData): string {
  return JSON.stringify({
    schemaVersion: 1,
    label: 'i18n',
    message: `EN: ${coverage.en}% | ID: ${coverage.id}%`,
    color: coverage.id >= 95 ? 'brightgreen' : coverage.id >= 80 ? 'yellow' : 'red',
  }, null, 2);
}

/**
 * Main function
 */
async function main() {
  console.log('🎨 Generating i18n coverage badges...\n');
  
  // Load coverage data from validation report
  const reportPath = path.join(__dirname, '../.i18n-check-report.json');
  
  if (!fs.existsSync(reportPath)) {
    console.error('❌ No validation report found. Run npm run i18n-check first.');
    process.exit(1);
  }
  
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  
  const coverage: CoverageData = {
    en: report.coverage.en,
    id: report.coverage.id,
    timestamp: new Date().toISOString(),
  };
  
  // Generate badge markdown
  const badgeMarkdown = generateBadgeMarkdown(coverage);
  const badgePath = path.join(__dirname, '../I18N_COVERAGE.md');
  fs.writeFileSync(badgePath, badgeMarkdown);
  console.log(`✅ Badge markdown saved to: ${badgePath}`);
  
  // Generate coverage JSON for shields.io endpoint
  const coverageJSON = generateCoverageJSON(coverage);
  const jsonPath = path.join(__dirname, '../public/i18n-coverage.json');
  
  // Ensure public directory exists
  const publicDir = path.dirname(jsonPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(jsonPath, coverageJSON);
  console.log(`✅ Coverage JSON saved to: ${jsonPath}`);
  
  // Print badges
  console.log('\n' + '='.repeat(50));
  console.log('📊 Coverage Badges:');
  console.log('='.repeat(50));
  console.log(badgeMarkdown);
  console.log('='.repeat(50) + '\n');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { generateBadgeMarkdown, generateCoverageJSON };
