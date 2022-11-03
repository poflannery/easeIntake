import { Button, TextField } from '@mui/material'
import React from 'react'

export default function AdministratorRenewal() {
  return (
    <>
          <p3 is="custom">If change in administrator, add name here</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Name...'
          />
          <p3 is="custom">New Administrator's Email</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Email...'
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
