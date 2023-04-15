import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Divider,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { SwitchLangSearch } from '../../../features/SearchControls/searchLang';

export const ListDrawer = ({ toggleDrawer }): JSX.Element => {
	return (
		<Box
			sx={{ width: 250, padding: '10px' }}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<SwitchLangSearch />
		</Box>
	);
};
