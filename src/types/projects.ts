export interface TagInfo {
	name: string;
	class: string;
	link: string;
	icon: Record<string, any>;
}

export interface Project {
	images: string[];
	title: string;
	description: string;
	tags: string[];
	link?: string;
	secondaryLink?: string;
	github?: string;
}
