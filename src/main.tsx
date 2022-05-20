import 'nprogress/nprogress.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/less/app.less';
import './config/translate';

/**
 * `React.StrictMode` has been disabled
 * Some features of `Ant design` will not work with the StrictMode
 */
const element = document.getElementById('root');
const root = createRoot(element as HTMLElement);
root.render(<App />);
