import { GlobalStyle } from 'assets/styles/styled';
import { ErrorFallback } from 'components/ErrorFallback';
import { defaultTheme } from 'config';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { Routes } from 'routes';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
        <GlobalStyle />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
