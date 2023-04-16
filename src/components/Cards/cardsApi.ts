import { rootApi } from '@api';
import { TRequest } from '../../types/requestType';
import { TResponse } from 'types/responseType';

const requestCards = rootApi.injectEndpoints({
	endpoints: (build) => ({
		getCards: build.query<TResponse, TRequest>({
			query: ({ lang, sort, order, perPage, page }) => {
				return {
					url: `repositories?q=language:${lang}&sort=${sort}&order=${order}&per_page=${perPage}&page=${page}`,
				};
			},
		}),
	}),
});

export const { useGetCardsQuery } = requestCards;
