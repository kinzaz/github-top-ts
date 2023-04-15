import { Box, BoxProps, SxProps, Theme, Typography } from '@mui/material';

interface CardInfoProps extends BoxProps {
	title: string;
	description: string;
	sx?: SxProps<Theme> | undefined;
}

export const CardInfo = ({
	title,
	description,
	sx,
	...props
}: CardInfoProps): JSX.Element => {
	return (
		<Box sx={{ padding: '10px', ...sx }} {...props}>
			<Typography variant="body1" color="text.primary">
				{title}:
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{description}
			</Typography>
		</Box>
	);
};
