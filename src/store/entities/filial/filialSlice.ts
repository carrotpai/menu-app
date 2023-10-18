import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilialType } from '@/types/filialTypes';

type FilialSliceStateType = {
  currentFilial?: FilialType;
};

export const filialSlice = createSlice({
  name: 'filial',
  initialState: { currentFilial: undefined } as FilialSliceStateType,
  reducers: {
    setCurrentFilial: (state, action: PayloadAction<FilialType>) => {
      state.currentFilial = action.payload;
    },
  },
});

export const { setCurrentFilial } = filialSlice.actions;
