import { Container } from '@mui/material';
import { Header } from './components';
import { Cards } from './components/Cards';
import { containerStyle } from './styles/ContainerStyle';
import { PaginationFeature } from './features/pagination';
import { SearchSettingDrawer } from './components/Drawer';

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
