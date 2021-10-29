import App from 'App';
import 'assets/styles/css/app.css';
import 'assets/styles/less/app.less';
import 'assets/styles/scss/app.scss';
import 'config/translate';
import ReactDOM from 'react-dom';

/**
 * `React.StrictMode` has been disabled
 * Some features of `Ant design` will not work with the StrictMode
 */
ReactDOM.render(<App />, document.getElementById('root'));
