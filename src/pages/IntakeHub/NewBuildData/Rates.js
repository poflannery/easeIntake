import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setRatesValues } from '../../../redux/NewBuildValuesReducer';

export default function Rates() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)

// local states
const [rates,setRates] = useState(store.rates)
const [submitting,setSubmitting] = useState(false)

// methods
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setRatesValues(rates))
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
          <p3 is="custom">Enter unique rate details. Provide full rates in document upload.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Details'
          multiline
          rows={4}
          onChange={(e) => setRates(e.target.value)}
          defaultValue={store.rates}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button>
    </>
  )
}
