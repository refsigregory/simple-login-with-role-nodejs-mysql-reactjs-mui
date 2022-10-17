import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const authSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    setAuth: (state, newData) => {
      state.data = newData;
    },
    clearAuth: (state) => {
      state.data = {};
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export const getAuthData = (state) => state.data;

export default authSlice.reducer;
