import config from 'config';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: config.dev,
    interpolation: {
      escapeValue: false,
    },
    ns: ['signin'],
    backend: {
      loadPath: 'src/config/translate/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
