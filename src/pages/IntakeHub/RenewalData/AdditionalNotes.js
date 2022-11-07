import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setAdditionalNotesRenewal } from '../../../redux/renewalValuesReducer';

export default function AdditionalNotesRenewal() {


// redux
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// local states
const [notes,setNotes] = useState(store.additionalNotes)
const [error1,setError1] = useState(false)
const [stage,setStage] = useState((notes) ? 1 : 0)
const [submitting,setSubmitting] = useState(false)

// methods
const handleCheckFields = () => {
  notes === '' ? setError1(true) : setError1(false)
  if (notes) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setAdditionalNotesRenewal(notes))
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
  },1000)
}



  return (
    <>
          <p3 is="custom">As part of an effort to streamline the eligibility process, please list any eligibility tasks you will be handling personally. We will forward this information to the eligibility team and have them handle all other tasks during, and after, open enrollment.</p3>
          <p3 is="custom">Examples of these may include pushing enrollment yourself due to a change in medical carrier, submitting financial plan enrollments, or others.</p3>
          <p3 is="custom">If nothing will be handled on your end, please indicate nothing or NA below and we will take this as confirmation that the eligibility team will be handling all tasks.</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Details'
          multiline
          rows={4}
          onChange={(e) => setNotes(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.additionalNotes}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button>
    </>
  )
}
