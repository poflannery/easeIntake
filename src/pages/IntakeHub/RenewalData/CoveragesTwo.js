import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'

export default function CoveragesTwoRenewal() {
  return (
    <>
          <p3 is="custom">Enter Any Additional Details Here</p3>
          <FormControlLabel className='FormControlLabel' control={<Checkbox size='small' />} label='Changes to other plans' />
          <TextField
          variant='outlined'
          size='small'
          className='sidebar__left_search__input' 
          placeholder='All other change details here...include # of plans if changing'
          multiline
          rows={4}
          />
          <Button variant='contained' sx={{marginTop: '1rem'}}>Save Information</Button>
    </>
  )
}
