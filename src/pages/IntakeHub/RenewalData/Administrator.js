import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setNoticeBarText } from '../../../redux/globalReducer';
import { setAdminEmailRenewal, setAdminNameRenewal } from '../../../redux/renewalValuesReducer';

export default function AdministratorRenewal() {

// redux 
const dispatch = useDispatch();
const store = useSelector(state => state.renewalValues)
// local states
const [adminName,setAdminName] = useState(store.adminName)
const [adminEmail, setAdminEmail] = useState(store.adminEmail)
const [submitting,setSubmitting] = useState(false)
// methods
const handleSaveInformation = () => {
  setSubmitting(true)
  dispatch(setAdminNameRenewal(adminName))
  dispatch(setAdminEmailRenewal(adminEmail))
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
          <p3 is="custom">If change in administrator, add name here</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          onChange={(e) => setAdminName(e.target.value)}
          defaultValue={store.adminName}
          disabled={submitting ? true : false}
          />
          <p3 is="custom">New Administrator's Email</p3>
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
