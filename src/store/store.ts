import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './entities/auth/authSlice';
import { filialApi } from './entities/filial/filialApi';
import { menuApi } from './entities/menu/menuApi';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [filialApi.reducerPath]: filialApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filialApi.middleware).concat(menuApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
