import { createSlice } from "@reduxjs/toolkit";

export const Navigation = createSlice({
    name: 'Navigation',
    initialState: {
        location: '',
        selected: 0
    },
    reducers: {
        setHome: (state) => {
            state.location = 'Home'
        },
        setTickets: (state) => {
            state.location = 'Tickets'
        },
        setUsers: (state) => {
            state.location = 'Users'
        },
        setReports: (state) => {
            state.location = 'Reports'
        },
        setSelectedNavigation: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setHome,
    setReports,
    setTickets,
    setUsers,
    setSelectedNavigation } = Navigation.actions

export default Navigation.reducer