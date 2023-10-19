import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface MenuSliceStateType {
  limit?: number;
  page?: number;
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { page: 1, limit: 10 } as MenuSliceStateType,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = menuSlice.actions;
