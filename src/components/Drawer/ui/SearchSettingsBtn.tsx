import { Box, IconButton, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

type TSearchSettingsBtnProps = {
	textField: string;
	onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

export const SearchSettingsBtn = ({
	onClick,
	textField,
}: TSearchSettingsBtnProps): JSX.Element => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
			<Typography variant={'subtitle2'}>{textField}</Typography>
			<IconButton
				size={'medium'}
				aria-label={'item.ariaLabel'}
				color="inherit"
				onClick={onClick}
			>
				<SettingsIcon />
			</IconButton>
		</Box>
	);
};
