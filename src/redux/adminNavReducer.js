import { createSlice } from "@reduxjs/toolkit";

export const AdminNav = createSlice({
    name: 'Admin Navigation',
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
    setSelectedNavigationAdmin } = AdminNav.actions

export default AdminNav.reducer