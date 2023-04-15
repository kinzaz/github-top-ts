import { RootState } from '../../../store';

export const selectQuantityContent = (state: RootState) =>
	state.displayContent.quantity;
