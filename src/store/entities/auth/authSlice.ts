import { Roles } from '@/types/rolesTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthUserData {
  token: string;
  role: Roles | undefined;
  isAuthorized: boolean;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    role: 'admin',
    isAuthorized: true,
  } as AuthUserData,
  reducers: {
    setRole: (state, action: PayloadAction<{ role: Roles }>) => {
      state.role = action.payload.role;
    },
  },
});
