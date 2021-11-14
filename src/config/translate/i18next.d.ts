import general from 'public/locales/en/general.json';
import signin from 'public/locales/en/signin.json';
import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'general';
    resources: {
      general: typeof general;
      signin: typeof signin;
    };
  }
}
