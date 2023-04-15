import { createTheme } from '@mui/material/styles';
import lightBlue from '@mui/material/colors/lightBlue';
import yellow from '@mui/material/colors/yellow';

export const yellowTheme = createTheme({
	palette: {
		primary: {
			main: yellow[600],
		},
	},
});

export const blueTheme = createTheme({
	palette: {
		primary: {
			main: lightBlue[800],
		},
	},
});
