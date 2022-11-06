import { createSlice } from "@reduxjs/toolkit";

export const RenewalValues = createSlice({
    name: 'Renewal Values',
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
        eligbilityChangeDetails: '',
        otherPlanChange: false,
        otherChangeDetails: '',
        medicalChange: false,
        medicalChangeDetails: '',
        dentalChange: false,
        dentalChangeDetails: '',
        visionChange: false,
        visionChangeDetails: '',
        rateChangeDetails: '',
        buildDeadline: '',
        enrollmentDates: '',
        additionalNotes: ''
    },
    reducers: {
        setGroupNameRenewal: (state,action) => {
            state.groupName = action.payload
        },
        setCityRenewal: (state,action) => {
            state.city = action.payload
        },
        setStateRenewal: (state,action) => {
            state.state = action.payload
        },
        setZipRenewal: (state,action) => {
            state.zip = action.payload
        },
        setSicCodeRenewal: (state,action) => {
            state.sicCode = action.payload
        },
        setFeinRenewal: (state,action) => {
            state.fein = action.payload
        },
        setWebsiteRenewal: (state,action) => {
            state.website = action.payload
        },
        setAdminNameRenewal: (state,action) => {
            state.adminName = action.payload
        },
        setAdminEmailRenewal: (state,action) => {
            state.adminEmail = action.payload
        },
        setEligibilityChangeRenewal: (state,action) => {
            state.eligbilityChangeDetails = action.payload
        },
        setOtherPlanChangeRenewal: (state,action) => {
            state.groupName = action.payload
        },
        setOtherPlanDetailsRenewal: (state,action) => {
            state.groupName = action.payload
        },
        setMedicalChangeRenewal: (state) => {
            state.medicalChange = !state.medicalChange
        },
        setMedicalChangeDetailsRenewal: (state,action) => {
            state.medicalChangeDetails = action.payload
        },
        setDentalChangeRenewal: (state) => {
            state.dentalChange = !state.dentalChange
        },
        setDentalChangeDetailsRenewal: (state,action) => {
            state.dentalChangeDetails = action.payload
        },
        setVisionChangeRenewal: (state) => {
            state.visionChange = !state.visionChange
        },
        setVisionChangeDetailsRenewal: (state,action) => {
            state.visionChangeDetails = action.payload
        },
        setRatesChangeDetailsRenewal: (state,action) => {
            state.rateChangeDetails = action.payload
        },
        setBuildDeadlineRenewal: (state,action) => {
            state.buildDeadline = action.payload
        },
        setEnrollmentDatesRenewal: (state,action) => {
            state.enrollmentDates = action.payload
        },
        setAdditionalNotesRenewal: (state,action) => {
            state.additionalNotes = action.payload
        }
    }
});

export const { 
    setGroupNameRenewal,
    setCityRenewal,
    setStateRenewal,
    setZipRenewal,
    setSicCodeRenewal,
    setFeinRenewal,
    setWebsiteRenewal,
    setAdminEmailRenewal, 
    setAdminNameRenewal,
    setEligibilityChangeRenewal,
    setOtherPlanChangeRenewal,
    setOtherPlanDetailsRenewal,
    setRatesChangeDetailsRenewal,
    setBuildDeadlineRenewal,
    setEnrollmentDatesRenewal,
    setAdditionalNotesRenewal,
    setMedicalChange,
    setMedicalChangeDetails,
    setDentalChange,
    setDentalChangeDetails,
    setVisionChange,
    setVisionChangeDetails } = RenewalValues.actions

export default RenewalValues.reducer