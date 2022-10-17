import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import authReducer from '../features/login/authSlice';

export const store = configureStore({
  reducer: {
    authData: authReducer,
    users: usersReducer
  },
  devTools: true,
});
