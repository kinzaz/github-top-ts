import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { SearchSettingsBtn } from './ui/SearchSettingsBtn';
import { DRAWER_BTN } from './constants';
import { ListDrawer } from './ui/ListDrawer';
import { useToggleDrawer } from './useToggleDrawer';

export const SearchSettingDrawer = () => {
	const { state, toggleDrawer } = useToggleDrawer();

	return (
		<Box sx={{ alignSelf: 'flex-end' }}>
			<SearchSettingsBtn textField={DRAWER_BTN} onClick={toggleDrawer(true)} />
			<Drawer open={state} onClose={toggleDrawer(false)}>
				<ListDrawer toggleDrawer={toggleDrawer} />
			</Drawer>
		</Box>
	);
};
