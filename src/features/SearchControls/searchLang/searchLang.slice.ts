import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TSearchByLang, dataLang } from './data.content';

type TPaginationSlice = {
	language: TSearchByLang['value'];
};

const initialState: TPaginationSlice = {
	language: dataLang[0]['value'],
};

const controlsSlice = createSlice({
	name: '@@controls',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<TSearchByLang['value']>) => {
			state.language = action.payload;
		},
	},
});

export const { setLanguage } = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;
