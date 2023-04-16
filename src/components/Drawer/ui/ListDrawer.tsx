import { Box, Divider } from '@mui/material';
import { SwitchLangSearch, DisplaySelect } from '@features';
import { styled } from '@mui/material/styles';

const ListDrawerWrapper = styled(Box)`
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 25px;
	width: auto;
	min-width: 250px;
`;

export const ListDrawer = ({
	toggleDrawer,
}: {
	toggleDrawer: (
		open: boolean
	) => (
		event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
	) => void;
}): JSX.Element => {
	return (
		<ListDrawerWrapper
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<SwitchLangSearch />
			<Divider />
			<DisplaySelect />
		</ListDrawerWrapper>
	);
};
