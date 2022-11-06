import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function DeadlinesRenewal() {


// redux
const store = useSelector(state => state.renewalValues)




  return (
    <>
          <p3 is="custom">Build Deadline</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter Date...'
          defaultValue={store.buildDeadline}
          />
          <p3 is="custom">Open Enrollment Start and End Dates</p3>
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='Enter Dates...'
          defaultValue={store.enrollmentDates}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button> {/* Check Required fields, then save data button appears*/}
    </>
  )
}
