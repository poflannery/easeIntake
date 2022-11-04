import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setBasicDetailsValue, setBasicLifeCarriersValue, setBasicLifeDetailsValue, setBasicLifeNumbersValue, setVolLifeCarriersValue, setVolLifeDetailsValue, setVolLifeNumbersValue } from '../../../redux/NewBuildValuesReducer';

export default function LIFEADD() {

// redux 
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)


// local states
const [basicLifeNumber,setBasicLifeNumber] = useState(store.basicLifePlanNumber)
const [basicLifeDetails,setBasicLifeDetails] = useState(store.basicLifeDetails)
const [basicLifeCarrier,setBasicLifeCarrier] = useState(store.basicLifePlanCarriers)
const [volLifeNumber,setVolLifeNumber] = useState(store.volLifePlanNumber)
const [volLifeDetails,setVolLifeDetails] = useState(store.volLifeDetails)
const [volLifeCarrier,setVolLifeCarrier] = useState(store.volLifePlanCarriers)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [stage,setStage] = useState((basicLifeNumber && volLifeNumber) ? 1 : 0)
const [submitting,setSubmitting] = useState(false)

// methods
const handleCheckFields = () => {
  basicLifeNumber === '' ? setError1(true) : setError1(false)
  volLifeNumber === '' ? setError2(true) : setError2(false)
  if (basicLifeNumber && volLifeNumber) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setBasicLifeNumbersValue(basicLifeNumber));
  dispatch(setBasicLifeDetailsValue(basicLifeDetails));
  dispatch(setVolLifeNumbersValue(volLifeNumber));
  dispatch(setVolLifeDetailsValue(volLifeDetails));
  dispatch(setBasicLifeCarriersValue(basicLifeCarrier));
  dispatch(setVolLifeCarriersValue(volLifeCarrier));
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
          <p3 is="custom">Basic Life and AD&D</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setBasicLifeNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.basicLifePlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setBasicLifeCarrier(e.target.value)}
          defaultValue={store.basicLifePlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Basic Life/AD&D Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          onChange={(e) => setBasicLifeDetails(e.target.value)}
          defaultValue={store.basicLifeDetails}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">Voluntary Life and AD&D</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setVolLifeNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.volLifePlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setVolLifeCarrier(e.target.value)}
          defaultValue={store.volLifePlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Voluntary Life/AD&D Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          onChange={(e) => setVolLifeDetails(e.target.value)}
          defaultValue={store.volLifeDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
