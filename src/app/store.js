import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import authReducer from '../features/login/authSlice';

export const store = configureStore({
  reducer: {
    authData: authReducer, // store for auth
    users: usersReducer // store for users data
  },
  devTools: true,
});
