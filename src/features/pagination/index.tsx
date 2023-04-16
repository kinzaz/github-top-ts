import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import { selectorPage, selectorTotalContent } from './pagination.selector';
import { setPage } from './pagination.slice';
import { useAppDispatch } from '../../store';
import { ChangeEvent } from 'react';
import { selectQuantityContent } from '../SearchControls/searchLang.selector';

export const PaginationFeature = (): JSX.Element => {
	const page = useSelector(selectorPage);
	const totalContent = useSelector(selectorTotalContent);
	const amountContent = useSelector(selectQuantityContent);
	const dispatch = useAppDispatch();
	const handleChange = (_, page: number) => {
		dispatch(setPage(page));
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	// Гитхаб блокирует запрос к более чем 1000 элементу
	const count = Math.ceil(
		(totalContent > 1000 ? 1000 : totalContent) / +amountContent
	);

	return (
		<Pagination
			count={count}
			shape="rounded"
			color="primary"
			page={page}
			onChange={(event: ChangeEvent<unknown>, page: number) =>
				handleChange(event, page)
			}
		/>
	);
};
