import {
	selectQuantityContent,
	selectorCurrentLanguage,
	selectorPage,
} from '@features';
import { useSelector } from 'react-redux';
import { TRequest } from '../types/requestType';

export const getRequestArguments = (): TRequest => {
	const language = useSelector(selectorCurrentLanguage);
	const amountContent = useSelector(selectQuantityContent);
	const currentPage = useSelector(selectorPage);

	const lang = language == 'ts' ? 'typescript' : 'javascript';
	const sort = 'stars';
	const order = 'desc';
	const perPage = amountContent;
	const page = currentPage;

	return {
		lang,
		sort,
		order,
		perPage,
		page,
	};
};
