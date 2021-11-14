import 'nprogress/nprogress.css';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/less/app.less';
import './config/translate';

/**
 * `React.StrictMode` has been disabled
 * Some features of `Ant design` will not work with the StrictMode
 */
ReactDOM.render(<App />, document.getElementById('root'));
