import { createSlice } from "@reduxjs/toolkit";

const initialState = null

export const authSlice  = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedIn: state => {
            state =  true
        },
        loggedOut: state => state = null
    }
})

export const {loggedIn, loggedOut} = authSlice.actions

export default authSlice.reducer