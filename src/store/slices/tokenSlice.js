import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {token:""},
  reducers: {
    setToken: (state, action) => {
      console.log(action.payload)
      state.token = action.payload;
    },
    logout: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, logout } = tokenSlice.actions;
export const selectToken = (state) => state.token.token;
export default tokenSlice.reducer;
