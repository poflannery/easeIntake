import { Button, MenuItem, TextField } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { collection, query } from 'firebase/firestore'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase/config'
import { setIntakeIndex } from '../../../redux/globalReducer'
import { setNewBuildNavigation, setRenewalNavigation } from '../../../redux/navigationReducer'
import { setAdditionalLifeValue, setAdminEmailValue, setAdminNameValue, setAllOtherDetailsValue, setBasicLifeCarriersValue, setBasicLifeDetailsValue, setBasicLifeNumbersValue, setbuildDeadlineValues, setCityValue, setDentalCarriersValue, setDentalDetailsValue, setDentalNumberValue, setEligibilityClassesValue, setExtraEligibilityValue, setFeinValue, setFinancialCarrierValue, setFinancialDetailValue, setFinancialNumberValue, setGroupNameValue, setInterestedPayrollValue, setLtdCarrierValue, setLtdDetailValue, setLtdNumberValue, setMedicalCarriersValue, setMedicalDetailsValue, setMedicalNumberValue, setMinimumHoursValue, setOpenEnrollmentValues, setOtherCarrierValue, setOtherDetailValue, setOtherNumberValue, setPayrollValue, setRatesValues, setSicCodeValue, setStateValue, setStdCarrierValue, setStdDetailValue, setStdNumberValue, setTerminationTypeValue, setVisionCarriersValue, setVisionDetailsValue, setVisionNumberValue, setVolLifeCarriersValue, setVolLifeDetailsValue, setVolLifeNumbersValue, setWaitingPeriodValue, setWebsiteValue, setZipValue } from '../../../redux/NewBuildValuesReducer'

import { setCityRenewal, setGroupNameRenewal,setStateRenewal,setZipRenewal,setSicCodeRenewal,setFeinRenewal,setWebsiteRenewal,setAdminEmailRenewal,setAdminNameRenewal,setEligibilityChangeRenewal,setOtherPlanChangeRenewal,setOtherPlanDetailsRenewal,setRatesChangeDetailsRenewal,setBuildDeadlineRenewal,setEnrollmentDatesRenewal,setAdditionalNotesRenewal,setMedicalChangeRenewal,setMedicalChangeDetailsRenewal,setDentalChangeDetailsRenewal,setDentalChangeRenewal,setVisionChangeDetailsRenewal,setVisionChangeRenewal} from '../../../redux/renewalValuesReducer'

export default function MySaved() {

// local states
const [disabledButton,setDisabledButton] = useState(true)
const store = useSelector(state => state.global)
const dispatch = useDispatch();

const userRef = query(collection(db, `saved/_/${store.user}`));
const userCollection = useFirestoreQuery([`saved/_/${store.user}`], userRef, {
  subscribe: true, 
  includeMetadataChanges: true
})

// methods
const handleUserSelect = (event) => {
  setDisabledButton(false);
  dispatch(setIntakeIndex(event.target.getAttribute("index")))
}
const handleRetrieveIntake = () => {
  setDisabledButton(true)
  const doc = userData.docs[store.savedIntakeIndex].data()
  console.log(doc)
  if (doc.type && doc.type === 'Renewal') {
    dispatch(setGroupNameRenewal(doc.groupName === undefined ? '' : doc.groupName))
    dispatch(setCityRenewal(doc.city === undefined ? '' : doc.city))
    dispatch(setStateRenewal(doc.state === undefined ? '' : doc.state))
    dispatch(setZipRenewal(doc.zip === undefined ? '' : doc.zip))
    dispatch(setSicCodeRenewal(doc.sicCode === undefined ? '' : doc.sicCode))
    dispatch(setFeinRenewal(doc.fein === undefined ? '' : doc.fein))
    dispatch(setWebsiteRenewal(doc.website === undefined ? '' : doc.website))
    dispatch(setAdminEmailRenewal(doc.adminEmail === undefined ? '' : doc.adminEmail))
    dispatch(setAdminNameRenewal(doc.adminName === undefined ? '' : doc.adminName))
    dispatch(setEligibilityChangeRenewal(doc.eligbilityChangeDetails === undefined ? '' : doc.eligbilityChangeDetails))
    dispatch(setOtherPlanChangeRenewal(doc.otherPlanChange === undefined ? '' : doc.otherPlanChange))
    dispatch(setOtherPlanDetailsRenewal(doc.otherChangeDetails === undefined ? '' : doc.otherChangeDetails))
    dispatch(setRatesChangeDetailsRenewal(doc.rateChangeDetails === undefined ? '' : doc.rateChangeDetails))
    dispatch(setBuildDeadlineRenewal(doc.buildDeadline === undefined ? '' : doc.buildDeadline))
    dispatch(setEnrollmentDatesRenewal(doc.enrollmentDates === undefined ? '' : doc.enrollmentDates))
    dispatch(setAdditionalNotesRenewal(doc.additionalNotes === undefined ? '' : doc.additionalNotes))
    dispatch(setMedicalChangeRenewal(doc.medicalChange === undefined ? '' : doc.medicalChange))
    dispatch(setMedicalChangeDetailsRenewal(doc.medicalDetails === undefined ? '' : doc.medicalDetails))
    dispatch(setDentalChangeRenewal(doc.dentalChange === undefined ? '' : doc.dentalChange))
    dispatch(setDentalChangeDetailsRenewal(doc.dentalDetails === undefined ? '' : doc.dentalDetails))
    dispatch(setVisionChangeRenewal(doc.visionChange === undefined ? '' : doc.visionChange))
    dispatch(setVisionChangeDetailsRenewal(doc.visionDetails === undefined ? '' : doc.visionDetails))

    setTimeout(() => {
      dispatch(setRenewalNavigation())
    },1500)
  }
  else {
  dispatch(setGroupNameValue(doc.groupName === undefined ? '' : doc.groupName));
  dispatch(setCityValue(doc.city === undefined ? '' : doc.city));
  dispatch(setStateValue(doc.state === undefined ? '' : doc.state));
  dispatch(setZipValue(doc.zip === undefined ? '' : doc.zip));
  dispatch(setSicCodeValue(doc.sicCode === undefined ? '' : doc.sicCode));
  dispatch(setFeinValue(doc.fein === undefined ? '' : doc.fein));
  dispatch(setWebsiteValue(doc.website === undefined ? '' : doc.website));
  dispatch(setAdminNameValue(doc.adminName === undefined ? '' : doc.adminName));
  dispatch(setAdminEmailValue(doc.adminEmail === undefined ? '' : doc.adminEmail));
  dispatch(setEligibilityClassesValue(doc.eligibilityClasses === undefined ? '' : doc.eligibilityClasses));
  dispatch(setMinimumHoursValue(doc.minimumHours === undefined ? '' : doc.minimumHours));
  dispatch(setTerminationTypeValue(doc.terminationType === undefined ? '' : doc.terminationType));
  dispatch(setWaitingPeriodValue(doc.waitingPeriod === undefined ? '' : doc.waitingPeriod));
  dispatch(setPayrollValue(doc.payroll === undefined ? '' : doc.payroll));
  dispatch(setInterestedPayrollValue(doc.interestedPayroll === undefined ? '' : doc.interestedPayroll));
  dispatch(setExtraEligibilityValue(doc.extraEligibility === undefined ? '' : doc.extraEligibility));
  dispatch(setVisionCarriersValue(doc.visionPlanCarriers === undefined ? '' : doc.visionPlanCarriers));
  dispatch(setVisionNumberValue(doc.visionPlanNumber === undefined ? '' : doc.visionPlanNumber));
  dispatch(setVisionDetailsValue(doc.visionDetails === undefined ? '' : doc.visionDetails));
  dispatch(setDentalNumberValue(doc.dentalPlanNumber === undefined ? '' : doc.dentalPlanNumber));
  dispatch(setDentalCarriersValue(doc.dentalPlanCarriers === undefined ? '' : doc.dentalPlanCarriers));
  dispatch(setDentalDetailsValue(doc.dentalDetails === undefined ? '' : doc.dentalDetails));
  dispatch(setMedicalNumberValue(doc.medicalPlanNumber === undefined ? '' : doc.medicalPlanNumber));
  dispatch(setMedicalCarriersValue(doc.medicalPlanCarriers === undefined ? '' : doc.medicalPlanCarriers));
  dispatch(setMedicalDetailsValue(doc.medicalDetails === undefined ? '' : doc.medicalDetails));
  dispatch(setBasicLifeNumbersValue(doc.basicLifePlanNumber === undefined ? '' : doc.basicLifePlanNumber));
  dispatch(setBasicLifeDetailsValue(doc.basicLifeDetails === undefined ? '' : doc.basicLifeDetails));
  dispatch(setBasicLifeCarriersValue(doc.basicLifePlanCarriers === undefined ? '' : doc.basicLifePlanCarriers));
  dispatch(setVolLifeNumbersValue(doc.volLifePlanNumber === undefined ? '' : doc.volLifePlanNumber));
  dispatch(setVolLifeCarriersValue(doc.volLifePlanCarriers === undefined ? '' : doc.volLifePlanCarriers));
  dispatch(setVolLifeDetailsValue(doc.volLifeDetails === undefined ? '' : doc.volLifeDetails));
  dispatch(setStdNumberValue(doc.stdPlanNumber === undefined ? '' : doc.stdPlanNumber));
  dispatch(setStdCarrierValue(doc.stdPlanCarriers === undefined ? '' : doc.stdPlanCarriers));
  dispatch(setStdDetailValue(doc.stdDetails === undefined ? '' : doc.stdDetails));
  dispatch(setLtdNumberValue(doc.ltdPlanNumber === undefined ? '' : doc.ltdPlanNumber));
  dispatch(setLtdCarrierValue(doc.ltdPlanCarriers === undefined ? '' : doc.ltdPlanCarriers));
  dispatch(setLtdDetailValue(doc.ltdDetails === undefined ? '' : doc.ltdDetails));
  dispatch(setAdditionalLifeValue(doc.additionalLifeDetails === undefined ? '' : doc.additionalLifeDetails));
  dispatch(setRatesValues(doc.rates === undefined ? '' : doc.rates));
  dispatch(setbuildDeadlineValues(doc.buildDeadline === undefined ? '' : doc.buildDeadline));
  dispatch(setOpenEnrollmentValues(doc.openEnrollment === undefined ? '' : doc.openEnrollment));
  dispatch(setAllOtherDetailsValue(doc.allOtherDetails === undefined ? '' : doc.allOtherDetails));
  dispatch(setFinancialNumberValue(doc.financialPlanNumber === undefined ? '' : doc.financialPlanNumber));
  dispatch(setFinancialCarrierValue(doc.financialPlanCarriers === undefined ? '' : doc.financialPlanCarriers));
  dispatch(setFinancialDetailValue(doc.financialDetails === undefined ? '' : doc.financialDetails));
  dispatch(setOtherNumberValue(doc.otherPlanNumber === undefined ? '' : doc.otherPlanNumber));
  dispatch(setOtherCarrierValue(doc.otherPlanCarriers === undefined ? '' : doc.otherPlanCarriers));
  dispatch(setOtherDetailValue(doc.otherDetails === undefined ? '' : doc.otherDetails));
  setTimeout(() => {
    dispatch(setNewBuildNavigation())
  },1500)}
}


if (userCollection.isLoading) {
  return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
}
const userData = userCollection.data

  return (
    <>
          <p1 is="custom"><b>Carefully review the following information:</b></p1>
          <p3 is='custom'>The saved intake form is to be used to retrieve previously started and exited intakes. In order to properly save an intake, you must use the 'Save Build' button in the upper left corner of the build screens. The website will save as many intakes as you wish. Please begin to retrieve a previously saved intake from below. If you wish to work on or submit a different caseworker's intake, please return to the homepage and and enter the site using their name.</p3>
          <p3 is='custom'>After retrieving a saved intake, you MUST save the build again in order to update the saved intake. Please remember to save your build before closing out your window or tab.</p3>
          <p3 is='custom'></p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrower' 
          label='Saved Intakes'
          select
          
          >
            {userData.docs.map((doc,i) => {
              const data = doc.data();
              return (
                <MenuItem index={i} value={data.groupName} onClick={handleUserSelect} key={i} >{data.groupName}</MenuItem>
              )
            })}
          </TextField>
          <Button variant='contained' sx={{marginTop: '1rem'}} disabled={disabledButton} onClick={handleRetrieveIntake}>Retrieve Intake</Button>
    </>
  )
}
