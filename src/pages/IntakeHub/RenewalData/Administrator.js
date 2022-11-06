import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function AdministratorRenewal() {

// redux 
const store = useSelector(state => state.renewalValues)


  return (
    <>
          <p3 is="custom">If change in administrator, add name here</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          defaultValue={store.adminName}
          
          />
          <p3 is="custom">New Administrator's Email</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Email...'
          defaultValue={store.adminEmail}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
