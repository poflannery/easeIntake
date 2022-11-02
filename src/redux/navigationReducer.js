import { createSlice } from "@reduxjs/toolkit";

export const Navigation = createSlice({
    name: 'Navigation',
    initialState: {
        location: '',
        selected: 0
    },
    reducers: {
        setNewBuild: (state) => {
            state.location = 'New Build'
        },
        setRenewal: (state) => {
            state.location = 'Renewal'
        },
        setMySaved: (state) => {
            state.location = 'My Saved'
        },
        setResources: (state) => {
            state.location = 'Resources'
        },
        setQueue: (state) => {
            state.location = 'Queue'
        },
        setUploadDocs: (state) => {
            state.location = 'Upload Docs'
        },
        setSelectedNavigation: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setNewBuild,
    setRenewal,
    setMySaved,
    setResources,
    setQueue,
    setUploadDocs,
    setSelectedNavigation } = Navigation.actions

export default Navigation.reducer