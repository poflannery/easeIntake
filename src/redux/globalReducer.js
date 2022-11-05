import { createSlice } from "@reduxjs/toolkit";

export const Global = createSlice({
    name: 'Resources Sections',
    initialState: {
        text: 'Notifications will appear here when needed!',
        user: ''
    },
    reducers: {
        setNoticeBarText: (state,action) => {
            state.text = action.payload
        },
        setUserGlobal: (state,action) => {
            state.user = action.payload
        }
    }
});

export const { 
    setNoticeBarText,
    setUserGlobal } = Global.actions

export default Global.reducer