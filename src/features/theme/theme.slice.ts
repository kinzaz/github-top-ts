import { createSlice } from '@reduxjs/toolkit';

type TThemeSlice = {
	yellowTheme: boolean;
};

const initialState: TThemeSlice = {
	yellowTheme: false,
};

export const themeSlice = createSlice({
	name: '@@theme',
	initialState,
	reducers: {
		toggleTheme: state => {
			state.yellowTheme = !state.yellowTheme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
