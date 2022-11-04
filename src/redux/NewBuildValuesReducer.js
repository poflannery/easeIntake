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
        medicalPlanNumber: '',
        medicalPlanCarriers: '',
        medicalDetails: '',
        dentalPlanNumber: '',
        dentalPlanCarriers: '',
        dentalDetails: '',
        visionPlanNumber: '',
        visionPlanCarriers: '',
        visionDetails: '',
        //
        basicLifePlanNumber: '',
        basicLifePlanCarriers: '',
        basicLifeDetails: '',
        volLifePlanNumber: '',
        volLifePlanCarriers: '',
        volLifeDetails: '',
        //
        stdPlanNumber: '',
        stdPlanCarriers: '',
        stdDetails: '',
        ltdPlanNumber: '',
        ltdPlanCarriers: '',
        ltdDetails: '',
        additionalLifeDetails: '',
        financialPlanNumber: '',
        financialPlanCarriers: '',
        financialDetails: '',
        otherPlanNumber: '',
        otherPlanCarriers: '',
        otherDetails: '',
        rates: '',
        buildDeadline: '',
        openEnrollment: '',
        allOtherDetails: ''
    },
    reducers: {
        setGroupNameValue: (state,action) => {
            state.groupName = action.payload
        },
        setCityValue: (state,action) => {
            state.city = action.payload
        },
        setStateValue: (state,action) => {
            state.state = action.payload
        },
        setZipValue: (state,action) => {
            state.zip = action.payload
        },
        setSicCodeValue: (state,action) => {
            state.sicCode = action.payload
        },
        setFeinValue: (state,action) => {
            state.fein = action.payload
        },
        setWebsiteValue: (state,action) => {
            state.website = action.payload
        },
        setAdminNameValue: (state,action) => {
            state.adminName = action.payload
        },
        setAdminEmailValue: (state,action) => {
            state.adminEmail = action.payload
        },
        setEligibilityClassesValue: (state,action) => {
            state.eligibilityClasses = action.payload
        },
        setMinimumHoursValue: (state,action) => {
            state.minimumHours = action.payload
        },
        setTerminationTypeValue: (state,action) => {
            state.terminationType = action.payload
        },
        setWaitingPeriodValue: (state,action) => {
            state.waitingPeriod = action.payload
        },
        setPayrollValue: (state,action) => {
            state.payroll = action.payload
        },
        setInterestedPayrollValue: (state,action) => {
            state.interestedPayroll = action.payload
        },
        setExtraEligibilityValue: (state,action) => {
            state.extraEligibility = action.payload
        },
        setVisionCarriersValue: (state,action) => {
            state.visionPlanCarriers = action.payload
        },
        setVisionNumberValue: (state,action) => {
            state.visionPlanNumber = action.payload
        },
        setVisionDetailsValue: (state,action) => {
            state.visionDetails = action.payload
        },
        setDentalNumberValue: (state,action) => {
            state.dentalPlanNumber = action.payload
        },
        setDentalCarriersValue: (state,action) => {
            state.dentalPlanCarriers = action.payload
        },
        setDentalDetailsValue: (state,action) => {
            state.dentalDetails = action.payload
        },
        setMedicalDetailsValue: (state,action) => {
            state.medicalDetails = action.payload
        },
        setMedicalCarriersValue: (state,action) => {
            state.medicalPlanCarriers = action.payload
        },
        setMedicalNumberValue: (state,action) => {
            state.medicalPlanNumber = action.payload
        },
        setBasicLifeNumbersValue: (state,action) => {
            state.basicLifePlanNumber = action.payload
        },
        setBasicLifeCarriersValue: (state,action) => {
            state.basicLifePlanCarriers = action.payload
        },
        setBasicLifeDetailsValue: (state,action) => {
            state.basicLifeDetails = action.payload
        },
        setVolLifeNumbersValue: (state,action) => {
            state.volLifePlanNumber = action.payload
        },
        setVolLifeCarriersValue: (state,action) => {
            state.volLifePlanCarriers = action.payload
        },
        setVolLifeDetailsValue: (state,action) => {
            state.volLifeDetails = action.payload
        },
    }
});

export const { 
    setGroupNameValue,
    setCityValue,
    setStateValue,
    setZipValue,
    setSicCodeValue,
    setFeinValue,
    setWebsiteValue,
    setAdminEmailValue,
    setAdminNameValue,
    setEligibilityClassesValue,
    setMinimumHoursValue,
    setTerminationTypeValue,
    setWaitingPeriodValue,
    setPayrollValue,
    setInterestedPayrollValue,
    setExtraEligibilityValue,
    setVisionCarriersValue,
    setVisionNumberValue,
    setVisionDetailsValue,
    setDentalNumberValue,
    setDentalCarriersValue,
    setDentalDetailsValue,
    setMedicalDetailsValue,
    setMedicalCarriersValue,
    setMedicalNumberValue,
    setBasicLifeDetailsValue,
    setBasicLifeCarriersValue,
    setBasicLifeNumbersValue,
    setVolLifeCarriersValue,
    setVolLifeDetailsValue,
    setVolLifeNumbersValue    } = NewBuildValues.actions

export default NewBuildValues.reducer