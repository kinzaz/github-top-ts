import { rootApi } from '../../api/rootApi';

const requestCards = rootApi.injectEndpoints({
	endpoints: build => ({
		getCards: build.query<any, any>({
			query: ({ lang, sort, order, perPage, page }) => {
				return {
					url: `repositories?q=language:${lang}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`,
				};
			},
		}),
	}),
});

export const { useGetCardsQuery } = requestCards;
