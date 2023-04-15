import { configureStore } from '@reduxjs/toolkit';
import { paginationReducer } from './features/pagination/pagination.slice';
import { useDispatch } from 'react-redux';
import { controlsReducer } from './features/SearchControls/searchLang/searchLang.slice';
import { themeReducer } from './features/theme/theme.slice';
import { displayContentReducer } from './features/SearchControls/displayContent/displayContent.slice';

export const store = configureStore({
	reducer: {
		pagination: paginationReducer,
		controls: controlsReducer,
		theme: themeReducer,
		displayContent: displayContentReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
