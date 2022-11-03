import { Button, TextField } from '@mui/material'
import React from 'react'

export default function DeadlinesRenewal() {
  return (
    <>
          <p3 is="custom">Build Deadline</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter Date'
          />
          <p3 is="custom">Open Enrollment Start and End Dates</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='City...'
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
