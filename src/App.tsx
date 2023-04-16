import { Container } from '@mui/material';
import { Header, SearchSettingDrawer, Cards } from '@components';
import { containerStyle } from './styles/ContainerStyle';
import { PaginationFeature } from '@features';

const App = (): JSX.Element => {
	return (
		<>
			<Header />
			<Container maxWidth="lg" sx={containerStyle}>
				<SearchSettingDrawer />
				<Cards />
				<PaginationFeature />
			</Container>
		</>
	);
};

export default App;
