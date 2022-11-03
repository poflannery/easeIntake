import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setDentalCarriersValue, setDentalDetailsValue, setDentalNumberValue, setMedicalCarriersValue, setMedicalDetailsValue, setMedicalNumberValue, setVisionCarriersValue, setVisionDetailsValue, setVisionNumberValue } from '../../../redux/NewBuildValuesReducer';

export default function MedicalDentalVision() {



  
// redux 
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)


// local states
const [medicalNumber,setMedicalNumber] = useState(store.medicalPlanNumber)
const [medicalCarriers,setMedicalCarriers] = useState(store.medicalPlanCarriers)
const [dentalNumber,setDentalNumber] = useState(store.dentalPlanNumber)
const [dentalCarriers,setDentalCarriers] = useState(store.dentalPlanCarriers)
const [visionNumber,setVisionNumber] = useState(store.visionPlanNumber)
const [visionCarriers,setVisionCarriers] = useState(store.visionPlanCarriers)
const [medicalDetails,setMedicalDetails] = useState(store.medicalDetails)
const [dentalDetails,setDentalDetails] = useState(store.dentalDetails)
const [visionDetails,setVisionDetails] = useState(store.visionDetails)
const [stage,setStage] = useState((medicalNumber && medicalCarriers && dentalNumber && visionCarriers && dentalCarriers && visionNumber) ? 1 : 0)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [error3,setError3] = useState(false)
const [error4,setError4] = useState(false)
const [error5,setError5] = useState(false)
const [error6,setError6] = useState(false)
const [submitting,setSubmitting] = useState(false)


// methods
const handleCheckFields = () => {
  medicalNumber === '' ? setError1(true) : setError1(false)
  medicalCarriers === '' ? setError2(true) : setError2(false)
  dentalNumber === '' ? setError3(true) : setError3(false)
  dentalCarriers === '' ? setError4(true) : setError4(false)
  visionNumber === '' ? setError5(true) : setError5(false)
  visionCarriers === '' ? setError6(true) : setError6(false)
  if (medicalNumber && medicalCarriers && dentalNumber && visionCarriers && dentalCarriers && visionNumber) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setMedicalNumberValue(medicalNumber));
  dispatch(setMedicalDetailsValue(medicalDetails));
  dispatch(setMedicalCarriersValue(medicalCarriers));
  dispatch(setDentalCarriersValue(dentalCarriers));
  dispatch(setDentalDetailsValue(dentalDetails));
  dispatch(setDentalNumberValue(dentalNumber));
  dispatch(setVisionCarriersValue(visionCarriers));
  dispatch(setVisionDetailsValue(visionDetails));
  dispatch(setVisionNumberValue(visionNumber));
  setTimeout(() => {
    console.log(store)
    setSubmitting(false)
    savedNotice()
  },1000);
}
const savedNotice = () => {
  dispatch(setNoticeBarText('Information Saved!'));
  setTimeout(() => {
    dispatch(setNoticeBarText('Notifications will appear here when needed. Thank you!'));
  },3000)
}



// return \\
  return (
    <>
          <p3 is="custom">Medical</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setMedicalNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.medicalPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setMedicalCarriers(e.target.value)}
          error={error2}
          helperText={error2 ? 'Must Contain a Value' : ''}
          defaultValue={store.medicalPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Medical Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          onChange={(e) => setMedicalDetails(e.target.value)}
          defaultValue={store.medicalDetails}
          disabled={submitting ? true : false}
          rows={2}
          />
          <p3 is="custom">Dental</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setDentalNumber(e.target.value)}
          error={error3}
          helperText={error3 ? 'Must Contain a Value' : ''}
          defaultValue={store.dentalPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setDentalCarriers(e.target.value)}
          error={error4}
          helperText={error4 ? 'Must Contain a Value' : ''}
          defaultValue={store.dentalPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Dental Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          onChange={(e) => setDentalDetails(e.target.value)}
          defaultValue={store.dentalDetails}
          disabled={submitting ? true : false}
          rows={2}
          />
          <p3 is="custom">Vision</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setVisionNumber(e.target.value)}
          error={error5}
          helperText={error5 ? 'Must Contain a Value' : ''}
          defaultValue={store.visionPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setVisionCarriers(e.target.value)}
          error={error6}
          helperText={error6 ? 'Must Contain a Value' : ''}
          defaultValue={store.visionPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Vision Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          onChange={(e) => setVisionDetails(e.target.value)}
          defaultValue={store.visionDetails}
          disabled={submitting ? true : false}
          rows={2}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
