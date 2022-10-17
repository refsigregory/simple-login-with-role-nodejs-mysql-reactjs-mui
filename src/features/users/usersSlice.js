import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../../services/users.service";

const initialState = [];

export const retrieveUsers = createAsyncThunk(
  "users/list",
  async () => {
    const res = await usersService.getAll();
    if (res.data) {
        return res.data.data;
    }
    return []
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [retrieveUsers.fulfilled]: (state, action) => {
      return  [ ...(action.payload || []) ];
    },
  },
});

const { reducer } = usersSlice;
export default reducer;
