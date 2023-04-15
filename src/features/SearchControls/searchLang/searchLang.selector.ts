import { RootState } from 'store';

export const selectorCurrentLanguage = (state: RootState) =>
	state.controls.language;
