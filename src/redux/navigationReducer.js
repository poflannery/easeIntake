import { createSlice } from "@reduxjs/toolkit";

export const Navigation = createSlice({
    name: 'Navigation',
    initialState: {
        location: '',
        selected: 0
    },
    reducers: {
        setNewBuildNavigation: (state) => {
            state.location = 'New Build'
        },
        setRenewalNavigation: (state) => {
            state.location = 'Renewal'
        },
        setMySavedNavigation: (state) => {
            state.location = 'My Saved'
        },
        setResourcesNavigation: (state) => {
            state.location = 'Resources'
        },
        setQueueNavigation: (state) => {
            state.location = 'Queue'
        },
        setUploadDocsNavigation: (state) => {
            state.location = 'Upload Docs'
        },
        setSelectedNavigation: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setNewBuildNavigation,
    setRenewalNavigation,
    setMySavedNavigation,
    setResourcesNavigation,
    setQueueNavigation,
    setUploadDocsNavigation,
    setSelectedNavigation } = Navigation.actions

export default Navigation.reducer