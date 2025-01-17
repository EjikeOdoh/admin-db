import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { user: null },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
