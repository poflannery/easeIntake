import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setEligibilityChangeRenewal } from '../../../redux/renewalValuesReducer';



export default function EligibilityRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// local states
const [details,setDetails] = useState(store.eligbilityChangeDetails)
const [submitting,setSubmitting] = useState(false)
// methods
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setEligibilityChangeRenewal(details))
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


// return \\
  return (
    <>
          <p3 is="custom">Changes to eligibility (detail any changes to classes and the associated updates)</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Type out details...'
          multiline
          rows={4}
          defaultValue={store.eligbilityChangeDetails}
          onChange={(e) => setDetails(e.target.value)}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button>
    </>
  )
}
