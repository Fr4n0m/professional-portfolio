export interface Info {
	id: string;
	section: string;
	title: string;
	url: string;
	icon: string;
	hotkey: string;
	handler?: () => void;
}
