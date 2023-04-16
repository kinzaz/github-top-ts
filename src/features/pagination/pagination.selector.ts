import { RootState } from '../../store';

export const selectorPage = (state: RootState) => state.pagination.page;
export const selectorTotalContent = (state: RootState) =>
	state.pagination.totalContent;
