import { configureStore } from '@reduxjs/toolkit';
import { paginationReducer } from './features/pagination/pagination.slice';
import { useDispatch } from 'react-redux';
import { controlsReducer } from './features/SearchControls/searchLang/searchLang.slice';

export const store = configureStore({
	reducer: {
		pagination: paginationReducer,
		controls: controlsReducer,
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
