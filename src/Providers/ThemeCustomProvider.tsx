import { ReactNode } from 'react';
import { blueTheme, yellowTheme, selectorTheme } from '@features';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

export const ThemeCustomProvider = ({
	children,
}: {
	children: ReactNode;
}): JSX.Element => {
	const isYellowTheme = useSelector(selectorTheme);

	return (
		<ThemeProvider theme={isYellowTheme ? yellowTheme : blueTheme}>
			{children}
		</ThemeProvider>
	);
};
