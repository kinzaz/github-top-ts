import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TPaginationSlice = {
	perPage: number;
	page: number;
};

const initialState: TPaginationSlice = {
	perPage: 10,
	page: 1,
};

const paginationSlice = createSlice({
	name: '@@pagination',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setPerPage: (state, action: PayloadAction<number>) => {
			state.perPage = action.payload;
		},
	},
});

export const { setPage, setPerPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
