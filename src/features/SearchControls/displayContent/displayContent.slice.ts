import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TDisplayContentSlice = {
	quantity: string;
};

const initialState: TDisplayContentSlice = {
	quantity: '9',
};

export const displayContentSlice = createSlice({
	name: '@@displayContent',
	initialState,
	reducers: {
		setQuantityContent: (state, action: PayloadAction<string>) => {
			state.quantity = action.payload;
		},
	},
});

export const { setQuantityContent } = displayContentSlice.actions;

export const displayContentReducer = displayContentSlice.reducer;
