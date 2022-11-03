import { createSlice } from "@reduxjs/toolkit";

export const NewBuildSelection = createSlice({
    name: 'Build Sidebar selection to populate fields',
    initialState: {
        name: '',
    },
    reducers: {
        setBasicInformationNewBuild: (state) => {
            state.name = 'Basic Information'
        },
        setAdministratorNewBuild: (state) => {
            state.name = 'Administrator'
        },
        setEligibilityNewBuild: (state) => {
            state.name = 'Eligibility'
        },
        setCoveragesOneNewBuild: (state) => {
            state.name = 'CoveragesOne'
        },
        setCoveragesTwoNewBuild: (state) => {
            state.name = 'CoveragesTwo'
        },
        setCoveragesThreeNewBuild: (state) => {
            state.name = 'CoveragesThree'
        },
        setCoveragesFourNewBuild: (state) => {
            state.name = 'CoveragesFour'
        },
        setCoveragesFiveNewBuild: (state) => {
            state.name = 'CoveragesFive'
        },
        setRatesNewBuild: (state) => {
            state.name = 'Rates'
        },
        setDeadlinesNewBuild: (state) => {
            state.name = 'Deadlines'
        },
        setAdditionalNewBuild: (state) => {
            state.name = 'Additional'
        }
    }
});

export const { 
    setBasicInformationNewBuild,
    setAdministratorNewBuild,
    setEligibilityNewBuild,
    setCoveragesOneNewBuild,
    setCoveragesTwoNewBuild,
    setCoveragesThreeNewBuild,
    setCoveragesFourNewBuild,
    setCoveragesFiveNewBuild,
    setRatesNewBuild,
    setDeadlinesNewBuild,
    setAdditionalNewBuild } = NewBuildSelection.actions

export default NewBuildSelection.reducer