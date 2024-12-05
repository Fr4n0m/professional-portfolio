import Hack4uIcon from '@icons/Hack4u';
import CodeSpaceIcon from '@icons/CodeSpace';

const ENTITIES = {
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

const CERTIFICATIONS = [
	{
		title: 'Certificación de Desarrollador Web Full Stack',
		image: '/assets/images/certificates/images/Certificado-CodeSpace.webp',
		url: '/assets/images/certificates/pdf/Certificado-CodeSpace.pdf',
		description: '',
		entity: ENTITIES.CODESPACE,
	},
	{
		title: 'Certificación de Personalización de entorno en Linux',
		image: '/assets/images/certificates/images/Certificado-Hack4u-PersonalizaciónLinux.webp',
		url: '/assets/images/certificates/pdf/Certificado-Hack4u-PersonalizacionLinux.pdf',
		description:
			'Habilidades para personalizar entornos Linux en Debian, Kali y demás sistemas basados en Linux incluyendo configuración de software, ajustes de sistema y optimización de rendimiento y seguridad.',
		entity: ENTITIES.HACK4U,
	},
];

export { CERTIFICATIONS, ENTITY };
