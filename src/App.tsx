import { Spin } from 'antd';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/styled';
import { ErrorBoundary } from './components/ErrorBoundary';
import { defaultTheme } from './config';
import { BaseRoutes } from './routes';
import { persistor, store } from './store';

const App = () => {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<Suspense fallback={<Spin className='SuspenseLoader' size='large' />}>
				<PersistGate
					loading={<Spin className='SuspenseLoader' size='large' />}
					persistor={persistor}
				>
					<QueryClientProvider client={queryClient}>
						<ErrorBoundary>
							<ThemeProvider theme={defaultTheme}>
								<BaseRoutes />
							</ThemeProvider>
							<GlobalStyles />
						</ErrorBoundary>
					</QueryClientProvider>
				</PersistGate>
			</Suspense>
		</Provider>
	);
};

export default App;
