import 'react-i18next';
import signin from '../../../public/locales/en/signin.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'signin';
    resources: {
      signin: typeof signin;
    };
  }
}
