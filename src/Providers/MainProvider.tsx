import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ThemeCustomProvider } from './ThemeCustomProvider';

const queryClient = new QueryClient();

export const MainProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return (
		<Router>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ThemeCustomProvider>
						<CssBaseline />
						{children}
					</ThemeCustomProvider>
				</QueryClientProvider>
			</Provider>
		</Router>
	);
};
