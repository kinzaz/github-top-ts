import { RootState } from '@store';

export const selectorCurrentLanguage = (state: RootState) =>
	state.controls.language;

export const selectQuantityContent = (state: RootState) =>
	state.controls.quantity;
