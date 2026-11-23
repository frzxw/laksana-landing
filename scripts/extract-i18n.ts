#!/usr/bin/env node
/**
 * i18n Extraction Script
 * 
 * Scans source files for hardcoded strings and extracts them to translation files
 * with proper namespacing and type-safety
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load configuration
const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../src/i18n/i18n-config.json'), 'utf-8')
);

const TECH_TERMS = new Set(config.techTermsExclusions);
const SCAN_PATHS = config.extractionRules.scanPaths;
const EXCLUDE_PATHS = config.extractionRules.excludePaths;

interface ExtractedString {
  value: string;
  file: string;
  line: number;
  namespace: string;
  key: string;
}

/**
 * Check if a string should be excluded from translation
 */
function shouldExclude(str: string): boolean {
  // Exclude if it's a tech term
  if (TECH_TERMS.has(str)) return true;
  
  // Exclude if it's too short (likely a variable or symbol)
  if (str.length < 3) return true;
  
  // Exclude if it's all numbers
  if (/^\d+$/.test(str)) return true;
  
  // Exclude if it's a URL or path
  if (/^(https?:\/\/|\/|\.\/|\.\.\/)/.test(str)) return true;
  
  // Exclude if it's a color or CSS value
  if (/^#[0-9a-f]{3,8}$/i.test(str)) return true;
  if (/^\d+(px|em|rem|%|vh|vw)$/.test(str)) return true;
  
  // Exclude single characters
  if (str.length === 1) return true;
  
  return false;
}

/**
 * Extract namespace from file path
 */
function getNamespace(filePath: string): string {
  const fileName = path.basename(filePath, path.extname(filePath));
  
  // Check if there's a direct mapping in config
  if (config.namespaceMapping[fileName]) {
    return config.namespaceMapping[fileName];
  }
  
  // Infer from file name
  if (fileName.endsWith('Page')) {
    return fileName.replace('Page', '').toLowerCase();
  }
  
  return 'common';
}

/**
 * Generate a clean key from a string
 */
function generateKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .substring(0, 50);
}

/**
 * Extract strings from a file
 */
function extractStringsFromFile(filePath: string): ExtractedString[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const extracted: ExtractedString[] = [];
  
  // Regex patterns for string extraction
  const patterns = [
    // Double quotes
    /"([^"\\]*(\\.[^"\\]*)*)"/g,
    // Single quotes
    /'([^'\\]*(\\.[^'\\]*)*)'/g,
    // Template literals (simple ones without interpolation)
    /`([^`$\\]*(\\.[^`$\\]*)*)`/g,
  ];
  
  lines.forEach((line, lineIndex) => {
    // Skip if line contains t( or t` or useTranslation or Trans
    if (
      line.includes('t(') ||
      line.includes('t`') ||
      line.includes('useTranslation') ||
      line.includes('<Trans') ||
      line.includes('import')
    ) {
      return;
    }
    
    patterns.forEach((pattern) => {
      let match;
      while ((match = pattern.exec(line)) !== null) {
        const value = match[1];
        
        if (!shouldExclude(value) && value.trim().length > 0) {
          const namespace = getNamespace(filePath);
          const key = generateKey(value);
          
          extracted.push({
            value: value.trim(),
            file: filePath,
            line: lineIndex + 1,
            namespace,
            key: `${namespace}.${key}`,
          });
        }
      }
    });
  });
  
  return extracted;
}

/**
 * Main extraction function
 */
function main() {
  console.log('🔍 Starting i18n string extraction...\n');
  
  const allExtracted: ExtractedString[] = [];
  
  // TODO: Implement glob pattern matching
  // For now, this is a placeholder structure
  
  console.log(`\n✅ Extraction complete!`);
  console.log(`📊 Found ${allExtracted.length} translatable strings`);
  
  // Group by namespace
  const byNamespace = allExtracted.reduce((acc, item) => {
    if (!acc[item.namespace]) {
      acc[item.namespace] = [];
    }
    acc[item.namespace].push(item);
    return acc;
  }, {} as Record<string, ExtractedString[]>);
  
  console.log('\n📦 Strings by namespace:');
  Object.entries(byNamespace).forEach(([namespace, strings]) => {
    console.log(`  ${namespace}: ${strings.length} strings`);
  });
  
  // Save extraction report
  const report = {
    timestamp: new Date().toISOString(),
    totalStrings: allExtracted.length,
    byNamespace,
    strings: allExtracted,
  };
  
  const reportPath = path.join(__dirname, '../.i18n-extraction-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n💾 Report saved to: ${reportPath}`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { extractStringsFromFile, generateKey, shouldExclude };
