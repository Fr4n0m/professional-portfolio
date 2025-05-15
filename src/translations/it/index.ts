import personalInfo from './personal-info.json';
import headerItems from './header-items.json';
import layout from './layout.json';
import mainPage from './main-page.json';
import projectsPage from './projects-page.json';
import projects from './projects.json';
import certificationsPage from './certifications-page.json';
import certificationsList from './certifications.json';
import socialMedia from './social-media.json';
import experience from './experience.json';
import footerItems from './footer-items.json';
import keyboardManager from './keyboard-manager.json';
import languageNames from './language-names.json';

export default {
  personalInfo,
  headerItems,
  layout,
  mainPage,
  projectsPage: {
    ...projectsPage,
    projects
  },
  certificationsPage: {
    ...certificationsPage,
    certificationsList
  },
  socialMedia,
  experience: {
    ...experience,
    experience: experience.experience || []
  },
  footerItems,
  keyboardManager,
  languageNames
};
