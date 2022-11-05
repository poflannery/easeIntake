import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer'
import { setOtherCarrierValue, setOtherDetailValue, setOtherNumberValue } from '../../../redux/NewBuildValuesReducer'

export default function Other() {
  
// redux
const dispatch = useDispatch()
const store = useSelector(state => state.newBuildValues)

// local states
const [number,setNumber] = useState(store.otherPlanNumber)
const [carrier,setCarrier] = useState(store.otherPlanCarriers)
const [detail,setDetail] = useState(store.OtherDetails)
const [error1,setError1] = useState(false)
const [stage,setStage] = useState((number) ? 1 : 0)
const [submitting,setSubmitting] = useState(false)

// methods
const handleCheckFields = () => {
  number === '' ? setError1(true) : setError1(false)
  if (number) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setOtherNumberValue(number));
  dispatch(setOtherCarrierValue(carrier));
  dispatch(setOtherDetailValue(detail));

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
          <p3 is="custom">All Other Plans</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.otherPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setCarrier(e.target.value)}
          defaultValue={store.otherPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Additional Details</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={4}
          onChange={(e) => setDetail(e.target.value)}
          defaultValue={store.otherDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
