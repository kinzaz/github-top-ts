import { BrowserRouter as Router } from 'react-router-dom';
import { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ThemeCustomProvider } from './ThemeCustomProvider';

export const MainProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	return (
		<Router>
			<Provider store={store}>
				<ThemeCustomProvider>
					<CssBaseline />
					{children}
				</ThemeCustomProvider>
			</Provider>
		</Router>
	);
};
