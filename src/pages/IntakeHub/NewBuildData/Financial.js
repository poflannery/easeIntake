import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer'
import { setFinancialCarrierValue, setFinancialDetailValue, setFinancialNumberValue } from '../../../redux/NewBuildValuesReducer'

export default function Financial() {

// redux
const dispatch = useDispatch()
const store = useSelector(state => state.newBuildValues)

// local states
const [number,setNumber] = useState(store.financialPlanNumber)
const [carrier,setCarrier] = useState(store.financialPlanCarriers)
const [detail,setDetail] = useState(store.financialDetails)
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
  dispatch(setFinancialNumberValue(number));
  dispatch(setFinancialCarrierValue(carrier));
  dispatch(setFinancialDetailValue(detail));

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
          <p3 is="custom">Financial Plans</p3>
          <div>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Number of Plans...'
          onChange={(e) => setNumber(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.financialPlanNumber}
          disabled={submitting ? true : false}
          />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input input__narrow' 
          placeholder='Carriers...'
          onChange={(e) => setCarrier(e.target.value)}
          defaultValue={store.financialPlanCarriers}
          disabled={submitting ? true : false}
          />
          </div>
          <p3 is="custom">Types of Plans and additional details. Please include if HSA/HRA/FSA plans will be on ease.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Describe additional details about the plans or unique circumstances...'
          multiline
          rows={2}
          onChange={(e) => setDetail(e.target.value)}
          defaultValue={store.financialDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
