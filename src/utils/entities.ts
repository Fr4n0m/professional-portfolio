import Hack4uIcon from '@icons/Hack4u.astro';
import CodeSpaceIcon from '../icons/CodeSpace.astro';
import type { Entity } from '../types/certification';

export const ENTITIES: Record<string, Entity> = {
	CODESPACE: {
		name: 'CodeSpace Academy',
		url: 'https://codespaceacademy.com/',
		icon: CodeSpaceIcon,
	},
	HACK4U: {
		name: 'Hack4u',
		url: 'https://hack4u.io/',
		icon: Hack4uIcon,
	},
};
