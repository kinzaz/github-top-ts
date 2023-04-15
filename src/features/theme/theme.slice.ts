import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: '@@theme',
	initialState: {
		yellowTheme: false,
	},
	reducers: {
		toggleTheme: state => {
			state.yellowTheme = !state.yellowTheme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
