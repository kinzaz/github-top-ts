import { Grid } from '@mui/material';
import { CardItem } from '..//Card';
import { CardSkeleton } from '../UI/CardSkeleton';
import { mock } from '../../mock';
import Alert from '@mui/material/Alert';
import { ErrorMessage } from './constants';
import { useGetCardsQuery } from './cardsApi';
import { getRequestArguments } from '../../helpers/getRequestArguments';
import { useAppDispatch } from '../../store';
import { setTotalContent } from '../../features/pagination/pagination.slice';

export const Cards = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const {
		data: cards,
		isLoading,
		isFetching,
		isError,
		isSuccess,
	} = useGetCardsQuery(getRequestArguments());

	if (isLoading || isFetching) {
		return <CardSkeleton />;
	}
	if (isError) {
		return (
			<Alert variant="filled" severity="error">
				{ErrorMessage}
			</Alert>
		);
	}
	if (isSuccess) {
		dispatch(setTotalContent(cards.total_count));
	}

	return (
		<Grid container spacing={3}>
			{cards.items.map(card => {
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
