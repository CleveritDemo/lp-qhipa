#!/usr/bin/env node

/**
 * Design Tokens Watcher
 * 
 * Observa cambios en design.md y regenera los tokens automáticamente.
 * Se ejecuta en paralelo con next dev.
 */

const fs = require('fs');
const path = require('path');
const { generateTokens, DESIGN_FILE } = require('./generate-tokens');

console.log('[design-tokens] Watching for changes in design.md...');
console.log('[design-tokens] Press Ctrl+C to stop\n');

// Generar tokens inicialmente
generateTokens();

// Debounce para evitar múltiples regeneraciones
let timeout = null;
const DEBOUNCE_MS = 100;

// Observar cambios en design.md
fs.watch(DESIGN_FILE, (eventType) => {
  if (eventType === 'change') {
    // Limpiar timeout anterior
    if (timeout) {
      clearTimeout(timeout);
    }
    
    // Esperar un poco antes de regenerar (debounce)
    timeout = setTimeout(() => {
      console.log('\n[design-tokens] Change detected in design.md');
      generateTokens();
    }, DEBOUNCE_MS);
  }
});

// Mantener el proceso corriendo
process.on('SIGINT', () => {
  console.log('\n[design-tokens] Stopped watching');
  process.exit(0);
});
