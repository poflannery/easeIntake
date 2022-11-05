import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setbuildDeadlineValues, setOpenEnrollmentValues } from '../../../redux/NewBuildValuesReducer';

export default function Deadlines() {

// redux
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)

// local states
const [buildDeadline,setBuildDeadline] = useState(store.buildDeadline)
const [enrollment, setEnrollment] = useState(store.openEnrollment)
const [stage,setStage] = useState((buildDeadline && enrollment) ? 1 : 0)
const [error1,setError1] = useState(false)
const [error2,setError2] = useState(false)
const [submitting,setSubmitting] = useState(false)

// methods
const handleCheckFields = () => {
  buildDeadline === '' ? setError1(true) : setError1(false)
  enrollment === '' ? setError2(true) : setError2(false)
  if (buildDeadline && enrollment) {
    setStage(1)
  }
}
const handleSaveInformation = () => {
  setSubmitting(true);
  dispatch(setbuildDeadlineValues(buildDeadline));
  dispatch(setOpenEnrollmentValues(enrollment));
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
          <p3 is="custom">Build Deadline</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter Date...'
          onChange={(e) => setBuildDeadline(e.target.value)}
          error={error1}
          helperText={error1 ? 'Must Contain a Value' : ''}
          defaultValue={store.buildDeadline}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">Open Enrollment Start and End Dates</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter Dates...'
          onChange={(e) => setEnrollment(e.target.value)}
          error={error2}
          helperText={error2 ? 'Must Contain a Value' : ''}
          defaultValue={store.openEnrollment}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}onClick={stage === 0 ? handleCheckFields : handleSaveInformation}>{stage === 0 ? 'Check Required Fields' : 'Save Information'}</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
