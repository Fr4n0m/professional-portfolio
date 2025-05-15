#!/usr/bin/env node
/**
 * Script para normalizar y completar todos los archivos de traducción
 * Asegura que todos los idiomas tengan la misma estructura
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Estructura completa esperada basada en es.json
const REQUIRED_STRUCTURE = {
  personalInfo: {
    name: '',
    role: '',
    alias: '',
    location: '',
    mail: '',
    profiles: []
  },
  headerItems: [],
  layout: {
    title: '',
    titleDescription: ''
  },
  mainPage: {
    hero: {
      heroTitle: '',
      heroBadge: '',
      heroDescription1: '',
      heroDescription2: '',
      heroDescription3: ''
    },
    socialPill: {
      socialPillTitle: '',
      sendMailSocialPill: '',
      copyButton: {
        copyTitle: '',
        copyMail: '',
        copyMailError: ''
      }
    },
    skills: {
      skillsTitle: ''
    },
    selectedProjects: {
      projectsTitle: ''
    }
  },
  projectsPage: {
    allProjects: '',
    allProjectsTitle: '',
    allProjectsDescription: '',
    allProjectsLink: '',
    projects: [],
    projectsButtons: {
      textCodeButton: '',
      textDemoButton: '',
      textDemo2Button: ''
    }
  },
  certificationsPage: {
    certifications: '',
    certificationsTitle: '',
    certificationsDescription: '',
    certificationsList: []
  },
  socialMedia: {
    linkedin: '',
    github: '',
    email: ''
  },
  experience: {
    workExperience: '',
    experience: []
  },
  footerItems: [],
  keyboardManager: {
    kmPlaceHolder: '',
    kmTitle: '',
    kmSocialSection: '',
    kmNavigationSection: '',
    kmCommands: []
  },
  languageNames: {}
};

// Idiomas soportados
const LANGUAGES = ['es', 'en', 'zh', 'hi', 'ar', 'pt', 'fr', 'de', 'ja', 'ru', 'it', 'ko', 'nl', 'pl', 'tr', 'hv'];

// Función para mezclar objetos profundamente
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key] !== undefined ? source[key] : target[key];
    }
  }
  
  return result;
}

// Función para obtener la estructura del archivo español como referencia
function getSpanishStructure() {
  const filePath = join(__dirname, '../src/translations/es.json');
  try {
    const content = readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error('Error leyendo es.json:', error.message);
    return REQUIRED_STRUCTURE;
  }
}

// Función para verificar y completar estructura
function normalizeTranslationFile(lang) {
  const filePath = join(__dirname, `../src/translations/${lang}.json`);
  
  try {
    // Leer archivo existente
    const content = readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    
    // Usar la estructura de es.json como referencia si es otro idioma
    const referenceStructure = lang === 'es' ? REQUIRED_STRUCTURE : getSpanishStructure();
    
    // Mezclar con estructura requerida
    const normalized = deepMerge(referenceStructure, data);
    
    // Asegurar que las URLs tengan el prefijo correcto del idioma
    if (lang !== 'es') {
      // Actualizar URLs en headerItems
      normalized.headerItems = normalized.headerItems.map(item => {
        if (item.url && !item.url.startsWith('mailto:') && !item.url.startsWith('http')) {
          const baseUrl = item.url.replace(/^\/(en|ar|zh|hi|pt|fr|de|ja|ru|it|ko|nl|pl|tr|hv)?/, '');
          item.url = `/${lang}${baseUrl}`;
        }
        return item;
      });
      
      // Actualizar URLs en footerItems
      normalized.footerItems = normalized.footerItems.map(item => {
        if (item.url && !item.url.startsWith('mailto:') && !item.url.startsWith('http')) {
          const baseUrl = item.url.replace(/^\/(en|ar|zh|hi|pt|fr|de|ja|ru|it|ko|nl|pl|tr|hv)?/, '');
          item.url = `/${lang}${baseUrl}`;
        }
        return item;
      });
      
      // Actualizar URLs en keyboardManager
      normalized.keyboardManager.kmCommands = normalized.keyboardManager.kmCommands.map(cmd => {
        if (cmd.handler && !cmd.handler.startsWith('mailto:') && !cmd.handler.startsWith('http')) {
          const baseUrl = cmd.handler.replace(/^\/(en|ar|zh|hi|pt|fr|de|ja|ru|it|ko|nl|pl|tr|hv)?/, '');
          cmd.handler = `/${lang}${baseUrl}`;
        }
        return cmd;
      });
      
      // Asegurar que todos los profiles tengan network definido
      normalized.personalInfo.profiles = normalized.personalInfo.profiles.filter(profile => profile.network);
    }
    
    // Escribir archivo normalizado
    writeFileSync(filePath, JSON.stringify(normalized, null, 2));
    console.log(`✅ Normalizado: ${lang}.json`);
    
  } catch (error) {
    console.error(`❌ Error con ${lang}.json:`, error.message);
  }
}

// Ejecutar normalización para todos los idiomas
console.log('🔄 Iniciando normalización de archivos de traducción...\n');

LANGUAGES.forEach(lang => {
  normalizeTranslationFile(lang);
});

console.log('\n✅ Normalización completada!');
console.log('⚠️  Revisa los archivos para asegurarte de que las traducciones específicas no se hayan perdido.');
console.log('⚠️  Es importante que revises las traducciones de los textos y las completes donde falten.');
