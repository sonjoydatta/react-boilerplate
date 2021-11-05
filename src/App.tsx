import { GlobalStyle } from 'assets/styles/styled';
import { ErrorFallback } from 'components/ErrorFallback';
import { defaultTheme } from 'config';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Routes } from 'routes';
import { persistor, store } from 'store';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ThemeProvider theme={defaultTheme}>
            <Routes />
          </ThemeProvider>
          <GlobalStyle />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
