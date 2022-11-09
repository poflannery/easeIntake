import { createSlice } from "@reduxjs/toolkit";

export const Global = createSlice({
    name: 'Resources Sections',
    initialState: {
        text: 'Notifications will appear here when needed!',
        user: '',
        savedIntakeIndex: 0,
        newUserGuide: false
    },
    reducers: {
        setNoticeBarText: (state,action) => {
            state.text = action.payload
        },
        setUserGlobal: (state,action) => {
            state.user = action.payload
        },
        setIntakeIndex: (state,action) => {
            state.savedIntakeIndex = action.payload
        },
        setNewUserGuide: (state) => {
            state.newUserGuide = true
        }
    }
});

export const { 
    setNoticeBarText,
    setUserGlobal,
    setIntakeIndex,
    setNewUserGuide } = Global.actions

export default Global.reducer