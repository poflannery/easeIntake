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
        basicLifePlanNumber: '',
        basicLifePlanCarriers: '',
        basicLifeDetails: '',
        volLifePlanNumber: '',
        volLifePlanCarriers: '',
        volLifeDetails: '',
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
        setStdNumberValue: (state,action) => {
            state.stdPlanNumber = action.payload
        },
        setStdCarrierValue: (state,action) => {
            state.stdPlanCarriers = action.payload
        },
        setStdDetailValue: (state,action) => {
            state.stdDetails = action.payload
        },
        setLtdNumberValue: (state,action) => {
            state.ltdPlanNumber = action.payload
        },
        setLtdCarrierValue: (state,action) => {
            state.ltdPlanCarriers = action.payload
        },
        setLtdDetailValue: (state,action) => {
            state.ltdDetails = action.payload
        },
        setAdditionalLifeValue: (state,action) => {
            state.additionalLifeDetails = action.payload
        },
        setRatesValues: (state,action) => {
            state.rates = action.payload
        },
        setbuildDeadlineValues: (state,action) => {
            state.buildDeadline = action.payload
        },
        setOpenEnrollmentValues: (state,action) => {
            state.openEnrollment = action.payload
        },
        setAllOtherDetailsValue: (state,action) => {
            state.allOtherDetails = action.payload
        },
        setFinancialNumberValue: (state,action) => {
            state.financialPlanNumber = action.payload
        },
        setFinancialCarrierValue: (state,action) => {
            state.financialPlanCarriers = action.payload
        },
        setFinancialDetailValue: (state,action) => {
            state.financialDetails = action.payload
        },
        setOtherNumberValue: (state,action) => {
            state.otherPlanNumber = action.payload
        },
        setOtherCarrierValue: (state,action) => {
            state.otherPlanCarriers = action.payload
        },
        setOtherDetailValue: (state,action) => {
            state.otherDetails = action.payload
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
    setVolLifeNumbersValue,
    setStdNumberValue,
    setStdCarrierValue,
    setStdDetailValue,
    setLtdNumberValue,
    setLtdCarrierValue,
    setLtdDetailValue,
    setAdditionalLifeValue,
    setFinancialNumberValue,
    setFinancialCarrierValue,
    setFinancialDetailValue,
    setOtherNumberValue,
    setOtherCarrierValue,
    setOtherDetailValue,
    setRatesValues,
    setbuildDeadlineValues,
    setOpenEnrollmentValues,
    setAllOtherDetailsValue} = NewBuildValues.actions

export default NewBuildValues.reducer