import { createSlice } from "@reduxjs/toolkit";

export const RenewalValues = createSlice({
    name: 'Renewal Values',
    initialState: {
        medicalChange: false,
        medicalChangeDetails: '',
        dentalChange: false,
        dentalChangeDetails: '',
        visionChange: false,
        visionChangeDetails: ''
    },
    reducers: {
        setMedicalChange: (state) => {
            state.medicalChange = !state.medicalChange
        },
        setMedicalChangeDetails: (state,action) => {
            state.medicalChangeDetails = action.payload
        },
        setDentalChange: (state) => {
            state.dentalChange = !state.dentalChange
        },
        setDentalChangeDetails: (state,action) => {
            state.dentalChangeDetails = action.payload
        },
        setVisionChange: (state) => {
            state.visionChange = !state.visionChange
        },
        setVisionChangeDetails: (state,action) => {
            state.visionChangeDetails = action.payload
        }
    }
});

export const { 
    setMedicalChange,
    setMedicalChangeDetails,
    setDentalChange,
    setDentalChangeDetails,
    setVisionChange,
    setVisionChangeDetails } = RenewalValues.actions

export default RenewalValues.reducer