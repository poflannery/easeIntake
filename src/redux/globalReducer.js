import { createSlice } from "@reduxjs/toolkit";

export const Global = createSlice({
    name: 'Resources Sections',
    initialState: {
        text: 'Notifications will appear here when needed. Thank you!'
    },
    reducers: {
        setNoticeBarText: (state,action) => {
            state.text = action.payload
        }
    }
});

export const { 
    setNoticeBarText } = Global.actions

export default Global.reducer