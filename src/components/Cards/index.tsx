import { Grid } from '@mui/material';
import { CardItem } from '..//Card';
import { useQuery } from 'react-query';
import { getReposTS } from '../../api/rootApi';
import { CardSkeleton } from '../UI/CardSkeleton';
import { mock } from '../../mock';
import Alert from '@mui/material/Alert';
import { ErrorMessage } from './constants';

export const Cards = (): JSX.Element => {
	const { data, isLoading, isError } = useQuery('todos', async () => {
		// const response = await getReposTS();
		// return response.items;
	});

	if (isLoading) {
		return <CardSkeleton />;
	}
	if (isError) {
		return (
			<Alert variant="filled" severity="error">
				{ErrorMessage}
			</Alert>
		);
	}

	return (
		<Grid container spacing={3}>
			{mock.map(card => {
				return (
					<Grid key={card.id} item xs={12} sm={6} md={4} gap={5}>
						<CardItem
							avatar={card.owner.avatar_url}
							repoName={card.full_name}
							createdAt={card.created_at}
							linkToRepo={card.html_url}
							description={card.description}
							forksCount={card.forks_count}
							homePage={card.homepage}
							language={card.language}
							stars={card.stargazers_count}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};
