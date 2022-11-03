import { createSlice } from "@reduxjs/toolkit";

export const Resources = createSlice({
    name: 'Resources Sections',
    initialState: {
        name: '',
        selected: 0
    },
    reducers: {
        setProcedures: (state) => {
            state.name = 'Procedures'
        },
        setCarrierConnectionsGuides: (state) => {
            state.name = 'Carrier Connections Guides'
        },
        setHelpfulPackets: (state) => {
            state.name = 'Helpful Packets'
        },
        setDownloads: (state) => {
            state.name = 'Downloads'
        },
        setPayroll: (state) => {
            state.name = 'Payroll'
        },
        setOther: (state) => {
            state.name = 'Other'
        },
        setSelectedBuildSelectionResources: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setProcedures,
    setCarrierConnectionsGuides,
    setHelpfulPackets,
    setDownloads,
    setPayroll,
    setOther,
    setSelectedBuildSelectionResources } = Resources.actions

export default Resources.reducer