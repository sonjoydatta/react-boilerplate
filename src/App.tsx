import { ErrorFallback } from 'components/ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { Routes } from 'routes';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
