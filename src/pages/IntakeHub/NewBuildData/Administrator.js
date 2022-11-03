import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setNoticeText } from '../../../redux/globalReducer';
import { setadminEmail, setadminName } from '../../../redux/NewBuildValuesReducer';

export default function Administrator() {

// redux
const dispatch = useDispatch();
const store = useSelector(state => state.newBuildValues)
const globalStore = useSelector(state => state.global)

// local states
const [adminName,setAdminName] = useState(store.adminName)
const [adminEmail, setAdminEmail] = useState(store.adminEmail)
const [submitting,setSubmitting] = useState(false)

// methods
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setadminName(adminName))
  dispatch(setadminEmail(adminEmail))
  setTimeout(() => {
    console.log(store)
    setSubmitting(false)
    savedNotice()
  },1000)
}
const savedNotice = () => {
  dispatch(setNoticeText('Information Saved!'));
  setTimeout(() => {
    dispatch(setNoticeText('Notifications will appear here when needed. Thank you!'));
  },3000)
}


  return (
    <>
          <p3 is="custom">Administrator's Name</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          onChange={(e) => setAdminName(e.target.value)}
          defaultValue={store.adminName}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">Administrator's Email</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Email...'
          onChange={(e) => setAdminEmail(e.target.value)}
          defaultValue={store.adminEmail}
          disabled={submitting ? true : false}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}} onClick={handleSaveInformation}>Save Information</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
