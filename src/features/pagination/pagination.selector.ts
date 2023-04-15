import { RootState } from '../../store';

export const selectorPagination = (state: RootState) => state.pagination;
export const selectorPage = (state: RootState) => state.pagination.page;
export const selectorPerPage = (state: RootState) => state.pagination.perPage;
