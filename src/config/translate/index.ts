import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '..';

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		returnNull: false,
		lng: config.lang,
		fallbackLng: 'en',
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;
