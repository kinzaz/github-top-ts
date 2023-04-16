import {
	selectQuantityContent,
	selectorCurrentLanguage,
} from '../features/SearchControls/searchLang.selector';
import { selectorPage } from '../features/pagination/pagination.selector';
import { useSelector } from 'react-redux';

export const getRequestArguments = () => {
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
