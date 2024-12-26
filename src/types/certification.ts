import type { ENTITIES } from '@utils/entities';

export interface Entity {
	name: string;
	url: string;
	icon: any;
}

export interface Certification {
	title: string;
	image: string;
	url: string;
	description: string;
	entity: keyof typeof ENTITIES;
}
