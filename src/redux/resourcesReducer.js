import { createSlice } from "@reduxjs/toolkit";

export const Resources = createSlice({
    name: 'Resources Sections',
    initialState: {
        name: ''
    },
    reducers: {
        setProceduresRedux: (state) => {
            state.name = 'Procedures'
        },
        setCarrierConnectionsGuidesRedux: (state) => {
            state.name = 'Carrier Connections Guides'
        },
        setHelpfulPacketsRedux: (state) => {
            state.name = 'Helpful Packets'
        },
        setDownloadsRedux: (state) => {
            state.name = 'Downloads'
        },
        setPayrollRedux: (state) => {
            state.name = 'Payroll'
        },
        setOtherRedux: (state) => {
            state.name = 'Other'
        }
    }
});

export const { 
    setProceduresRedux,
    setCarrierConnectionsGuidesRedux,
    setHelpfulPacketsRedux,
    setDownloadsRedux,
    setPayrollRedux,
    setOtherRedux } = Resources.actions

export default Resources.reducer