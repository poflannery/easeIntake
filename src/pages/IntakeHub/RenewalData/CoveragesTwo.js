import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setOtherPlanChangeRenewal, setOtherPlanDetailsRenewal } from '../../../redux/renewalValuesReducer';

export default function CoveragesTwoRenewal() {

// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// ref
const otherRef = useRef();
const checkedRef = useRef();

// local states
const [otherChecked,setOtherChecked] = useState(store.otherPlanChange)
const [otherHiddenDetails, setOtherHiddentDetails] = useState(true)
const [details,setDetails] = useState(store.otherChangeDetails)
const [submitting,setSubmitting] = useState(false)
//methods
const eraseOtherDetails = () => {
  if (checkedRef.current.checked === true)
  otherRef.current.value = ''
}
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setOtherPlanChangeRenewal(checkedRef.current.checked))
  dispatch(setOtherPlanDetailsRenewal(details))
  setTimeout(() => {
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
          <p3 is="custom">Enter Any Additional Details Here</p3>
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' defaultChecked={store.otherPlanChange} checked={otherChecked} inputRef={checkedRef} onClick={() => setOtherChecked(!otherChecked)} onChange={() => {setOtherHiddentDetails(!otherHiddenDetails);eraseOtherDetails()}} />} label='Changes to other plans' />
          <TextField
          inputRef={otherRef}
          sx={{display: otherChecked ? 'inline-block' : 'none !important'}}
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='All other change details here...include # of plans if changing'
          multiline
          rows={4}
          onChange={(e) => setDetails(e.target.value)}
          defaultValue={store.otherChangeDetails}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button>
    </>
  )
}
