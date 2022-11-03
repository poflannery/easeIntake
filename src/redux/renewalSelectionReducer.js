import { createSlice } from "@reduxjs/toolkit";

export const RenewalSelection = createSlice({
    name: 'Renewal Pages',
    initialState: {
        name: '',
        selected: 0
    },
    reducers: {
        setBasicInformationRenewal: (state) => {
            state.name = 'Basic Information'
        },
        setAdministratorRenewal: (state) => {
            state.name = 'Administrator'
        },
        setEligibilityRenewal: (state) => {
            state.name = 'Eligibility'
        },
        setCoveragesOneRenewal: (state) => {
            state.name = 'CoveragesOne'
        },
        setCoveragesTwoRenewal: (state) => {
            state.name = 'CoveragesTwo'
        },
        setRatesRenewal: (state) => {
            state.name = 'Rates'
        },
        setDeadlinesRenewal: (state) => {
            state.name = 'Deadlines'
        },
        setAdditionalRenewal: (state) => {
            state.name = 'Additional'
        },
        setSelectedBuildSelectionRenewal: (state,action) => {
            state.selected = action.payload
        }
    }
});

export const { 
    setBasicInformationRenewal,
    setAdministratorRenewal,
    setEligibilityRenewal,
    setCoveragesOneRenewal,
    setCoveragesTwoRenewal,
    setRatesRenewal,
    setDeadlinesRenewal,
    setAdditionalRenewal,
    setSelectedBuildSelectionRenewal } = RenewalSelection.actions

export default RenewalSelection.reducer