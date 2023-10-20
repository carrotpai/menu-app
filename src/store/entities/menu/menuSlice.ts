import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MenuSearchQueryType } from '@/types/menuTypes';

interface MenuSliceStateType {
  limit?: number;
  page?: number;
  active_status?: 'active' | 'inactive';
  menu_name?: string;
  tt_name?: string;
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState: { page: 1, limit: 10 } as MenuSliceStateType,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setActiveStatus: (state, action: PayloadAction<'active' | 'inactive' | undefined>) => {
      state.page = 1;
      state.active_status = action.payload;
    },
    setFilterQuery: (state, action: PayloadAction<MenuSearchQueryType>) => {
      state.page = 1;
      state.menu_name = action.payload.menu_name;
      state.tt_name = action.payload.tt_name;
    },
    resetMenuFilter: (state) => {
      state.active_status = undefined;
      state.page = 1;
      state.menu_name = '';
      state.tt_name = '';
    },
  },
});

export const { setPage, setFilterQuery, setActiveStatus, resetMenuFilter } = menuSlice.actions;
