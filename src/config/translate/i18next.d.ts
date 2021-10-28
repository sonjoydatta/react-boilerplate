import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'signin';
    resources: {
      signin: typeof import('./locales/en/signin.json');
    };
  }
}
