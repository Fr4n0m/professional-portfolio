import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsPath = path.join(__dirname, '..', 'src', 'translations');

// Structure minimum required for avoiding errors
const minimalStructure = {
  personalInfo: {
    profiles: [
      {
        network: "LinkedIn",
        username: "Francisco Rodríguez",
        url: "https://www.linkedin.com/in/francisco-jos%C3%A9-r-5b2181bb/"
      },
      {
        network: "GitHub",
        username: "Fr4n0m",
        url: "https://github.com/Fr4n0m"
      },
      {
        network: "CV",
        username: "Francisco Rodríguez",
        url: "https://cv-web-smoky.vercel.app/"
      }
    ]
  },
  keyboardManager: {
    kmPlaceHolder: "Search",
    kmTitle: "Visit",
    kmSocialSection: "Social",
    kmNavigationSection: "Navigation"
  }
};

function fixTranslationFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);
  
  let updated = false;
  
  // Check and fix personalInfo.profiles
  if (!data.personalInfo || !data.personalInfo.profiles || data.personalInfo.profiles.length === 0 ||
      data.personalInfo.profiles.some(p => !p.network)) {
    data.personalInfo = data.personalInfo || {};
    data.personalInfo.profiles = minimalStructure.personalInfo.profiles;
    updated = true;
  }
  
  // Check and fix keyboardManager
  if (!data.keyboardManager || !data.keyboardManager.kmTitle) {
    data.keyboardManager = Object.assign({}, minimalStructure.keyboardManager, data.keyboardManager || {});
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Fixed: ${path.basename(filePath)}`);
  } else {
    console.log(`OK: ${path.basename(filePath)}`);
  }
}

// Process all JSON files in translations directory
const files = fs.readdirSync(translationsPath).filter(f => f.endsWith('.json'));

console.log('Checking and fixing translation files...\n');

files.forEach(file => {
  const filePath = path.join(translationsPath, file);
  fixTranslationFile(filePath);
});

console.log('\nAll translation files have been checked and fixed!');
