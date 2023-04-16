import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TSearchByLang, dataLang } from './searchLang/data.content';

type TPaginationSlice = {
	language: TSearchByLang['value'];
	quantity: string;
};

const initialState: TPaginationSlice = {
	language: dataLang[0]['value'],
	quantity: '9',
};

const controlsSlice = createSlice({
	name: '@@controls',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<TSearchByLang['value']>) => {
			state.language = action.payload;
		},
		setQuantityContent: (state, action: PayloadAction<string>) => {
			state.quantity = action.payload;
		},
	},
});

export const { setLanguage, setQuantityContent } = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;
