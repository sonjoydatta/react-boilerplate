import translation from 'public/locales/en/translation.json';
import 'react-i18next';

export type translation = typeof translation;
export type translationKeys = keyof translation;

declare module 'react-i18next' {
	interface CustomTypeOptions {
		resources: {
			translation: typeof translation;
		};
	}
}
