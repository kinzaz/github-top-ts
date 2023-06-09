import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { themeReducer } from './features/theme/theme.slice';
import { controlsReducer } from './features/SearchControls/searchLang.slice';
import { paginationReducer } from './features/pagination/pagination.slice';
import { rootApi } from '@api';

export const store = configureStore({
	reducer: {
		pagination: paginationReducer,
		controls: controlsReducer,
		theme: themeReducer,
		[rootApi.reducerPath]: rootApi.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
