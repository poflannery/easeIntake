import { createSlice } from "@reduxjs/toolkit";

export const NewBuildValues = createSlice({
    name: 'New Build Entered Values',
    initialState: {
        groupName: '',
        city: '',
        state: '',
        zip: '',
        sicCode: '',
        fein: '',
        website: '',
        adminName: '',
        adminEmail: '',
        eligibilityClasses: '',
        minimumHours: '',
        terminationType: '',
        waitingPeriod: '',
        payroll: '',
        interestedPayroll: '',
        extraEligibility: '',
    },
    reducers: {
        setgroupName: (state,action) => {
            state.groupName = action.payload
        },
        setcity: (state,action) => {
            state.city = action.payload
        },
        setstate: (state,action) => {
            state.state = action.payload
        },
        setzip: (state,action) => {
            state.zip = action.payload
        },
        setsicCode: (state,action) => {
            state.sicCode = action.payload
        },
        setfein: (state,action) => {
            state.fein = action.payload
        },
        setwebsite: (state,action) => {
            state.website = action.payload
        },
        setadminName: (state,action) => {
            state.adminName = action.payload
        },
        setadminEmail: (state,action) => {
            state.adminEmail = action.payload
        },
        seteligibilityClasses: (state,action) => {
            state.eligibilityClasses = action.payload
        },
        setminimumHours: (state,action) => {
            state.minimumHours = action.payload
        },
        setterminationType: (state,action) => {
            state.terminationType = action.payload
        },
        setwaitingPeriod: (state,action) => {
            state.waitingPeriod = action.payload
        },
        setpayroll: (state,action) => {
            state.payroll = action.payload
        },
        setinterestedPayroll: (state,action) => {
            state.interestedPayroll = action.payload
        },
        setextraEligibility: (state,action) => {
            state.extraEligibility = action.payload
        },
    }
});

export const { 
    setgroupName,
    setcity,
    setstate,
    setzip,
    setsicCode,
    setfein,
    setwebsite,
    setadminEmail,
    setadminName,
    seteligibilityClasses,
    setminimumHours,
    setterminationType,
    setwaitingPeriod,
    setpayroll,
    setinterestedPayroll,
    setextraEligibility    } = NewBuildValues.actions

export default NewBuildValues.reducer