import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
