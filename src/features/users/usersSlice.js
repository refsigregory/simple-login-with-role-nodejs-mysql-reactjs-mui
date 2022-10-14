import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersService from "../../services/users.service";

const initialState = [];

/* export const createUsers = createAsyncThunk(
  "users/create",
  async ({ title, description }) => {
    const res = await usersService.create({ title, description });
    return res.data;
  }
); */

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

/* export const updateUsers = createAsyncThunk(
  "users/update",
  async ({ id, data }) => {
    const res = await usersService.update(id, data);
    return res.data;
  }
);

export const deleteUsers = createAsyncThunk(
  "users/delete",
  async ({ id }) => {
    await usersService.delete(id);
    return { id };
  }
);

export const deleteAllUsers = createAsyncThunk(
  "users/deleteAll",
  async () => {
    const res = await usersService.deleteAll();
    return res.data;
  }
);

export const findUsersByTitle = createAsyncThunk(
  "users/findByTitle",
  async ({ title }) => {
    const res = await usersService.findByTitle(title);
    return res.data;
  }
); */

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
/*     [createUsers.fulfilled]: (state, action) => {
      state.push(action.payload);
    }, */
    [retrieveUsers.fulfilled]: (state, action) => {
      return  [ ...(action.payload || []) ];
    },
/*     [updateUsers.fulfilled]: (state, action) => {
      const index = state.findIndex(users => users.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
    [deleteUsers.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllUsers.fulfilled]: (state, action) => {
      return [];
    },
    [findUsersByTitle.fulfilled]: (state, action) => {
      return [...action.payload];
    }, */
  },
});

const { reducer } = usersSlice;
export default reducer;
