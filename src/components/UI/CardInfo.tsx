import { CardContent, Typography } from '@mui/material';

export const CardInfo = ({ title, description }): JSX.Element => {
	return (
		<CardContent>
			<Typography variant="body1" color="text.primary">
				{title}:
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{description}
			</Typography>
		</CardContent>
	);
};
