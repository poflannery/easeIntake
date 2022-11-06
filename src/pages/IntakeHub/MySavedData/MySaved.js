import { Button, MenuItem, TextField } from '@mui/material'
import { useFirestoreQuery } from '@react-query-firebase/firestore'
import { collection, query } from 'firebase/firestore'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase/config'
import { setIntakeIndex } from '../../../redux/globalReducer'
import { setNewBuildNavigation } from '../../../redux/navigationReducer'
import { setAdditionalLifeValue, setAdminEmailValue, setAdminNameValue, setAllOtherDetailsValue, setBasicLifeCarriersValue, setBasicLifeDetailsValue, setBasicLifeNumbersValue, setbuildDeadlineValues, setCityValue, setDentalCarriersValue, setDentalDetailsValue, setDentalNumberValue, setEligibilityClassesValue, setExtraEligibilityValue, setFeinValue, setFinancialCarrierValue, setFinancialDetailValue, setFinancialNumberValue, setGroupNameValue, setInterestedPayrollValue, setLtdCarrierValue, setLtdDetailValue, setLtdNumberValue, setMedicalCarriersValue, setMedicalDetailsValue, setMedicalNumberValue, setMinimumHoursValue, setOpenEnrollmentValues, setOtherCarrierValue, setOtherDetailValue, setOtherNumberValue, setPayrollValue, setRatesValues, setSicCodeValue, setStateValue, setStdCarrierValue, setStdDetailValue, setStdNumberValue, setTerminationTypeValue, setVisionCarriersValue, setVisionDetailsValue, setVisionNumberValue, setVolLifeCarriersValue, setVolLifeDetailsValue, setVolLifeNumbersValue, setWaitingPeriodValue, setWebsiteValue, setZipValue } from '../../../redux/NewBuildValuesReducer'

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
  dispatch(setGroupNameValue(doc.groupName));
  dispatch(setCityValue(doc.city));
  dispatch(setStateValue(doc.state));
  dispatch(setZipValue(doc.zip));
  dispatch(setSicCodeValue(doc.sicCode));
  dispatch(setFeinValue(doc.fein));
  dispatch(setWebsiteValue(doc.website));
  dispatch(setAdminNameValue(doc.adminName));
  dispatch(setAdminEmailValue(doc.adminEmail));
  dispatch(setEligibilityClassesValue(doc.eligibilityClasses));
  dispatch(setMinimumHoursValue(doc.minimumHours));
  dispatch(setTerminationTypeValue(doc.terminationType));
  dispatch(setWaitingPeriodValue(doc.waitingPeriod));
  dispatch(setPayrollValue(doc.payroll));
  dispatch(setInterestedPayrollValue(doc.interestedPayroll));
  dispatch(setExtraEligibilityValue(doc.extraEligibility));
  dispatch(setVisionCarriersValue(doc.visionPlanCarriers));
  dispatch(setVisionNumberValue(doc.visionPlanNumber));
  dispatch(setVisionDetailsValue(doc.visionDetails));
  dispatch(setDentalNumberValue(doc.dentalPlanNumber));
  dispatch(setDentalCarriersValue(doc.dentalPlanCarriers));
  dispatch(setDentalDetailsValue(doc.dentalDetails));
  dispatch(setMedicalNumberValue(doc.medicalPlanNumber));
  dispatch(setMedicalCarriersValue(doc.medicalPlanCarriers));
  dispatch(setMedicalDetailsValue(doc.medicalDetails));
  dispatch(setBasicLifeNumbersValue(doc.basicLifePlanNumber));
  dispatch(setBasicLifeDetailsValue(doc.basicLifeDetails));
  dispatch(setBasicLifeCarriersValue(doc.basicLifePlanCarriers));
  dispatch(setVolLifeNumbersValue(doc.volLifePlanNumber));
  dispatch(setVolLifeCarriersValue(doc.volLifePlanCarriers));
  dispatch(setVolLifeDetailsValue(doc.volLifeDetails));
  dispatch(setStdNumberValue(doc.stdPlanNumber));
  dispatch(setStdCarrierValue(doc.stdPlanCarriers));
  dispatch(setStdDetailValue(doc.stdDetails));
  dispatch(setLtdNumberValue(doc.ltdPlanNumber));
  dispatch(setLtdCarrierValue(doc.ltdPlanCarriers));
  dispatch(setLtdDetailValue(doc.ltdDetails));
  dispatch(setAdditionalLifeValue(doc.additionalLifeDetails));
  dispatch(setRatesValues(doc.rates));
  dispatch(setbuildDeadlineValues(doc.buildDeadline));
  dispatch(setOpenEnrollmentValues(doc.openEnrollment));
  dispatch(setAllOtherDetailsValue(doc.allOtherDetails));
  dispatch(setFinancialNumberValue(doc.financialPlanNumber));
  dispatch(setFinancialCarrierValue(doc.financialPlanCarriers));
  dispatch(setFinancialDetailValue(doc.financialDetails));
  dispatch(setOtherNumberValue(doc.otherPlanNumber));
  dispatch(setOtherCarrierValue(doc.otherPlanCarriers));
  dispatch(setOtherDetailValue(doc.otherDetails));
  setTimeout(() => {
    dispatch(setNewBuildNavigation())
  },1500)
}


if (userCollection.isLoading) {
  return <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading...</div>
}
const userData = userCollection.data

  return (
    <>
          <p1 is="custom"><b>Carefully review the following information:</b></p1>
          <p3 is='custom'>The saved intake form is to be used to retrieve previously started and exited intakes. In order to properly save an intake, you must use the 'Save Build' button in the upper left corner. The form will save as many intakes as you wish. Please begin to retrieve a previously saved intake from below. If you wish to work on or submit a different caseworker's intake, please return to the homepage and return by selecting their name.</p3>
          <p3 is='custom'>After retrieving a saved intake, you MUST save the build again in order to update the saved intake. Please remember to save your build.</p3>
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
                <MenuItem index={i} value={data.groupName} onClick={handleUserSelect}>{data.groupName}</MenuItem>
              )
            })}
          </TextField>
          <Button variant='contained' sx={{marginTop: '1rem'}} disabled={disabledButton} onClick={handleRetrieveIntake}>Retrieve Intake</Button>
    </>
  )
}
