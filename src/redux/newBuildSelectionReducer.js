import { createSlice } from "@reduxjs/toolkit";

export const BuildSelection = createSlice({
    name: 'Build Sidebar selection to populate fields',
    initialState: {
        name: '',
        selected: 0
    },
    reducers: {
        setBasicInformation: (state) => {
            state.name = 'Basic Information'
        },
        setAdministrator: (state) => {
            state.name = 'Administrator'
        },
        setEligibility: (state) => {
            state.name = 'Eligibility'
        },
        setCoveragesOne: (state) => {
            state.name = 'CoveragesOne'
        },
        setCoveragesTwo: (state) => {
            state.name = 'CoveragesTwo'
        },
        setCoveragesThree: (state) => {
            state.name = 'CoveragesThree'
        },
        setCoveragesFour: (state) => {
            state.name = 'CoveragesFour'
        },
        setCoveragesFive: (state) => {
            state.name = 'CoveragesFive'
        },
        setRates: (state) => {
            state.name = 'Rates'
        },
        setDeadlines: (state) => {
            state.name = 'Deadlines'
        },
        setAdditional: (state) => {
            state.name = 'Additional'
        },
        setSelectedBuildSelection: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setBasicInformation,
    setAdministrator,
    setEligibility,
    setCoveragesOne,
    setCoveragesTwo,
    setCoveragesThree,
    setCoveragesFour,
    setCoveragesFive,
    setRates,
    setDeadlines,
    setAdditional,
    setSelectedBuildSelection } = BuildSelection.actions

export default BuildSelection.reducer