import { Typography } from '@mui/material';
import { HEADER_TITLE } from '../constants';
import { SocialMedia } from '../../SocialMedia';

export const HeaderElements = (): JSX.Element => {
	return (
		<>
			<Typography variant="h6" component="h1">
				{HEADER_TITLE}
			</Typography>
			<SocialMedia />
		</>
	);
};
