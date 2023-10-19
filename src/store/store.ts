import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithZodValidation, staggeredBaseQuery } from './baseQuery/apiBaseQueries';
import { authSlice } from './entities/auth/authSlice';
import { filialSlice } from './entities/filial/filialSlice';
import { menuSlice } from './entities/menu/menuSlice';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithZodValidation(staggeredBaseQuery),
  tagTypes: ['menu', 'filials'],
  endpoints: () => ({}),
});

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    auth: authSlice.reducer,
    filial: filialSlice.reducer,
    menu: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
