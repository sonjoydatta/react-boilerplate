import App from 'App';
import 'assets/css/app.css';
import 'assets/less/app.less';
import 'assets/scss/app.scss';
import 'config/translate';
import ReactDOM from 'react-dom';

/**
 * `React.StrictMode` has been disabled
 * Some features of `Ant design` will not work with the StrictMode
 */
ReactDOM.render(<App />, document.getElementById('root'));
