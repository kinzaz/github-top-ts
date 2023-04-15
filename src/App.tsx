import { Container } from '@mui/material';
import { Header } from './components';
import { Cards } from './components/Cards';
import { Wrapper } from './components/UI/Wrapper';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Header />
				<Container maxWidth="lg">
					<Wrapper>
						<Cards />
					</Wrapper>
				</Container>
			</QueryClientProvider>
		</>
	);
};

export default App;
