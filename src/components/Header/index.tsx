import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HEADER_TITLE } from './constants';
import { SocialMedia } from '../SocialMedia';
import { StyledToolbar } from './style';

export const Header = (): JSX.Element => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<StyledToolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, alignSelf: 'center' }}
					>
						{HEADER_TITLE}
					</Typography>
					<SocialMedia />
				</StyledToolbar>
			</AppBar>
		</Box>
	);
};
