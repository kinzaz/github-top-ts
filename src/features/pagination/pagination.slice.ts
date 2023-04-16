import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TPaginationSlice = {
	page: number;
	totalContent: number;
};

const initialState: TPaginationSlice = {
	page: 1,
	totalContent: 0,
};

const paginationSlice = createSlice({
	name: '@@pagination',
	initialState,
	reducers: {
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		setTotalContent: (state, action: PayloadAction<number>) => {
			state.totalContent = action.payload;
		},
	},
});

const { setPage, setTotalContent } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export { setPage, setTotalContent, paginationReducer };
