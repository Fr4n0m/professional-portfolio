import type { Project } from '../types/projects';
import type { HeaderItem } from './headerItem';
import type { Experience } from './experience';
import type { Certification } from './certification';
import type { FooterItem } from './footerItem';
import type { Profile } from './profile';
import type { Command } from './commandKeyManager';

export interface Translations {
	personalInfo: {
		name: string;
		role: string;
		alias: string;
		location: string;
		mail: string;
		profiles: Profile[];
	};

	headerItems: HeaderItem[];

	layout: {
		title: string;
		titleDescription: string;
	};

	mainPage: {
		hero: {
			heroTitle: string;
			heroBadge: string;
			heroDescription1: string;
			heroDescription2: string;
			heroDescription3: string;
		};

		socialPill: {
			socialPillTitle: string;
			sendMailSocialPill: string;

			copyButton: {
				copyTitle: string;
				copyMail: string;
				copyMailError: string;
			};
		};

		skills: {
			skillsTitle: string;
		};

		selectedProjects: {
			projectsTitle: string;
		};
	};

	projectsPage: {
		allProjects: string;
		allProjectsTitle: string;
		allProjectsDescription: string;
		allProjectsLink: string;
		projectsButtons: {
			textCodeButton: string;
			textDemoButton: string;
			textDemo2Button: string;
		};
		projects: Project[];
	};

	certificationsPage: {
		certifications: string;
		certificationsTitle: string;
		certificationsDescription: string;
		certificationsList: Certification[];
	};

	socialMedia: {
		linkedin: string;
		github: string;
		email: string;
	};

	experience: {
		workExperience: string;
		experience: Experience[];
	};

	footerItems: FooterItem[];

	keyboardManager: {
		kmPlaceHolder: string;
		kmTitle: string;
		kmSocialSection: string;
		kmNavigationSection: string;
		kmCommands: Command[];
	};
}