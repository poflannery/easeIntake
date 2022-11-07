import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setRatesChangeDetailsRenewal } from '../../../redux/renewalValuesReducer';

export default function RatesRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// local states
const [rates,setRates] = useState(store.rateChangeDetails)
const [submitting,setSubmitting] = useState(false)
// methods
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setRatesChangeDetailsRenewal(rates))
  setTimeout(() => {
    console.log(store)
    setSubmitting(false)
    savedNotice()
  },1000)
}
const savedNotice = () => {
  dispatch(setNoticeBarText('Information Saved!'));
  setTimeout(() => {
    dispatch(setNoticeBarText('Notifications will appear here when needed. Thank you!'));
  },3000)
}

  return (
    <>
          <p3 is="custom">Only use this form to provide a broad overview of rate changes. Detail specifics in document upload.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Rate Changes...'
          multiline
          rows={4}
          defaultValue={store.rateChangeDetails}
          onChange={(e) => setRates(e.target.value)}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button>
    </>
  )
}
