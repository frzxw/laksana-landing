#!/usr/bin/env node
/**
 * i18n Validation & Coverage Check Script
 * 
 * Validates translation files for:
 * - Missing keys
 * - Type safety
 * - Coverage percentage
 * - Empty translations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  coverage: {
    en: number;
    id: number;
  };
  missingKeys: {
    en: string[];
    id: string[];
  };
  emptyTranslations: {
    en: string[];
    id: string[];
  };
}

/**
 * Deep compare two objects to find missing keys
 */
function findMissingKeys(
  reference: any,
  target: any,
  prefix = ''
): string[] {
  const missing: string[] = [];
  
  for (const key in reference) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (!(key in target)) {
      missing.push(fullKey);
    } else if (
      typeof reference[key] === 'object' &&
      reference[key] !== null &&
      !Array.isArray(reference[key])
    ) {
      missing.push(
        ...findMissingKeys(reference[key], target[key], fullKey)
      );
    }
  }
  
  return missing;
}

/**
 * Find empty or placeholder translations
 */
function findEmptyTranslations(
  obj: any,
  prefix = ''
): string[] {
  const empty: string[] = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];
    
    if (typeof value === 'string') {
      if (
        value.trim() === '' ||
        value.includes('/* TRANSLATE */') ||
        value === 'TODO' ||
        value === 'TBD'
      ) {
        empty.push(fullKey);
      }
    } else if (typeof value === 'object' && value !== null) {
      empty.push(...findEmptyTranslations(value, fullKey));
    }
  }
  
  return empty;
}

/**
 * Count all keys in an object
 */
function countKeys(obj: any): number {
  let count = 0;
  
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      count += countKeys(obj[key]);
    } else {
      count++;
    }
  }
  
  return count;
}

/**
 * Calculate coverage percentage
 */
function calculateCoverage(
  totalKeys: number,
  emptyKeys: number
): number {
  if (totalKeys === 0) return 0;
  return Math.round(((totalKeys - emptyKeys) / totalKeys) * 100 * 100) / 100;
}

/**
 * Main validation function
 */
async function main(): Promise<ValidationResult> {
  console.log('🔍 Starting i18n validation...\n');
  
  const result: ValidationResult = {
    valid: true,
    errors: [],
    warnings: [],
    coverage: { en: 0, id: 0 },
    missingKeys: { en: [], id: [] },
    emptyTranslations: { en: [], id: [] },
  };
  
  try {
    // Load translation files
    const enPath = path.join(__dirname, '../src/i18n/locales/en.ts');
    const idPath = path.join(__dirname, '../src/i18n/locales/id.ts');
    
    // For TypeScript files, we need to compile or use dynamic import
    // For now, let's read them as text and parse
    console.log('📖 Loading translation files...');
    
    // This is a simplified version - in production you'd want to use ts-node or compile
    const enContent = fs.readFileSync(enPath, 'utf-8');
    const idContent = fs.readFileSync(idPath, 'utf-8');
    
    // Check if files exist and are not empty
    if (!enContent || enContent.trim().length === 0) {
      result.errors.push('English translation file is empty');
      result.valid = false;
    }
    
    if (!idContent || idContent.trim().length === 0) {
      result.errors.push('Indonesian translation file is empty');
      result.valid = false;
    }
    
    // Try to dynamically import (this requires the files to be valid TypeScript)
    console.log('🔄 Importing translation modules...');
    
    try {
      const enModule = await import(enPath);
      const idModule = await import(idPath);
      
      const enTranslations = enModule.en || enModule.default;
      const idTranslations = idModule.id || idModule.default;
      
      // Find missing keys
      console.log('🔎 Checking for missing keys...');
      result.missingKeys.id = findMissingKeys(enTranslations, idTranslations);
      result.missingKeys.en = findMissingKeys(idTranslations, enTranslations);
      
      // Find empty translations
      console.log('🔎 Checking for empty translations...');
      result.emptyTranslations.en = findEmptyTranslations(enTranslations);
      result.emptyTranslations.id = findEmptyTranslations(idTranslations);
      
      // Calculate coverage
      const totalKeys = countKeys(enTranslations);
      result.coverage.en = calculateCoverage(totalKeys, result.emptyTranslations.en.length);
      result.coverage.id = calculateCoverage(totalKeys, result.emptyTranslations.id.length + result.missingKeys.id.length);
      
      console.log('\n📊 Coverage Report:');
      console.log(`  English: ${result.coverage.en}%`);
      console.log(`  Indonesian: ${result.coverage.id}%`);
      
      // Generate warnings for missing keys
      if (result.missingKeys.id.length > 0) {
        result.warnings.push(`Indonesian is missing ${result.missingKeys.id.length} keys`);
        console.log(`\n⚠️  Missing Indonesian translations (${result.missingKeys.id.length}):`);
        result.missingKeys.id.slice(0, 10).forEach(key => console.log(`    - ${key}`));
        if (result.missingKeys.id.length > 10) {
          console.log(`    ... and ${result.missingKeys.id.length - 10} more`);
        }
      }
      
      if (result.emptyTranslations.id.length > 0) {
        result.warnings.push(`Indonesian has ${result.emptyTranslations.id.length} empty translations`);
        console.log(`\n⚠️  Empty Indonesian translations (${result.emptyTranslations.id.length}):`);
        result.emptyTranslations.id.slice(0, 10).forEach(key => console.log(`    - ${key}`));
        if (result.emptyTranslations.id.length > 10) {
          console.log(`    ... and ${result.emptyTranslations.id.length - 10} more`);
        }
      }
      
      // Check if coverage is acceptable (>= 95%)
      if (result.coverage.id < 95) {
        result.warnings.push(`Indonesian coverage is below 95% (${result.coverage.id}%)`);
      }
      
    } catch (importError) {
      console.error('❌ Failed to import translation files:', importError);
      result.errors.push(`Failed to import translation files: ${importError instanceof Error ? importError.message : String(importError)}`);
      result.valid = false;
    }
    
  } catch (error) {
    console.error('❌ Validation failed:', error);
    result.errors.push(`Validation error: ${error instanceof Error ? error.message : String(error)}`);
    result.valid = false;
  }
  
  // Print summary
  console.log('\n' + '='.repeat(50));
  if (result.valid && result.warnings.length === 0) {
    console.log('✅ All validations passed!');
  } else if (result.valid && result.warnings.length > 0) {
    console.log(`⚠️  Validation passed with ${result.warnings.length} warning(s)`);
  } else {
    console.log(`❌ Validation failed with ${result.errors.length} error(s)`);
  }
  console.log('='.repeat(50) + '\n');
  
  // Save report
  const reportPath = path.join(__dirname, '../.i18n-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));
  console.log(`💾 Report saved to: ${reportPath}\n`);
  
  // Exit with error code if validation failed
  if (!result.valid || (process.env.CI && result.warnings.length > 0)) {
    process.exit(1);
  }
  
  return result;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { main as validateI18n };
