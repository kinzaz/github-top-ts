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

const { toggleTheme } = themeSlice.actions;

const themeReducer = themeSlice.reducer;

export { toggleTheme, themeReducer };
